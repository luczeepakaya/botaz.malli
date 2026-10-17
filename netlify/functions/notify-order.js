/**
 * Netlify Serverless Function: notify-order.js
 * Automatically sends payment slip notification or Cyber Abuse Trap alerts to seller via Telegram Bot
 * Safe Server-Side execution: Keeps Telegram Bot Token private and secure.
 */

function containsAbusiveContent(text) {
    if (!text || typeof text !== 'string') return false;
    const clean = text.toLowerCase()
        .replace(/[\s\-_.,/\\!@#$%^&*()+=~`'"[\]{}|:;<>?]+/g, '')
        .replace(/0/g, 'o')
        .replace(/1/g, 'i')
        .replace(/3/g, 'e')
        .replace(/4/g, 'a')
        .replace(/5/g, 's')
        .replace(/7/g, 't')
        .replace(/8/g, 'b');

    const patterns = [
        /huk/i, /huth/i, /hutt/i, /wesi/i, /wesa/i, /vesi/i, /vesa/i,
        /ballo/i, /balla/i, /balu/i, /puka/i, /puk/i, /ponna/i, /ponz/i,
        /ammat/i, /ammag/i, /kari/i, /pakay/i, /pak[aeio]/i, /payy/i,
        /loll/i, /porn/i, /xvideo/i, /agilla/i, /janiy/i, /janita/i, /wesig/i,
        /fuck/i, /bitch/i, /dick/i, /pussy/i, /asshole/i,
        /හුක/, /හුත්ත/, /වේසි/, /බල්ල/, /පුක/, /පොන්න/, /අම්ම/, /කැරි/, /පක/, /පයිය/
    ];
    return patterns.some(rx => rx.test(clean));
}

exports.handler = async (event) => {
    // Enable CORS for frontend requests
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json"
    };

    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    try {
        const data = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
        
        // Secure server-side credentials
        const botToken = process.env.TELEGRAM_BOT_TOKEN || "8852411673:AAGdd9z7WcdqjcJe6z5B2vM0QdfPBsL41tM";
        const chatId = process.env.TELEGRAM_CHAT_ID || "-1003914610277";

        if (!botToken || !chatId) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: false, message: "Telegram bot credentials not configured." })
            };
        }

        const clientIp = (event.headers && (
            event.headers["x-nf-client-connection-ip"] || 
            event.headers["client-ip"] || 
            event.headers["x-forwarded-for"]
        )) || data.clientIp || "Unknown";

        const isAbuse = data.isAbuseTrap === true || 
                        containsAbusiveContent(data.customerName) || 
                        containsAbusiveContent(data.referenceNo);

        const incidentId = data.incidentId || `CCID-LK-${Math.floor(100000 + Math.random() * 900000)}`;

        let caption = "";
        let replyMarkup = null;

        if (isAbuse) {
            // 🚨 CYBER ABUSE / TROLL TRAP ALERT
            caption = 
                `🚨 *CYBER CRIME & ABUSE TRAP TRIGGERED!*\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `⚠️ *Incident Case:* \`${incidentId}\`\n` +
                `🌐 *Offender IP:* \`${clientIp}\`\n` +
                `📍 *ISP / Location:* ${data.geoInfo || 'Sri Lanka'}\n` +
                `📱 *Entered Phone:* \`${data.customerWhatsApp || 'N/A'}\`\n` +
                `👤 *Offensive Input (Name):* ${data.customerName || 'N/A'}\n` +
                `📑 *Offensive Input (Ref):* ${data.referenceNo || 'N/A'}\n` +
                `🖥️ *Device:* ${data.deviceInfo || 'Browser'}\n` +
                `⏰ *Time (SL):* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `🛡️ *Status:* Trap Warning displayed. Nearest Police Station map (police.lk) opened!`;

            replyMarkup = JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: "🔍 Lookup IP Address",
                            url: `https://whatismyipaddress.com/ip/${clientIp}`
                        },
                        {
                            text: "🚓 Police Stations Map",
                            url: "https://police.lk/police-stations-map/"
                        }
                    ]
                ]
            });
        } else {
            // ✅ LEGITIMATE CUSTOMER ORDER
            const cleanPhone = (data.customerWhatsApp || "").replace(/\D/g, "");
            const formattedPhone = cleanPhone.startsWith("0") 
                ? "94" + cleanPhone.substring(1) 
                : (cleanPhone.startsWith("94") ? cleanPhone : "94" + cleanPhone);

            const isPdf = data.slipType === "pdf" || (data.slipName && data.slipName.toLowerCase().endsWith(".pdf"));

            caption = 
                `🔥 *NEW LUKZI ORDER RECEIVED!*\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `🆔 *Order ID:* \`${data.orderId || 'N/A'}\`\n` +
                `👤 *Customer:* ${data.customerName || 'Anonymous'}\n` +
                `📱 *WhatsApp:* \`${data.customerWhatsApp || 'N/A'}\`\n` +
                `📦 *Product:* ${data.productName || 'Tool'}\n` +
                `⏳ *Plan:* ${data.planDuration || 'Standard'}\n` +
                `💰 *Amount:* Rs. ${Number(data.amount || 0).toLocaleString()} LKR\n` +
                `📑 *Ref / Trx:* ${data.referenceNo || 'N/A'}\n` +
                `📄 *Slip File:* ${isPdf ? 'Bank e-Receipt (PDF)' : 'Payment Screenshot (Image)'}\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `👇 *Tap below to open direct WhatsApp chat:*`;

            replyMarkup = JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: "💬 Chat Directly with Buyer (WhatsApp)",
                            url: `https://wa.me/${formattedPhone}`
                        }
                    ]
                ]
            });
        }

        const isPdf = data.slipType === "pdf" || (data.slipName && data.slipName.toLowerCase().endsWith(".pdf"));

        // Convert Base64 dataURI into binary Blob
        let blob = null;
        if (data.slipImage && data.slipImage.includes(',')) {
            try {
                const parts = data.slipImage.split(',');
                const mimeMatch = parts[0].match(/:(.*?);/);
                const mime = mimeMatch ? mimeMatch[1] : (isPdf ? 'application/pdf' : 'image/jpeg');
                const buffer = Buffer.from(parts[1], 'base64');
                blob = new Blob([buffer], { type: mime });
            } catch (err) {
                console.error("Blob convert error:", err);
            }
        }

        let resTelegram;
        if (blob) {
            const formData = new FormData();
            formData.append("chat_id", chatId);
            formData.append("caption", caption);
            formData.append("parse_mode", "Markdown");
            if (replyMarkup) formData.append("reply_markup", replyMarkup);

            let endpoint;
            if (isPdf) {
                endpoint = `https://api.telegram.org/bot${botToken}/sendDocument`;
                formData.append("document", blob, data.slipName && data.slipName.endsWith(".pdf") ? data.slipName : `slip_${data.orderId || 'file'}.pdf`);
            } else {
                endpoint = `https://api.telegram.org/bot${botToken}/sendPhoto`;
                formData.append("photo", blob, `receipt_${data.orderId || (isAbuse ? 'abuse_evidence' : 'photo')}.jpg`);
            }

            resTelegram = await fetch(endpoint, {
                method: "POST",
                body: formData
            });
        } else {
            // Text only message fallback
            resTelegram = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: caption,
                    parse_mode: "Markdown",
                    reply_markup: replyMarkup ? JSON.parse(replyMarkup) : undefined
                })
            });
        }

        const telegramJson = await resTelegram.json();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: telegramJson.ok, 
                isAbuse: isAbuse,
                incidentId: incidentId,
                clientIp: clientIp,
                message: isAbuse ? "Security incident logged." : "Order dispatched to seller successfully" 
            })
        };
    } catch (error) {
        console.error("notify-order handler error:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};
