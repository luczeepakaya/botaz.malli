/**
 * LUKZI CHEATS — Official 24/7 AI Smart Assistant
 * Zero-Lag, Multi-lingual (Locked Language per Turn), Verified Bank Details & Products
 */

(function () {
    "use strict";

    const DIRECT_API_KEY = "AQ.Ab8RN6LtTm5p93GvgQYKbrhtit1AFoJQv_rtmAIf1kC6Vf9KRQ";

    const SYSTEM_PROMPT = `You are LUKZI AI, the official intelligent gaming assistant of "LUKZI COMEBACK / LUKZI CHEATS" — Sri Lanka's #1 Most Trusted Digital Gaming Store & Free Fire Tools Hub (Colombo, Sri Lanka).

CRITICAL LANGUAGE RULE (ABSOLUTE 100% STRICTNESS):
- If instructed to reply in SINHALA: Reply ONLY in natural, polite Sinhala. Do NOT switch to English even if the user wrote English or Singlish technical terms (like PC, Android, Emulator, Bypass).
- If instructed to reply in ENGLISH: Reply ONLY in English. Do NOT mix Sinhala or Tamil words.
- If instructed to reply in TAMIL: Reply ONLY in Tamil.
- NEVER switch languages in the middle of a conversation. Always maintain the user's chosen language.

FREE & PAID OPTIMIZER INFORMATION:
- FREE EDITION: LUKZI Aim Sensi & Lag Fix Tool (v2.0 APK) is 100% FREE! Direct download: https://github.com/luczeepakaya/optimizerfree2/raw/refs/heads/main/AIM%20SENSI%20&%20LAG%20FIX%20TOOL.apk
  (Provides 50% basic device boost, 60 FPS cap, basic drag assist).
- PAID VIP PRO EDITION: Works 10X MORE POWERFULLY (Free එකට වඩා 10 ගුණයක් බලගතුයි!). Includes 90/120 FPS Ultra unlock, Auto Headshot Aim Lock, 100% Safe Memory Bypass.
When users ask for free tools or sensi, share the Free download link and explain that the Paid VIP version is 10X more powerful for winning matches!

OFFICIAL PRODUCTS & EXACT PRICES (LKR):
1. LUKZI Mobile Optimizer & Sensi (Android Mobile - No Root):
   - 1 Month License: LKR 1,200
   - 1 OBB Update Valid: LKR 2,000
   - Lifetime VIP PRO: LKR 5,000
   - Features: RAM Boost, Sensi Touch Assist, 60-90 FPS Unlocker, Floating Crosshair, 100% Safe Memory Bypass.

2. Internal Panel v4 (PC BlueStacks 4/5, LDPlayer 9, MEmu, Nox):
   - 7 Days Key: LKR 800
   - 1 Month License: LKR 1,500
   - Lifetime VIP Access: LKR 4,000
   - Features: Smart Target Lock, 100% Real Damage, Auto Headshot, Full ESP (Line, Box, Distance, Name), Safe Anti-Blacklist.

3. Mouse Bot Pro (PC Emulators):
   - 1 Month License: LKR 1,500
   - Lifetime VIP Access: LKR 3,000
   - Features: Human-like AI Micro Drag Movement, Zero Recoil, Smooth Headshot Tracking.

4. LUKZI iOS Panel God Mode (iPhone & iPad - No Jailbreak):
   - 1 Month License: LKR 2,000
   - Lifetime VIP Access: LKR 4,500
   - Features: Direct iOS Certificate, Auto Aim Lock, 100% Safe Bypass.

OFFICIAL VERIFIED PAYMENT METHODS ONLY:
1. People's Bank (මහජන බැංකුව):
   - Account Number: 032200306550753
   - Account Name: TD Paranahewa
   - Branch: Colombo (LankaQR supported: People's Wave, BOC SmartPay, FriMi, Q+, Flash, WePay)
2. EzCash (Dialog / Hutch / SLT Mobile Wallet):
   - Merchant Number: 076 622 5968 (0766225968)
Strictly notify users that NO other bank or personal number is accepted. After paying, customers upload the slip on the website BUY NOW form or WhatsApp to get their key verified.

SUPPORT STAFF:
- Admin Isuka (Main Admin): +94 70 519 4865
- Admin Dinu Malli (2nd Admin): +94 72 508 7806
- WhatsApp Channel: https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36

TONE & STYLE (RICH EMOJIS & BEAUTIFUL FORMATTING):
- Friendly, gamer-oriented (use "සහෝ", "Bro" naturally).
- ALWAYS include vibrant, appropriate gaming & tech emojis (⚡, 🛡️, 💎, 🚀, 🎯, 💳, 👑, 🔥, ✅, 📌, 🎮, 📱, 💻, 🏦) in every response to make it exciting, engaging, and clear!
- Organize information using clean bullet points (•) and clear headings.
- Always bold important details like prices (**රු. 1,200 LKR**), account numbers (**032200306550753**), and contact numbers (**+94 70 519 4865**).
- Keep formatting clean, stylish, modern, and easily readable with adequate line breaks.
- Never invent fake license keys. Reassure customers that keys are verified and delivered upon slip submission.`;

    let conversationHistory = [];
    let isWaitingForResponse = false;
    let currentLockedLanguage = "si"; // default Sinhala

    // Clean Categorized Instant Responses (Rich Emojis & Premium Dark Layout)
    const CATEGORY_RESPONSES = {
        "panels": {
            title: "🛡️ LUKZI Panels & Optimizers",
            content: `
                <div class="ai-card-item" style="border-color:#10b981; background:rgba(16,185,129,0.08); margin-bottom:10px;">
                    <div class="ai-card-title"><span style="color:#34d399;">🎁 FREE AIM SENSI & LAG FIX TOOL (v2.0 APK)</span> <span class="ai-pill emerald">FREE</span></div>
                    <div class="ai-card-features">නොමිලේ Download කරගන්න: <a href="https://github.com/luczeepakaya/optimizerfree2/raw/refs/heads/main/AIM%20SENSI%20&%20LAG%20FIX%20TOOL.apk" target="_blank" style="color:#34d399; text-decoration:underline; font-weight:bold;">Click here to Download APK</a></div>
                    <div style="font-size:10.5px; color:#fbbf24; margin-top:3px;">⚡ සටහන: අපගේ <b>Paid VIP Pro</b> එක Free එකට වඩා <b>10 ගුණයක් (10X)</b> බලගතුයි!</div>
                </div>
                <div class="ai-resp-header">
                    <span class="ai-resp-badge">🛡️ LUKZI OFFICIAL PRODUCTS</span>
                    <h5 class="ai-resp-title">⚡ නිල නිෂ්පාදන සහ මිල ගණන් (100% Safe)</h5>
                </div>
                <div class="ai-resp-list">
                    <div class="ai-card-item">
                        <div class="ai-card-title">📱 <strong>1. LUKZI Mobile Optimizer & Sensi</strong> <span class="ai-pill emerald">Android Safe</span></div>
                        <div class="ai-card-pricing">💵 1 Month: <b>රු. 1,200</b> • 1 Update: <b>රු. 2,000</b> • Lifetime VIP: <b>රු. 5,000</b></div>
                        <div class="ai-card-features">🚀 RAM Boost • 🎯 Touch Drag Assist • ⚡ 90 FPS • 🔒 100% Non-Root Safe</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">💻 <strong>2. Internal Panel v4 (1.0v)</strong> <span class="ai-pill crimson">PC Best Seller</span></div>
                        <div class="ai-card-pricing">💵 7 Days: <b>රු. 800</b> • 1 Month: <b>රු. 1,500</b> • Lifetime VIP: <b>රු. 4,000</b></div>
                        <div class="ai-card-features">🎯 Smart Aim Lock • 💥 100% Real Damage • 👁️ Full ESP • 🛡️ Safe Anti-Blacklist</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">🖱️ <strong>3. Mouse Bot Pro (1.7v)</strong> <span class="ai-pill amber">Zero Ban Risk</span></div>
                        <div class="ai-card-pricing">💵 7 Days: <b>රු. 700</b> • 1 Month: <b>රු. 1,000</b> • Lifetime VIP: <b>රු. 3,500</b></div>
                        <div class="ai-card-features">⚡ AI Micro Drag • 🎯 Auto Headshot • 🛡️ 100% Main ID Safe (Zero Memory Injection)</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">📱 <strong>4. Mobile ESP (Android)</strong> <span class="ai-pill purple">Enemy Location</span></div>
                        <div class="ai-card-pricing">💵 1 OBB Update Valid: <b>රු. 2,000 LKR</b></div>
                        <div class="ai-card-features">👁️ Radar & 3D Box ESP • 📹 Stream Mode (Live එකේ නොපෙනේ) • 🔒 Non-Root</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">⚡ <strong>5. LUKZI PC Gaming Optimizer</strong> <span class="ai-pill amber">Lifetime VIP</span></div>
                        <div class="ai-card-pricing">💵 Lifetime License: <b>රු. 2,000 LKR</b> (Free Updates Forever)</div>
                        <div class="ai-card-features">🚀 Ultra 120 FPS • ⚡ 0ms Mouse Input Delay • ⚙️ Windows Regedit Tweaks</div>
                    </div>
                </div>
                <div class="ai-cat-actions">
                    <a href="#products" class="ai-action-btn" onclick="document.getElementById('lukzi-ai-modal').style.display='none';">🛒 Buy Products Now</a>
                    <button type="button" class="ai-action-btn btn-sec" onclick="window.lukziAICatMenu()">↩ ප්‍රධාන Menu එකට</button>
                </div>
            `
        },
        "payments": {
            title: "💳 ගෙවීම් ක්‍රම සහ Slip දමන ආකාරය",
            content: `
                <div class="ai-resp-header">
                    <span class="ai-resp-badge">💳 VERIFIED BANK & WALLET</span>
                    <h5 class="ai-resp-title">🏦 නිල ගෙවීම් විස්තර සහ Slip Upload ක්‍රමය</h5>
                </div>
                <div class="ai-resp-list">
                    <div class="ai-card-item">
                        <div class="ai-card-title">🏦 <strong>1. People's Bank (මහජන බැංකුව)</strong></div>
                        <div class="ai-card-detail">📌 ගිණුම් අංකය: <b class="copyable-num">032200306550753</b> <button type="button" class="mini-copy-btn" onclick="copyToClipboard('032200306550753', 'Acc No')">Copy</button></div>
                        <div class="ai-card-detail">👤 ගිණුම් නම: <b>TD Paranahewa</b></div>
                        <div class="ai-card-detail">🏢 ශාඛාව: <b>Colombo (කොළඹ ශාඛාව)</b></div>
                        <div class="ai-card-features">📲 LankaQR: FriMi, BOC SmartPay, Q+, Flash, WePay ඕනෑම App එකකින් ගෙවිය හැක.</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">📱 <strong>2. EzCash Merchant Wallet</strong></div>
                        <div class="ai-card-detail">📌 Wallet අංකය: <b class="copyable-num">076 622 5968</b> <button type="button" class="mini-copy-btn" onclick="copyToClipboard('0766225968', 'EzCash No')">Copy</button></div>
                        <div class="ai-card-features">⚡ Dialog, Hutch, SLT ඕනෑම EzCash wallet එකකින් මුදල් යැවිය හැක.</div>
                    </div>
                    <div class="ai-card-alert">
                        ⚠️ <b>විශේෂ අනතුරු ඇඟවීමයි:</b> වෙනත් කිසිදු බැංකුවක් හෝ පුද්ගලික අංකයක් අප සතුව නොමැත. මුදල් ගෙවූ පසු රිසිට්පත වෙබ් අඩවියේ <b>BUY NOW</b> බොත්තම Click කර Upload කරන්න.
                    </div>
                </div>
                <div class="ai-cat-actions">
                    <a href="#payments" class="ai-action-btn" onclick="document.getElementById('lukzi-ai-modal').style.display='none';">🏦 View Bank Details</a>
                    <button type="button" class="ai-action-btn btn-sec" onclick="window.lukziAICatMenu()">↩ ප්‍රධාන Menu එකට</button>
                </div>
            `
        },
        "pc_lag": {
            title: "💻 PC Emulator Lag Fix & Drivers",
            content: `
                <div class="ai-resp-header">
                    <span class="ai-resp-badge">💻 EMULATOR LAG FIX & FPS BOOST</span>
                    <h5 class="ai-resp-title">🚀 PC Emulator Lag Fix & අත්‍යවශ්‍ය Drivers</h5>
                </div>
                <div class="ai-resp-list">
                    <div class="ai-card-item">
                        <div class="ai-card-title">📥 <strong>1. අත්‍යවශ්‍ය Gaming Runtimes Install කරන්න:</strong></div>
                        <div class="ai-card-features">
                            ⚙️ <em>Microsoft Visual C++ All-In-One Runtimes</em><br>
                            ⚙️ <em>Microsoft DirectX End-User Runtimes</em><br>
                            📌 (වෙබ් අඩවියේ 'Drivers & Videos' කොටසින් නොමිලේ බාගත හැක)
                        </div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">🎮 <strong>2. BlueStacks 5 & LDPlayer 9 Settings:</strong></div>
                        <div class="ai-card-features">
                            🖥️ Graphics Renderer: <b>DirectX</b> හෝ <b>OpenGL</b><br>
                            ⚡ Performance: <b>High (4 CPU Cores, 4GB RAM)</b><br>
                            📱 Device Profile: <b>ASUS ROG 2</b> (90/120 FPS Unlock)
                        </div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">🖱️ <strong>3. Mouse Stuck Fix & Zero Input Delay:</strong></div>
                        <div class="ai-card-features">
                            🎯 මවුස් එක හිරවීම සම්පූර්ණයෙන්ම නැති කර Smooth Headshot ලබාගැනීමට <b>LUKZI Mouse Bot Pro</b> භාවිත කරන්න.
                        </div>
                    </div>
                </div>
                <div class="ai-cat-actions">
                    <a href="#downloads" class="ai-action-btn" onclick="document.getElementById('lukzi-ai-modal').style.display='none';">📥 Download Drivers</a>
                    <button type="button" class="ai-action-btn btn-sec" onclick="window.lukziAICatMenu()">↩ ප්‍රධාන Menu එකට</button>
                </div>
            `
        },
        "support": {
            title: "👤 Customer Staff / WhatsApp Support",
            content: `
                <div class="ai-resp-header">
                    <span class="ai-resp-badge">👤 VERIFIED CUSTOMER SUPPORT</span>
                    <h5 class="ai-resp-title">📞 නිල Admin කාර්ය මණ්ඩලය & Support</h5>
                </div>
                <div class="ai-resp-list">
                    <div class="ai-card-item">
                        <div class="ai-card-title">👑 <strong>Main Admin ISUKA (නිල සහාය)</strong></div>
                        <div class="ai-card-detail">
                            💬 WhatsApp: <a href="https://wa.me/94705194865" target="_blank" class="admin-direct-link"><b>+94 70 519 4865</b></a>
                        </div>
                        <div class="ai-card-features">⚡ නව Orders, License Keys නිකුත් කිරීම සහ Payment Verification.</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">🛡️ <strong>2nd Admin DINU MALLI (තාක්ෂණික සහාය)</strong></div>
                        <div class="ai-card-detail">
                            💬 WhatsApp: <a href="https://wa.me/94725087806" target="_blank" class="admin-direct-link"><b>+94 72 508 7806</b></a>
                        </div>
                        <div class="ai-card-features">⚡ Panel Setup, AnyDesk / TeamViewer නොමිලේ PC Setup සහාය.</div>
                    </div>
                    <div class="ai-card-item">
                        <div class="ai-card-title">📢 <strong>Official WhatsApp Community Channel</strong></div>
                        <div class="ai-card-features">
                            💎 සියලුම OBB Updates, Free Sensi Configs සහ Customers Proofs නිකුත් කෙරේ.
                        </div>
                    </div>
                </div>
                <div class="ai-cat-actions">
                    <a href="https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36" target="_blank" class="ai-action-btn" style="background:#25d366 !important; color:#000 !important;">
                        <i class="fa fa-whatsapp"></i> Open WhatsApp Channel
                    </a>
                    <button type="button" class="ai-action-btn btn-sec" onclick="window.lukziAICatMenu()">↩ ප්‍රධාන Menu එකට</button>
                </div>
            `
        }
    };

    function getWelcomeMenuHTML() {
        return `
            <div class="ai-welcome-box">
                <div class="ai-greeting-title">👋 හායි සහෝ! LUKZI CHEATS AI වෙත සාදරයෙන් පිළිගනිමු!</div>
                <p class="ai-greeting-text">ශ්‍රී ලංකාවේ අංක 1 Digital Gaming Store එකෙන් ඔබට අවශ්‍ය සේවාව පහත <strong>Categories</strong> වලින් තෝරන්න:</p>
                
                <div class="ai-category-list">
                    <button type="button" class="ai-cat-btn" onclick="window.lukziAICatSelect('panels')">
                        <span class="cat-btn-icon">🛡️</span>
                        <div class="cat-btn-content">
                            <strong>LUKZI Panels & Optimizers</strong>
                            <small>මිල ගණන්, විශේෂාංග & Safe Memory Bypass</small>
                        </div>
                        <span class="cat-btn-arrow">➔</span>
                    </button>

                    <button type="button" class="ai-cat-btn" onclick="window.lukziAICatSelect('payments')">
                        <span class="cat-btn-icon">💳</span>
                        <div class="cat-btn-content">
                            <strong>ගෙවීම් ක්‍රම සහ Slip දමන ආකාරය</strong>
                            <small>People's Bank (032200306550753) & EzCash විස්තර</small>
                        </div>
                        <span class="cat-btn-arrow">➔</span>
                    </button>

                    <button type="button" class="ai-cat-btn" onclick="window.lukziAICatSelect('pc_lag')">
                        <span class="cat-btn-icon">💻</span>
                        <div class="cat-btn-content">
                            <strong>PC Emulator Lag Fix & Drivers</strong>
                            <small>BlueStacks 5, LDPlayer & DirectX Runtimes</small>
                        </div>
                        <span class="cat-btn-arrow">➔</span>
                    </button>

                    <button type="button" class="ai-cat-btn" onclick="window.lukziAICatSelect('support')">
                        <span class="cat-btn-icon">👤</span>
                        <div class="cat-btn-content">
                            <strong>Customer Staff / WhatsApp Support</strong>
                            <small>Admin Isuka & Admin Dinu Malli සමඟ සෘජුව කතා කරන්න</small>
                        </div>
                        <span class="cat-btn-arrow">➔</span>
                    </button>
                </div>
            </div>
        `;
    }

    // Precise Language Detection Helper
    function detectLanguage(userText) {
        // Tamil unicode
        if (/[\u0B80-\u0BFF]/.test(userText)) {
            currentLockedLanguage = "ta";
            return "ta";
        }
        // Sinhala unicode
        if (/[\u0D80-\u0DFF]/.test(userText)) {
            currentLockedLanguage = "si";
            return "si";
        }
        // Singlish words (Sinhala written in English letters)
        const singlishRegex = /\b(kohomada|malli|aiye|machan|saho|meka|mata|mokakda|puluwanda|wada|danne|ganne|kiyada|nadda|thiyenawada|ow|ne|hari|mokadda|awulak|eka|eke|ekak|game|panal|dapan|ganna|karanna|danna|monawada|ba|bane|kiyanna|gana|monada|kamathi|kiyapanko)\b/i;
        if (singlishRegex.test(userText)) {
            currentLockedLanguage = "si";
            return "si";
        }
        // Short universal acknowledgements: maintain previously locked language
        const shortAcks = /^(ok|okay|yes|yeah|sure|thanks|thank you|ela|hari|super|done|alright|cool|hi|hello|hey)$/i;
        if (shortAcks.test(userText.trim())) {
            return currentLockedLanguage;
        }

        // Pure English
        currentLockedLanguage = "en";
        return "en";
    }

    // Build Chat Widget HTML
    function initChatWidget() {
        if (document.getElementById("lukzi-ai-widget")) return;

        const widgetContainer = document.createElement("div");
        widgetContainer.id = "lukzi-ai-widget";
        widgetContainer.innerHTML = `
            <!-- Floating Launch Button -->
            <button type="button" id="lukzi-ai-btn" class="lukzi-ai-launcher" title="Chat with LUKZI AI 24/7">
                <span class="ai-pulse-ring"></span>
                <div class="ai-launcher-icon">
                    <i class="fa fa-android"></i>
                </div>
                <div class="ai-launcher-text">
                    <span class="ai-launcher-title">LUKZI AI</span>
                    <span class="ai-launcher-status">● 24/7 Online</span>
                </div>
            </button>

            <!-- Chat Modal Box -->
            <div id="lukzi-ai-modal" class="lukzi-ai-box" style="display:none;">
                <div class="ai-box-header">
                    <div class="ai-header-left">
                        <div class="ai-avatar-ring">
                            <i class="fa fa-shield"></i>
                            <span class="ai-status-dot"></span>
                        </div>
                        <div>
                            <h4 class="ai-box-title">⚡ LUKZI AI ASSISTANT</h4>
                            <span class="ai-box-subtitle">● 24/7 Smart Gaming Assistant</span>
                        </div>
                    </div>
                    <div class="ai-header-right">
                        <button type="button" id="lukzi-ai-menu-btn" class="ai-header-btn" title="Main Menu (ප්‍රධාන මෙනුව)">
                            <i class="fa fa-th-large"></i>
                        </button>
                        <button type="button" id="lukzi-ai-clear" class="ai-header-btn" title="Delete & Reset Chat (චැට් එක මකන්න)">
                            <i class="fa fa-trash"></i>
                        </button>
                        <button type="button" id="lukzi-ai-close" class="ai-header-btn" title="Close Chat">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- Messages Body -->
                <div id="lukzi-ai-messages" class="ai-messages-container">
                    <div class="ai-msg ai-msg-bot">
                        <div class="ai-bubble">
                            ${getWelcomeMenuHTML()}
                        </div>
                        <span class="ai-time">LUKZI AI • Guided Menu</span>
                    </div>
                </div>

                <!-- Chat Input Form (Mic removed, clean message input only) -->
                <form id="lukzi-ai-form" class="ai-input-form">
                    <input type="text" id="lukzi-ai-input" class="ai-input-field" placeholder="ඔබගේ ගැටලුව මෙහි ලියන්න (Sinhala, English, தமிழ்)..." autocomplete="off" maxlength="300" required>
                    <button type="submit" id="lukzi-ai-send" class="ai-send-btn" title="Send Message">
                        <i class="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(widgetContainer);

        let pendingCategoryTimer = null;

        // Global function for inline Category Selection
        window.lukziAICatSelect = function (catKey) {
            const cat = CATEGORY_RESPONSES[catKey];
            if (!cat) return;

            appendMessage("user", `[ ${cat.title} ]`);
            conversationHistory.push({ sender: "user", text: `මට ${cat.title} පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි.` });

            showTypingIndicator();
            if (pendingCategoryTimer) clearTimeout(pendingCategoryTimer);
            pendingCategoryTimer = setTimeout(() => {
                removeTypingIndicator();
                const container = document.getElementById("lukzi-ai-messages");
                const msgDiv = document.createElement("div");
                msgDiv.className = "ai-msg ai-msg-bot";
                msgDiv.innerHTML = `
                    <div class="ai-bubble">
                        ${cat.content}
                    </div>
                    <span class="ai-time">LUKZI AI</span>
                `;
                container.appendChild(msgDiv);
                scrollChatToBottom();
                pendingCategoryTimer = null;
            }, 200);
        };

        window.lukziAICatMenu = function () {
            appendMessage("user", "ප්‍රධාන මෙනුවට (Main Menu) ↩");
            showTypingIndicator();
            if (pendingCategoryTimer) clearTimeout(pendingCategoryTimer);
            pendingCategoryTimer = setTimeout(() => {
                removeTypingIndicator();
                const container = document.getElementById("lukzi-ai-messages");
                const msgDiv = document.createElement("div");
                msgDiv.className = "ai-msg ai-msg-bot";
                msgDiv.innerHTML = `
                    <div class="ai-bubble">
                        ${getWelcomeMenuHTML()}
                    </div>
                    <span class="ai-time">LUKZI AI • Main Menu</span>
                `;
                container.appendChild(msgDiv);
                scrollChatToBottom();
                pendingCategoryTimer = null;
            }, 180);
        };

        // Bind Events
        const launchBtn = document.getElementById("lukzi-ai-btn");
        const modal = document.getElementById("lukzi-ai-modal");
        const closeBtn = document.getElementById("lukzi-ai-close");
        const clearBtn = document.getElementById("lukzi-ai-clear");
        const menuBtn = document.getElementById("lukzi-ai-menu-btn");
        const form = document.getElementById("lukzi-ai-form");
        const input = document.getElementById("lukzi-ai-input");

        launchBtn.addEventListener("click", () => {
            const isHidden = modal.style.display === "none" || !modal.style.display;
            modal.style.display = isHidden ? "flex" : "none";
            if (isHidden) {
                input.focus();
                scrollChatToBottom();
            }
        });

        function resetChatToWelcome() {
            if (pendingCategoryTimer) {
                clearTimeout(pendingCategoryTimer);
                pendingCategoryTimer = null;
            }
            removeTypingIndicator();
            conversationHistory = [];
            currentLockedLanguage = "si";
            const container = document.getElementById("lukzi-ai-messages");
            if (container) {
                container.innerHTML = `
                    <div class="ai-msg ai-msg-bot">
                        <div class="ai-bubble">
                            ${getWelcomeMenuHTML()}
                        </div>
                        <span class="ai-time">LUKZI AI • Guided Menu</span>
                    </div>
                `;
            }
            if (input) input.value = "";
        }

        // Close chat resets to welcome screen for a fresh start next time
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            resetChatToWelcome();
        });

        menuBtn.addEventListener("click", () => {
            window.lukziAICatMenu();
        });

        // Delete / Trash button clears all chat history
        clearBtn.addEventListener("click", () => {
            resetChatToWelcome();
            if (typeof showToast === "function") {
                showToast("✓ Chat Cleared & Reset");
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (text && !isWaitingForResponse) {
                // If user greeted, show main menu directly
                const lower = text.toLowerCase();
                if (["hi", "hai", "hello", "හායි", "hlo", "hey", "menu", "start", "help", "vanakkam", "வணக்கம்"].includes(lower)) {
                    input.value = "";
                    appendMessage("user", text);
                    showTypingIndicator();
                    setTimeout(() => {
                        removeTypingIndicator();
                        const container = document.getElementById("lukzi-ai-messages");
                        const msgDiv = document.createElement("div");
                        msgDiv.className = "ai-msg ai-msg-bot";
                        msgDiv.innerHTML = `
                            <div class="ai-bubble">
                                ${getWelcomeMenuHTML()}
                            </div>
                            <span class="ai-time">LUKZI AI</span>
                        `;
                        container.appendChild(msgDiv);
                        scrollChatToBottom();
                    }, 200);
                    return;
                }

                sendMessage(text);
            }
        });
    }

    function scrollChatToBottom() {
        const container = document.getElementById("lukzi-ai-messages");
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }

    
    function formatAIMessage(text) {
        if (!text) return "";
        let clean = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Convert markdown headings ### or ##
        clean = clean.replace(/^###\s*(.*$)/gim, '<h6 style="color:#ffffff; font-weight:800; font-size:13px; margin:10px 0 4px 0; text-transform:uppercase; letter-spacing:0.5px;">$1</h6>');
        clean = clean.replace(/^##\s*(.*$)/gim, '<h5 style="color:#34d399; font-weight:800; font-size:14px; margin:12px 0 6px 0; letter-spacing:0.5px;">$1</h5>');

        // Convert bold **text**
        clean = clean.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#ffffff; font-weight:700; text-shadow: 0 0 8px rgba(255,255,255,0.15);">$1</strong>');

        // Convert italic *text*
        clean = clean.replace(/\*(.*?)\*/g, '<em style="color:#f59e0b; font-style:normal; font-weight:600;">$1</em>');

        // Convert bullets with gaming icon
        clean = clean.replace(/^[•\-\*]\s+(.*$)/gim, '<div style="margin-left:6px; padding:3px 0; display:flex; align-items:flex-start; gap:6px;"><span style="color:#10b981; font-weight:bold;">⚡</span> <span>$1</span></div>');

        // Newlines
        clean = clean.replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
        return clean;
    }

    function appendMessage(sender, text) {
        const container = document.getElementById("lukzi-ai-messages");
        if (!container) return;

        const msgDiv = document.createElement("div");
        msgDiv.className = `ai-msg ${sender === "user" ? "ai-msg-user" : "ai-msg-bot"}`;

        let formattedText = sender === "user" 
            ? text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")
            : formatAIMessage(text);

        msgDiv.innerHTML = `
            <div class="ai-bubble">${formattedText}</div>
            <span class="ai-time">${sender === "user" ? "You" : "LUKZI AI"}</span>
        `;

        container.appendChild(msgDiv);
        scrollChatToBottom();
    }

    function showTypingIndicator() {
        const container = document.getElementById("lukzi-ai-messages");
        if (!container) return;

        const typingDiv = document.createElement("div");
        typingDiv.id = "ai-typing-indicator";
        typingDiv.className = "ai-msg ai-msg-bot";
        typingDiv.innerHTML = `
            <div class="ai-bubble ai-typing-bubble">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <span class="ai-time">LUKZI AI is analyzing...</span>
        `;
        container.appendChild(typingDiv);
        scrollChatToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById("ai-typing-indicator");
        if (indicator) {
            indicator.remove();
        }
    }

    async function callGeminiAPI(userText, lang) {
        // Enforce strict language directive directly inside request
        let langDirective = "[CRITICAL INSTRUCTION: Reply ONLY in natural, polite SINHALA. Do NOT output English.]";
        if (lang === "en") {
            langDirective = "[CRITICAL INSTRUCTION: Reply ONLY in clear ENGLISH. Do NOT output Sinhala or Tamil.]";
        } else if (lang === "ta") {
            langDirective = "[CRITICAL INSTRUCTION: Reply ONLY in TAMIL. Do NOT output Sinhala or English.]";
        }

        // Clean contents payload for Gemini
        const contents = [];
        const recentHistory = conversationHistory.slice(-4);
        for (const item of recentHistory) {
            contents.push({
                role: item.sender === "user" ? "user" : "model",
                parts: [{ text: item.text }]
            });
        }
        contents.push({
            role: "user",
            parts: [{ text: `${langDirective}\n\nCustomer Question: ${userText}` }]
        });

        // Direct Google Gemini 3.5 Flash Lite API Call (Fast & Guaranteed)
        const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${DIRECT_API_KEY}`;
        
        // Timeout controller: 9 seconds max
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);

        try {
            const response = await fetch(directUrl, {
                method: "POST",
                signal: controller.signal,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    systemInstruction: {
                        parts: [{ text: SYSTEM_PROMPT }]
                    },
                    contents: contents,
                    generationConfig: {
                        temperature: 0.6,
                        maxOutputTokens: 500
                    }
                })
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errData = await response.text();
                throw new Error(`Gemini API Error: ${response.status} - ${errData}`);
            }

            const json = await response.json();
            return json?.candidates?.[0]?.content?.parts?.[0]?.text || "සමාවෙන්න සහෝ, පිළිතුරක් සැකසීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න.";
        } catch (err) {
            clearTimeout(timeoutId);
            throw err;
        }
    }

    async function sendMessage(text) {
        const input = document.getElementById("lukzi-ai-input");
        const sendBtn = document.getElementById("lukzi-ai-send");

        if (input) input.value = "";
        isWaitingForResponse = true;
        if (sendBtn) sendBtn.disabled = true;

        appendMessage("user", text);
        // Save clean user message in history
        conversationHistory.push({ sender: "user", text: text });
        showTypingIndicator();

        const lang = detectLanguage(text);

        try {
            let aiReply = await callGeminiAPI(text, lang);
            removeTypingIndicator();

            // Save clean AI message in history BEFORE attaching HTML buttons
            conversationHistory.push({ sender: "ai", text: aiReply });

            // Append clean navigation buttons
            const actionButtonsHTML = `
                <br><br>
                <div class="ai-cat-actions">
                    <a href="#products" class="ai-action-btn" onclick="document.getElementById('lukzi-ai-modal').style.display='none';">🛒 Buy Products Now</a>
                    <button type="button" class="ai-action-btn btn-sec" onclick="window.lukziAICatMenu()">↩ ප්‍රධාන Menu එකට</button>
                </div>
            `;

            const container = document.getElementById("lukzi-ai-messages");
            const msgDiv = document.createElement("div");
            msgDiv.className = "ai-msg ai-msg-bot";
            msgDiv.innerHTML = `
                <div class="ai-bubble">${formatAIMessage(aiReply)}${actionButtonsHTML}</div>
                <span class="ai-time">LUKZI AI</span>
            `;
            container.appendChild(msgDiv);
            scrollChatToBottom();

        } catch (err) {
            console.error("AI Chat Error:", err);
            removeTypingIndicator();
            const errMsg = lang === "en" 
                ? "Sorry bro, there was a temporary network timeout. Please check your connection and try again."
                : (lang === "ta"
                    ? "மன்னிக்கவும், தற்காலிக நெட்வொர்க் பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்."
                    : "සමාවෙන්න සහෝ, අන්තර්ජාලයේ සුළු ප්‍රමාදයක් ඇති විය. කරුණාකර තත්පර කිහිපයකින් නැවත උත්සාහ කරන්න.");
            appendMessage("ai", `${errMsg}<br><button type='button' class='ai-action-btn btn-sec mt-2' onclick='window.lukziAICatMenu()'>↩ ප්‍රධාන Menu එකට</button>`);
        } finally {
            isWaitingForResponse = false;
            if (sendBtn) sendBtn.disabled = false;
            if (input) input.focus();
        }
    }

    // Auto initialize on DOM Ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initChatWidget);
    } else {
        initChatWidget();
    }
})();
