/**
 * Netlify Serverless Function: gemini-chat.js
 * LUKZI CHEATS Official AI Smart Assistant
 */

const https = require("https");

const SYSTEM_PROMPT = `You are LUKZI AI, the official intelligent gaming assistant of "LUKZI COMEBACK / LUKZI CHEATS" — Sri Lanka's #1 Most Trusted Digital Gaming Store & Free Fire Tools Hub (Colombo, Sri Lanka).

CRITICAL LANGUAGE RULE (ABSOLUTE 100% STRICTNESS):
- If the user writes in SINHALA or SINGLISH: Reply ONLY in natural, polite Sinhala. Do NOT switch to English.
- If the user writes in ENGLISH: Reply ONLY in English.
- If the user writes in TAMIL: Reply ONLY in Tamil.
- NEVER switch languages in the middle of a conversation.

OFFICIAL PRODUCTS & EXACT PRICES (LKR):
1. LUKZI Mobile Optimizer & Sensi: 1 Month: LKR 1,200 | 1 Update Valid: LKR 2,000 | Lifetime VIP: LKR 5,000
2. Internal Panel v4 (PC): 7 Days: LKR 800 | 1 Month: LKR 1,500 | Lifetime VIP: LKR 4,000
3. Mouse Bot Pro (PC): 1 Month: LKR 1,500 | Lifetime VIP: LKR 3,000
4. LUKZI iOS Panel God Mode: 1 Month: LKR 2,000 | Lifetime VIP: LKR 4,500

OFFICIAL VERIFIED PAYMENT METHODS ONLY:
1. People's Bank (මහජන බැංකුව):
   - Account Number: 032200306550753
   - Account Name: TD Paranahewa
   - Branch: Colombo (LankaQR supported)
2. EzCash:
   - Merchant Number: 076 622 5968 (0766225968)
No other banks accepted. After paying, customers upload slip on website BUY NOW form.

SUPPORT STAFF:
- Admin Isuka: +94 70 519 4865
- Admin Dinu Malli: +94 72 508 7806

FORMATTING & STYLE:
- Use rich emojis in every response (⚡, 🛡️, 💎, 🚀, 🎯, 💳, 👑, 🔥, ✅, 📌, 🎮, 📱, 💻, 🏦).
- Organize responses with clean bullet points and bold highlights for prices, account numbers, and contacts.`;

exports.handler = async (event) => {
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
        const body = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
        const userMessage = (body.message || "").trim();
        const history = Array.isArray(body.history) ? body.history : [];

        if (!userMessage) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Message is required" })
            };
        }

        const apiKey = process.env.GEMINI_API_KEY || "AQ.Ab8RN6LtTm5p93GvgQYKbrhtit1AFoJQv_rtmAIf1kC6Vf9KRQ";

        const contents = [];
        const recentHistory = history.slice(-4);
        for (const item of recentHistory) {
            if (item.sender === "user") {
                contents.push({ role: "user", parts: [{ text: item.text }] });
            } else if (item.sender === "ai") {
                contents.push({ role: "model", parts: [{ text: item.text }] });
            }
        }

        contents.push({ role: "user", parts: [{ text: userMessage }] });

        const requestPayload = {
            systemInstruction: {
                parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: contents,
            generationConfig: {
                temperature: 0.6,
                maxOutputTokens: 500
            }
        };

        const postData = JSON.stringify(requestPayload);
        const model = "gemini-3.5-flash-lite";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const aiResponse = await new Promise((resolve, reject) => {
            const req = https.request(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(postData)
                },
                timeout: 9000
            }, (res) => {
                let chunks = "";
                res.on("data", chunk => chunks += chunk);
                res.on("end", () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        try {
                            const parsed = JSON.parse(chunks);
                            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text || "සමාවෙන්න සහෝ, සුළු කාර්මික දෝෂයක් ඇති විය. කරුණාකර නැවත උත්සාහ කරන්න.";
                            resolve(text);
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        reject(new Error(`Gemini API Error [${res.statusCode}]: ${chunks}`));
                    }
                });
            });

            req.on("error", reject);
            req.on("timeout", () => {
                req.destroy();
                reject(new Error("Gemini API request timed out"));
            });

            req.write(postData);
            req.end();
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply: aiResponse })
        };

    } catch (err) {
        console.error("Gemini Function Error:", err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: "AI service temporary issue",
                details: err.message
            })
        };
    }
};
