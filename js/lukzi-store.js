/**
 * LUKZI CHEATS & STOREFRONT ENGINE
 * Sri Lanka's #1 Free Fire Products & Tools Hub
 * Supports Bank & EzCash Checkout, Telegram Bot Notifications, Abuse Trap & Key Generation
 */

// Configuration Constants
const LUKZI_CONFIG = {
    botToken: "8852411673:AAGdd9z7WcdqjcJe6z5B2vM0QdfPBsL41tM",
    chatId: "-1003914610277",
    netlifyEndpoint: "/.netlify/functions/notify-order",
    adminIsukaWhatsApp: "94705194865",
    adminDinuWhatsApp: "94725087806",
    communityChannelUrl: "https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36"
};

// 4 Official Products Catalog with Updated Pricing
const LUKZI_PRODUCTS = {
    "mobile-optimizer": {
        id: "mobile-optimizer",
        name: "LUKZI MOBILE OPTIMIZER & SENSI",
        platform: "Android Mobile (No Root Required)",
        badge: "🇱🇰 ලංකාවේ NO.1 (MOST POPULAR)",
        badgeClass: "badge-gold",
        image: "assets/images/mobile-optimizer.jpg",
        tagline: "ALL-IN-ONE DEVICE BOOSTER & AIM SENSI CALIBRATOR",
        features: [
            "RAM Boost & Device Cleaner",
            "Sensi Calculator & Touch Drag Assist",
            "60 FPS to 90 FPS Ultra Smooth Game Profiles",
            "Floating Crosshair",
            "100% Non-Root Safe & Main Account Safe"
        ],
        plans: [
            { duration: "1 Month License", price: 1200, popular: false },
            { duration: "1 OBB Update Valid", price: 2000, popular: false },
            { duration: "LIFETIME VIP PRO (All Sensi Functions)", price: 5000, popular: true }
        ]
    },
    "internal-panel-v4": {
        id: "internal-panel-v4",
        name: "INTERNAL PANEL V4 (1.0v)",
        platform: "PC Emulator (BlueStacks 4/5, LDPlayer 9, MEmu, NoxPlayer - Win 10/11)",
        badge: "🔥 PC BESTSELLER",
        badgeClass: "badge-red",
        image: "assets/images/internal-panel-v4.jpg",
        tagline: "ALL IN ONE FREE FIRE & MAX INTERNAL CHEAT",
        features: [
            "Smart Target Lock & 360° Tracking",
            "Auto Headshot & Prediction Control",
            "100% Real Damage (Zero Fake Damage)",
            "Full ESP: Line, Box, Distance & Player Name",
            "Safe Memory Bypass & Anti-Blacklist Protection"
        ],
        plans: [
            { duration: "7 Days Key", price: 800, popular: false },
            { duration: "1 Month License", price: 1500, popular: false },
            { duration: "LIFETIME VIP ACCESS", price: 4000, popular: true }
        ]
    },
    "mouse-bot-pro": {
        id: "mouse-bot-pro",
        name: "MOUSE BOT PRO (1.7v)",
        platform: "PC Emulator (BlueStacks, LDPlayer 9, MEmu, Nox - Windows 10/11)",
        badge: "⚡ 100% MAIN ID SAFE",
        badgeClass: "badge-cyan",
        image: "assets/images/mouse-bot-pro.jpg",
        tagline: "AI SMART AIM ASSISTANT FOR PC EMULATORS",
        features: [
            "Zero Memory Read/Write (Zero Game Injection Detection)",
            "Human-like AI Mouse Movement & Auto Headshot",
            "100% Main Account Safe (Zero Ban Risk)",
            "Low-End & High-End PC සඳහා Fully Optimized"
        ],
        plans: [
            { duration: "7 Days Key", price: 700, popular: false },
            { duration: "1 Month (30 Days)", price: 1000, popular: false },
            { duration: "LIFETIME VIP PRO ACCESS", price: 3500, popular: true }
        ]
    },
    "mobile-esp": {
        id: "mobile-esp",
        name: "MOBILE ESP (ANDROID)",
        platform: "Android 9 to 15 (Non-Root & Root Safe) • iOS Coming Soon ⏳",
        badge: "📱 ANDROID ONLY (iOS COMING SOON ⏳)",
        badgeClass: "badge-purple",
        image: "assets/images/mobile-esp.jpg",
        tagline: "REAL PLAYERS USE ESP — SEE THEM FIRST, STAY AHEAD",
        features: [
            "Enemy Location ESP (Radar & 3D Box, Enemy HP, Distance)",
            "Stream Mode Support: TikTok / YouTube Live Stream කරන විට Viewers ලාට ESP එක නොපෙනේ",
            "OBB Patch ක්‍රමවේදය (Root අවශ්‍ය නැත)"
        ],
        plans: [
            { duration: "1 OBB Update Valid (2 Months)", price: 2000, popular: true }
        ]
    },
    "pc-optimizer": {
        id: "pc-optimizer",
        name: "LUKZI PC GAMING OPTIMIZER & REGEDIT",
        platform: "PC Emulator (BlueStacks 4/5, LDPlayer 9, MSI, MEmu - Win 10/11 64-bit)",
        badge: "⚡ ULTRA 90/120+ FPS (LIFETIME)",
        badgeClass: "badge-gold",
        image: "assets/images/pc-optimizer.jpg",
        tagline: "ALL-IN-ONE WINDOWS & EMULATOR GAMING OPTIMIZATION BUNDLE",
        features: [
            "BlueStacks 4/5, LDPlayer 9 සහ MSI වල Frame Drops නැති කර Ultra Smooth 90 to 120 FPS",
            "Mouse Cursor Input Delay එක 0ms දක්වා අඩු කිරීම (Zero Input Lag)",
            "One-Click Windows Gaming Registry Tweaks (CPU Unparking, GPU Priority, Ping Fix)",
            "Pro Headshot Sensitivity Pack & Mouse DPI Calibration (Easy Drag Headshots)",
            "Deep Cache Cleaner & Background Standby RAM Memory Process Eliminator",
            "100% Main ID Safe (Zero Game Code/Memory Injection - Zero Ban Risk)",
            "පහසු සිංහල Video Guide එක සහ Support Admin TeamViewer/AnyDesk නොමිලේ Setup"
        ],
        plans: [
            { duration: "LIFETIME VALID (One-Time Payment • Free Updates Forever)", price: 2000, popular: true }
        ]
    }
};

// Current active checkout state
let currentCheckout = {
    productId: "mobile-optimizer",
    planIndex: 0,
    paymentMethod: "peoples-bank",
    slipDataUri: null,
    slipFileName: ""
};

// Client IP cache
let cachedClientIp = "Fetching...";
(async function fetchClientIp() {
    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const json = await res.json();
        cachedClientIp = json.ip || "127.0.0.1";
    } catch (e) {
        cachedClientIp = "Sri Lanka IP";
    }
})();

// Abuse Detection Regex
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

// Generate License Key: LKZ-XXX-XXXXX
function generateLicenseKey() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let part1 = "";
    for (let i = 0; i < 3; i++) part1 += chars.charAt(Math.floor(Math.random() * chars.length));
    let part2 = "";
    for (let i = 0; i < 5; i++) part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    return `LKZ-${part1}-${part2}`;
}

// Toast notification helper
function showToast(message) {
    let toast = document.getElementById("lukzi-toast-box");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "lukzi-toast-box";
        toast.className = "lukzi-toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// 1-Click Clipboard Copy
function copyToClipboard(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`✓ Copied ${label ? label + ': ' : ''}<b>${text}</b>`);
        }).catch(() => fallbackCopy(text, label));
    } else {
        fallbackCopy(text, label);
    }
}

function fallbackCopy(text, label) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand("copy");
        showToast(`✓ Copied ${label ? label + ': ' : ''}<b>${text}</b>`);
    } catch (e) {
        prompt("Copy text:", text);
    }
    document.body.removeChild(ta);
}

// Open Checkout Modal
function openCheckoutModal(productId, planIndex = 0) {
    const product = LUKZI_PRODUCTS[productId] || LUKZI_PRODUCTS["mobile-optimizer"];
    currentCheckout.productId = product.id;
    currentCheckout.planIndex = planIndex;
    currentCheckout.slipDataUri = null;
    currentCheckout.slipFileName = "";

    document.getElementById("checkout-product-title").innerText = product.name;
    document.getElementById("checkout-product-platform").innerText = product.platform;

    // Render Pricing dropdown options
    const planSelect = document.getElementById("checkout-plan-select");
    planSelect.innerHTML = "";
    product.plans.forEach((p, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.innerText = `${p.duration} — රු. ${p.price.toLocaleString()} LKR ${p.popular ? '★ (Most Popular)' : ''}`;
        if (idx === planIndex) opt.selected = true;
        planSelect.appendChild(opt);
    });

    updatePlanPrice();

    // Reset payment method to bank
    selectPaymentMethod("peoples-bank");

    // Clear form inputs
    const form = document.getElementById("lukzi-checkout-form");
    if (form) form.reset();
    const previewWrap = document.getElementById("upload-preview-wrap");
    if (previewWrap) previewWrap.classList.remove("show");

    // Show modal
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.add("show");
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.remove("show");
}

// Update calculated price display in modal
function updatePlanPrice() {
    const product = LUKZI_PRODUCTS[currentCheckout.productId];
    const planSelect = document.getElementById("checkout-plan-select");
    const selectedIdx = parseInt(planSelect.value, 10) || 0;
    currentCheckout.planIndex = selectedIdx;

    const plan = product.plans[selectedIdx] || product.plans[0];
    const amountBox = document.getElementById("checkout-amount-display");
    if (amountBox) {
        amountBox.innerText = `රු. ${plan.price.toLocaleString()} LKR`;
    }
}

// Toggle Payment Method in Checkout Modal
function selectPaymentMethod(method) {
    currentCheckout.paymentMethod = method;

    const btnBank = document.getElementById("pm-tab-bank");
    const btnEzcash = document.getElementById("pm-tab-ezcash");
    const viewBank = document.getElementById("pm-view-bank");
    const viewEzcash = document.getElementById("pm-view-ezcash");

    if (method === "peoples-bank") {
        if (btnBank) btnBank.classList.add("active");
        if (btnEzcash) btnEzcash.classList.remove("active");
        if (viewBank) viewBank.style.display = "block";
        if (viewEzcash) viewEzcash.style.display = "none";
    } else {
        if (btnBank) btnBank.classList.remove("active");
        if (btnEzcash) btnEzcash.classList.add("active");
        if (viewBank) viewBank.style.display = "none";
        if (viewEzcash) viewEzcash.style.display = "block";
    }
}

// File Upload Handler for Payment Slip
function handleSlipUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    currentCheckout.slipFileName = file.name;
    const isImage = file.type.startsWith("image/");
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    const reader = new FileReader();
    reader.onload = function(e) {
        currentCheckout.slipDataUri = e.target.result;
        const previewWrap = document.getElementById("upload-preview-wrap");
        const previewImg = document.getElementById("upload-preview-img");
        const previewNote = document.getElementById("upload-preview-note");

        if (previewWrap) {
            previewWrap.classList.add("show");
            if (isImage && previewImg) {
                previewImg.style.display = "block";
                previewImg.src = e.target.result;
            } else if (previewImg) {
                previewImg.style.display = "none";
            }
            if (previewNote) {
                previewNote.innerText = `✓ Selected: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            }
        }
    };
    reader.readAsDataURL(file);
}

// Handle Order Form Submission
async function handleOrderSubmit(event) {
    event.preventDefault();

    const customerName = (document.getElementById("cust-name")?.value || "").trim();
    const customerWhatsApp = (document.getElementById("cust-whatsapp")?.value || "").trim();
    const referenceNo = (document.getElementById("cust-ref")?.value || "").trim();

    if (!customerName || !customerWhatsApp) {
        alert("කරුණාකර ඔබගේ නම සහ WhatsApp අංකය ඇතුළත් කරන්න.");
        return;
    }

    const submitBtn = document.getElementById("btn-submit-order");
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Processing Order...`;
    }

    // 🚨 ABUSE TRAP CHECK
    if (containsAbusiveContent(customerName) || containsAbusiveContent(referenceNo)) {
        triggerCyberAbuseTrap(customerName, customerWhatsApp, referenceNo);
        return;
    }

    const product = LUKZI_PRODUCTS[currentCheckout.productId];
    const plan = product.plans[currentCheckout.planIndex];
    const orderId = `LKZ-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const licenseKey = generateLicenseKey();

    const orderData = {
        orderId: orderId,
        licenseKey: licenseKey,
        customerName: customerName,
        customerWhatsApp: customerWhatsApp,
        productId: product.id,
        productName: product.name,
        planDuration: plan.duration,
        amount: plan.price,
        paymentMethod: currentCheckout.paymentMethod === "peoples-bank" ? "People's Bank (032200306550753 - TD Paranahewa / Colombo)" : "EzCash (076 622 5968)",
        referenceNo: referenceNo || "Direct Receipt Upload",
        slipImage: currentCheckout.slipDataUri,
        slipName: currentCheckout.slipFileName,
        slipType: currentCheckout.slipFileName.toLowerCase().endsWith(".pdf") ? "pdf" : "image",
        clientIp: cachedClientIp,
        createdAt: new Date().toISOString()
    };

    // Save order to LocalStorage for order tracking & recovery
    saveOrderToStorage(orderData);

    // Send notification to Telegram
    try {
        await dispatchTelegramNotification(orderData);
    } catch (err) {
        console.warn("Telegram dispatch fallback notice:", err);
    }

    // Close checkout modal & show Order Success Modal
    closeCheckoutModal();
    showOrderSuccessModal(orderData);

    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>✓ ගෙවීම් තහවුරු කර ඇණවුම යවන්න</span>`;
    }
}

// Dispatch order details to Telegram
async function dispatchTelegramNotification(order) {
    const isPdf = order.slipType === "pdf";
    const cleanPhone = order.customerWhatsApp.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("0") 
        ? "94" + cleanPhone.substring(1) 
        : (cleanPhone.startsWith("94") ? cleanPhone : "94" + cleanPhone);

    const caption = 
        `🔥 *NEW LUKZI STORE ORDER RECEIVED!*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `🆔 *Order ID:* \`${order.orderId}\`\n` +
        `🔑 *Assigned Key:* \`${order.licenseKey}\`\n` +
        `👤 *Customer Name:* ${order.customerName}\n` +
        `📱 *WhatsApp:* \`${order.customerWhatsApp}\`\n` +
        `📦 *Product:* ${order.productName}\n` +
        `⏳ *Plan:* ${order.planDuration}\n` +
        `💰 *Amount:* Rs. ${Number(order.amount).toLocaleString()} LKR\n` +
        `🏦 *Payment Method:* ${order.paymentMethod}\n` +
        `📑 *Ref / Note:* ${order.referenceNo}\n` +
        `🌐 *Customer IP:* \`${order.clientIp}\`\n` +
        `⏰ *Time (SL):* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `⚡ *Auto Status:* Key generated. Verified in 2-5 mins via WhatsApp!`;

    const replyMarkup = {
        inline_keyboard: [
            [
                { text: "💬 Chat Directly with Buyer (WhatsApp)", url: `https://wa.me/${formattedPhone}` },
                { text: "👑 Chat with Staff Isuka", url: `https://wa.me/${LUKZI_CONFIG.adminIsukaWhatsApp}` }
            ]
        ]
    };

    // 1. Try Netlify Serverless Function if available
    try {
        const netlifyRes = await fetch(LUKZI_CONFIG.netlifyEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        });
        if (netlifyRes.ok) return;
    } catch (e) {
        // Fallback to direct Telegram API
    }

    // 2. Direct Telegram API fallback
    if (order.slipImage && order.slipImage.includes(',')) {
        try {
            const parts = order.slipImage.split(',');
            const mimeMatch = parts[0].match(/:(.*?);/);
            const mime = mimeMatch ? mimeMatch[1] : (isPdf ? 'application/pdf' : 'image/jpeg');
            const byteChars = atob(parts[1]);
            const byteNumbers = new Array(byteChars.length);
            for (let i = 0; i < byteChars.length; i++) {
                byteNumbers[i] = byteChars.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mime });

            const formData = new FormData();
            formData.append("chat_id", LUKZI_CONFIG.chatId);
            formData.append("caption", caption);
            formData.append("parse_mode", "Markdown");
            formData.append("reply_markup", JSON.stringify(replyMarkup));

            if (isPdf) {
                formData.append("document", blob, order.slipName || `slip_${order.orderId}.pdf`);
                await fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendDocument`, {
                    method: "POST",
                    body: formData
                });
            } else {
                formData.append("photo", blob, `slip_${order.orderId}.jpg`);
                await fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendPhoto`, {
                    method: "POST",
                    body: formData
                });
            }
            return;
        } catch (err) {
            console.error("Direct image telegram upload error:", err);
        }
    }

    // 3. Text-only telegram fallback
    await fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: LUKZI_CONFIG.chatId,
            text: caption,
            parse_mode: "Markdown",
            reply_markup: replyMarkup
        })
    });
}

// 🚨 CYBER ABUSE & TRAP TRIGGER
async function triggerCyberAbuseTrap(name, phone, ref) {
    closeCheckoutModal();
    const incidentId = `CCID-LK-${Math.floor(100000 + Math.random() * 900000)}`;

    const caption = 
        `🚨 *CYBER CRIME & ABUSE TRAP TRIGGERED!*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `⚠️ *Incident Case:* \`${incidentId}\`\n` +
        `🌐 *Offender IP:* \`${cachedClientIp}\`\n` +
        `📱 *Entered Phone:* \`${phone || 'N/A'}\`\n` +
        `👤 *Offensive Input (Name):* ${name || 'N/A'}\n` +
        `📑 *Offensive Input (Ref):* ${ref || 'N/A'}\n` +
        `🖥️ *Device:* ${navigator.userAgent}\n` +
        `⏰ *Time (SL):* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `🛡️ *Status:* Trap Warning displayed. Nearest Police Station map (police.lk) opened!`;

    const replyMarkup = {
        inline_keyboard: [
            [
                { text: "🔍 Lookup IP Address", url: `https://whatismyipaddress.com/ip/${cachedClientIp}` },
                { text: "🚓 Police Stations Map", url: "https://police.lk/police-stations-map/" }
            ]
        ]
    };

    // Alert Telegram
    try {
        fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: LUKZI_CONFIG.chatId,
                text: caption,
                parse_mode: "Markdown",
                reply_markup: replyMarkup
            })
        });
    } catch (e) {}

    // Show abuse warning modal
    const abuseModal = document.getElementById("abuse-trap-modal");
    if (abuseModal) {
        document.getElementById("abuse-incident-id").innerText = incidentId;
        document.getElementById("abuse-ip-address").innerText = cachedClientIp;
        abuseModal.classList.add("show");
    }

    // Auto redirect to police.lk after 4 seconds
    setTimeout(() => {
        window.location.href = "https://police.lk/police-stations-map/";
    }, 4000);
}

// LocalStorage helpers
function saveOrderToStorage(order) {
    try {
        let orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
        orders.unshift(order);
        if (orders.length > 20) orders = orders.slice(0, 20);
        localStorage.setItem("lukzi_orders", JSON.stringify(orders));
        localStorage.setItem("lukzi_latest_order", JSON.stringify(order));
    } catch (e) {}
}

function getStoredOrders() {
    try {
        return JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
    } catch (e) {
        return [];
    }
}

// Show Order Success Modal
function showOrderSuccessModal(order) {
    const modal = document.getElementById("order-success-modal");
    if (!modal) return;

    document.getElementById("success-order-id").innerText = order.orderId;
    document.getElementById("success-license-key").innerText = order.licenseKey;
    document.getElementById("success-product-name").innerText = `${order.productName} (${order.planDuration})`;
    document.getElementById("success-amount").innerText = `රු. ${Number(order.amount).toLocaleString()} LKR`;

    // WhatsApp Direct Confirmation Links
    const waText = encodeURIComponent(
        `Hello LUKZI Staff! මම ඇණවුමක් කලා.\n\nOrder ID: ${order.orderId}\nLicense Key: ${order.licenseKey}\nProduct: ${order.productName}\nPlan: ${order.planDuration}\nAmount: රු. ${order.amount} LKR\n\nPayment Slip එක වෙබ්සයිට් එකට upload කර ඇත. කරුණාකර verify කර files එවන්න.`
    );

    const waBtnIsuka = document.getElementById("btn-wa-confirm-isuka");
    if (waBtnIsuka) waBtnIsuka.href = `https://wa.me/${LUKZI_CONFIG.adminIsukaWhatsApp}?text=${waText}`;

    const waBtnDinu = document.getElementById("btn-wa-confirm-dinu");
    if (waBtnDinu) waBtnDinu.href = `https://wa.me/${LUKZI_CONFIG.adminDinuWhatsApp}?text=${waText}`;

    modal.classList.add("show");
}

function closeOrderSuccessModal() {
    const modal = document.getElementById("order-success-modal");
    if (modal) modal.classList.remove("show");
}

// Order Tracking System
function trackOrder() {
    const query = (document.getElementById("track-order-input")?.value || "").trim().toLowerCase();
    const resultBox = document.getElementById("track-result-box");
    if (!query) {
        alert("කරුණාකර ඔබගේ Order ID එක හෝ WhatsApp අංකය ඇතුළත් කරන්න.");
        return;
    }

    const orders = getStoredOrders();
    const cleanQuery = query.replace(/\D/g, "");

    const matched = orders.find(o => 
        (o.orderId && o.orderId.toLowerCase().includes(query)) ||
        (o.licenseKey && o.licenseKey.toLowerCase().includes(query)) ||
        (cleanQuery && o.customerWhatsApp && o.customerWhatsApp.replace(/\D/g, "").includes(cleanQuery))
    );

    if (resultBox) {
        resultBox.classList.add("active");
        if (matched) {
            resultBox.innerHTML = `
                <div style="border-left: 4px solid #22c55e; padding-left: 15px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
                        <span style="background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.4); padding: 3px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">
                            ✓ ORDER ACTIVE & VERIFIED
                        </span>
                        <span style="color:#94a3b8; font-size:12px;">Order ID: <b style="color:#fff;">${matched.orderId}</b></span>
                    </div>
                    <h5 style="color:#fff; font-size:17px; font-weight:bold; margin-bottom:6px;">${matched.productName}</h5>
                    <p style="color:#cbd5e1; font-size:13px; margin-bottom:12px;">Plan: <b>${matched.planDuration}</b> • Amount: <b>රු. ${Number(matched.amount).toLocaleString()} LKR</b></p>
                    
                    <div style="background: #090b10; border: 1px dashed #22c55e; border-radius: 8px; padding: 12px; margin-bottom: 15px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                        <div>
                            <div style="font-size:10px; color:#86efac; text-transform:uppercase; font-weight:bold;">Your License Key</div>
                            <div style="font-size:18px; color:#4ade80; font-weight:bold; font-family:monospace;">${matched.licenseKey}</div>
                        </div>
                        <button onclick="copyToClipboard('${matched.licenseKey}', 'License Key')" class="btn-copy">Copy Key</button>
                    </div>

                    <div style="display:flex; gap:10px; flex-wrap:wrap;">
                        <a href="https://wa.me/${LUKZI_CONFIG.adminIsukaWhatsApp}" target="_blank" class="admin-whatsapp-btn" style="padding:8px 16px; font-size:12.5px; width:auto;">
                            <i class="fa fa-whatsapp"></i> Chat with Admin Isuka
                        </a>
                        <a href="https://wa.me/${LUKZI_CONFIG.adminDinuWhatsApp}" target="_blank" class="admin-whatsapp-btn" style="padding:8px 16px; font-size:12.5px; width:auto; background: linear-gradient(135deg, #0284c7, #0369a1);">
                            <i class="fa fa-whatsapp"></i> Chat with Admin Dinu
                        </a>
                    </div>
                </div>
            `;
        } else {
            resultBox.innerHTML = `
                <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                    <h6 style="color:#f59e0b; font-weight:bold; margin-bottom:6px;">⚠️ කිසිදු ඇණවුමක් හමු නොවීය</h6>
                    <p style="color:#94a3b8; font-size:13px; margin-bottom:10px;">
                        ඔබ ඇතුළත් කල Order ID (${query}) හෝ WhatsApp අංකය පද්ධතියේ හමු නොවීය. ඔබ මෑතකදී ගෙවීමක් කර ඇත්නම්, කරුණාකර Admin කාර්ය මණ්ඩලය අමතන්න.
                    </p>
                    <a href="https://wa.me/${LUKZI_CONFIG.adminIsukaWhatsApp}" target="_blank" class="admin-whatsapp-btn" style="padding:8px 16px; font-size:12px; width:auto; display:inline-flex;">
                        <i class="fa fa-whatsapp"></i> Contact Admin Isuka on WhatsApp
                    </a>
                </div>
            `;
        }
    }
}

// QR Code Preview Modal toggle
function openLankaQrModal() {
    const modal = document.getElementById("lankaqr-modal");
    if (modal) modal.classList.add("show");
}

function closeLankaQrModal() {
    const modal = document.getElementById("lankaqr-modal");
    if (modal) modal.classList.remove("show");
}

// ==========================================================
// VIDEO LIGHTBOX MODAL CONTROLLER (EXACT MATCH WITH FREE FIRE WEB)
// ==========================================================
function openVideoModal(youtubeId, title) {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");
    const titleEl = document.getElementById("video-modal-title");

    if (!modal || !iframe) return;

    if (titleEl) titleEl.innerText = title || "OFFICIAL VIDEO SHOWCASE";
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0&disablekb=0&playsinline=1`;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeVideoModal() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");

    if (iframe) iframe.src = "";
    if (modal) {
        modal.classList.remove("show");
    }
    document.body.style.overflow = "";
}

// ==========================================================
// IMAGE LIGHTBOX PREVIEW MODAL (ZOOM INSIDE WEBSITE)
// ==========================================================
function previewImage(src, title) {
    const modal = document.getElementById("image-preview-modal");
    const img = document.getElementById("image-preview-img");
    const caption = document.getElementById("image-preview-caption");

    if (!modal || !img) return;

    img.src = src;
    if (caption) {
        caption.innerText = title || "CUSTOMER WHATSAPP FEEDBACK & PROOF";
    }

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeImagePreview() {
    const modal = document.getElementById("image-preview-modal");
    const img = document.getElementById("image-preview-img");

    if (modal) modal.classList.remove("show");
    if (img) img.src = "";
    document.body.style.overflow = "";
}

// ==========================================================
// STEALTH VIDEO PLAYER CONTROLLER (AUTO-PLAY ON SCROLL & MUTE TOGGLE)
// ==========================================================
const playerStates = {};

function initStealthVideoPlayers() {
    const players = document.querySelectorAll('.lukzi-stealth-player');
    if (!players.length) return;

    players.forEach((player, index) => {
        const id = player.id || `stealth-player-${index}`;
        playerStates[id] = {
            isPlaying: false,
            isMuted: true
        };
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const player = entry.target;
                const iframe = player.querySelector('iframe');
                if (!iframe || !iframe.contentWindow) return;

                const state = playerStates[player.id] || { isPlaying: false, isMuted: true };

                if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                    // Video scrolled into view: Autoplay immediately
                    try {
                        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        state.isPlaying = true;
                        player.classList.add('is-playing');
                        const statusPill = player.querySelector('.stream-status-pill');
                        if (statusPill) {
                            statusPill.innerHTML = '<span style="color:#22c55e;">● STREAM PLAYING</span>';
                        }
                        const playIcon = player.querySelector('.ctrl-play-icon');
                        if (playIcon) playIcon.className = 'fa fa-pause ctrl-play-icon';
                    } catch (e) {}
                } else if (!entry.isIntersecting) {
                    // Video scrolled out of view: Pause to save resources
                    try {
                        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                        state.isPlaying = false;
                        player.classList.remove('is-playing');
                        const statusPill = player.querySelector('.stream-status-pill');
                        if (statusPill) {
                            statusPill.innerHTML = '<span style="color:#94a3b8;">○ STREAM PAUSED</span>';
                        }
                        const playIcon = player.querySelector('.ctrl-play-icon');
                        if (playIcon) playIcon.className = 'fa fa-play ctrl-play-icon';
                    } catch (e) {}
                }
            });
        }, {
            threshold: [0.15, 0.35, 0.6]
        });

        players.forEach(p => observer.observe(p));
    }
}

// Toggle Play / Pause on custom player
function togglePlayerPlay(playerId) {
    const player = document.getElementById(playerId);
    if (!player) return;
    const iframe = player.querySelector('iframe');
    if (!iframe || !iframe.contentWindow) return;

    const state = playerStates[playerId] || { isPlaying: false, isMuted: true };
    const playIcon = player.querySelector('.ctrl-play-icon');
    const statusPill = player.querySelector('.stream-status-pill');

    if (state.isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        state.isPlaying = false;
        player.classList.remove('is-playing');
        if (playIcon) playIcon.className = 'fa fa-play ctrl-play-icon';
        if (statusPill) statusPill.innerHTML = '<span style="color:#94a3b8;">○ STREAM PAUSED</span>';
    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        state.isPlaying = true;
        player.classList.add('is-playing');
        if (playIcon) playIcon.className = 'fa fa-pause ctrl-play-icon';
        if (statusPill) statusPill.innerHTML = '<span style="color:#22c55e;">● STREAM PLAYING</span>';
    }
}

// Toggle Sound (Unmute / Mute) on custom player
function togglePlayerSound(playerId) {
    const player = document.getElementById(playerId);
    if (!player) return;
    const iframe = player.querySelector('iframe');
    if (!iframe || !iframe.contentWindow) return;

    const state = playerStates[playerId] || { isPlaying: false, isMuted: true };
    const soundIcon = player.querySelector('.ctrl-sound-icon');
    const soundText = player.querySelector('.ctrl-sound-text');
    const soundAlert = player.querySelector('.stealth-sound-alert');

    if (state.isMuted) {
        // Unmute audio
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
        iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[100]}', '*');
        state.isMuted = false;
        if (soundIcon) soundIcon.className = 'fa fa-volume-up ctrl-sound-icon text-success';
        if (soundText) soundText.innerText = 'Mute';
        if (soundAlert) soundAlert.classList.add('is-unmuted');
        showToast('🔊 Audio Unmuted');
    } else {
        // Mute audio
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
        state.isMuted = true;
        if (soundIcon) soundIcon.className = 'fa fa-volume-off ctrl-sound-icon';
        if (soundText) soundText.innerText = 'Unmute';
        if (soundAlert) soundAlert.classList.remove('is-unmuted');
        showToast('🔇 Audio Muted');
    }
}

// Toggle Fullscreen on custom player
function togglePlayerFullscreen(playerId) {
    const player = document.getElementById(playerId);
    if (!player) return;

    if (!document.fullscreenElement) {
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.webkitRequestFullscreen) {
            player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) {
            player.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Initialize on document ready
document.addEventListener("DOMContentLoaded", function() {
    // Initialize stealth video autoplay observers
    initStealthVideoPlayers();

    // Check if user came with order hash e.g. #order-mobile-optimizer
    const hash = window.location.hash;
    if (hash && hash.startsWith("#order-")) {
        const prod = hash.replace("#order-", "");
        if (LUKZI_PRODUCTS[prod]) {
            setTimeout(() => openCheckoutModal(prod, 0), 600);
        }
    }

    // Escape key closes open modals
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeImagePreview();
            closeVideoModal();
            closeCheckoutModal();
            closeLankaQrModal();
        }
    });
});
