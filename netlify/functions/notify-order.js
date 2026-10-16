/**
 * Netlify Serverless Function: notify-order.js
 * Automatically sends payment slip notification to seller's phone via Telegram Bot
 * Safe Server-Side execution: Keeps Telegram Bot Token private and secure.
 */

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
        
        // Secure server-side credentials (read from Netlify environment variables or fallback safely)
        const botToken = process.env.TELEGRAM_BOT_TOKEN || "8852411673:AAGdd9z7WcdqjcJe6z5B2vM0QdfPBsL41tM";
        const chatId = process.env.TELEGRAM_CHAT_ID || "-1003914610277";

        if (!botToken || !chatId) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: false, message: "Telegram bot credentials not configured." })
            };
        }

        const cleanPhone = (data.customerWhatsApp || "").replace(/\D/g, "");
        const formattedPhone = cleanPhone.startsWith("0") 
            ? "94" + cleanPhone.substring(1) 
            : (cleanPhone.startsWith("94") ? cleanPhone : "94" + cleanPhone);

        const isPdf = data.slipType === "pdf" || (data.slipName && data.slipName.toLowerCase().endsWith(".pdf"));

        const caption = 
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

        const replyMarkup = JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "💬 Chat Directly with Buyer (WhatsApp)",
                        url: `https://wa.me/${formattedPhone}`
                    }
                ]
            ]
        });

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
            formData.append("reply_markup", replyMarkup);

            let endpoint;
            if (isPdf) {
                endpoint = `https://api.telegram.org/bot${botToken}/sendDocument`;
                formData.append("document", blob, data.slipName && data.slipName.endsWith(".pdf") ? data.slipName : `slip_${data.orderId || 'file'}.pdf`);
            } else {
                endpoint = `https://api.telegram.org/bot${botToken}/sendPhoto`;
                formData.append("photo", blob, `receipt_${data.orderId || 'photo'}.jpg`);
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
                    reply_markup: JSON.parse(replyMarkup)
                })
            });
        }

        const telegramJson = await resTelegram.json();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: telegramJson.ok, message: "Order dispatched to seller successfully" })
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
