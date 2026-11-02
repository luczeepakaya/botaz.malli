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
window.LUKZI_PRODUCTS = LUKZI_PRODUCTS;

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

// Detailed Device & Browser Identifier
function getDetailedDeviceInfo() {
    const ua = navigator.userAgent || "";
    let os = "Device";
    if (/Windows NT 10.0/i.test(ua)) os = "Windows 10/11 64-bit PC";
    else if (/Windows NT 6.1/i.test(ua)) os = "Windows 7 PC";
    else if (/Android/i.test(ua)) {
        const match = ua.match(/Android\s([0-9\.]+)/i);
        os = match ? `Android ${match[1]} Phone` : "Android Mobile";
    } else if (/iPhone/i.test(ua)) os = "Apple iPhone (iOS)";
    else if (/iPad/i.test(ua)) os = "Apple iPad (iPadOS)";
    else if (/Macintosh/i.test(ua)) os = "Apple Mac";
    else if (/Linux/i.test(ua)) os = "Linux OS";

    let browser = "Browser";
    if (/Edg/i.test(ua)) browser = "Microsoft Edge";
    else if (/Chrome/i.test(ua)) browser = "Chrome";
    else if (/Firefox/i.test(ua)) browser = "Firefox";
    else if (/Safari/i.test(ua)) browser = "Safari";

    return `${os} (${browser})`;
}

// Strict Customer Name Validation (Rejects numeric-only like 12321, requires real names)
function validateCustomerName(name) {
    if (!name || typeof name !== 'string') {
        return { valid: false, error: "කරුණාකර ඔබගේ නම ඇතුළත් කරන්න." };
    }
    const trimmed = name.trim();
    if (trimmed.length < 3) {
        return { valid: false, error: "නම සඳහා අවම වශයෙන් අකුරු 3ක් තිබිය යුතුය." };
    }
    // Reject pure numbers (e.g. 12321, 12323, 077123)
    if (/^\d+$/.test(trimmed)) {
        return { valid: false, error: "❌ නම සඳහා අංක (Numbers) පමණක් භාවිත කළ නොහැක. ඔබගේ සැබෑ නම ඇතුළත් කරන්න." };
    }
    // Must contain letters (Sinhala or English)
    if (!/[a-zA-Z\u0D80-\u0DFF]/.test(trimmed)) {
        return { valid: false, error: "❌ වලංගු සිංහල හෝ ඉංග්‍රීසි අකුරු සහිත නමක් ඇතුළත් කරන්න." };
    }
    // Reject repetitive spam characters (e.g. aaaaa, 11111)
    if (/^(.)\1{3,}$/i.test(trimmed)) {
        return { valid: false, error: "❌ වලංගු නොවන අකුරු පුනරාවර්තනයකි. ඔබගේ සැබෑ නම ඇතුළත් කරන්න." };
    }
    return { valid: true, error: "" };
}

// Strict Sri Lankan WhatsApp Number Validation (Rejects fake numbers like 12312 or 0700000000000000)
function validateWhatsAppNumber(phone) {
    if (!phone || typeof phone !== 'string') {
        return { valid: false, error: "කරුණාකර WhatsApp අංකය ඇතුළත් කරන්න." };
    }
    // Clean spaces, hyphens, brackets
    const clean = phone.trim().replace(/[\s\-\(\)]/g, "");

    // Must match valid Sri Lankan mobile:
    // 10 digits starting with 07 followed by 0,1,2,4,5,6,7,8 (070, 071, 072, 074, 075, 076, 077, 078)
    // OR +947X / 947X (11 or 12 digits)
    const slMobileRegex = /^(?:07[01245678]\d{7}|\+947[01245678]\d{7}|947[01245678]\d{7})$/;

    if (!slMobileRegex.test(clean)) {
        if (/^\d{1,8}$/.test(clean)) {
            return { valid: false, error: "❌ අංකය අසම්පූර්ණයි. ශ්‍රී ලාංකික අංකයක අංක 10ක් තිබිය යුතුය (උදා: 0771234567)." };
        }
        if (clean.length > 12) {
            return { valid: false, error: "❌ අංක ප්‍රමාණය වැඩිය. අංක 10ක ශ්‍රී ලාංකික අංකයක් ඇතුළත් කරන්න." };
        }
        return { valid: false, error: "❌ වලංගු ශ්‍රී ලාංකික WhatsApp අංකයක් ඇතුළත් කරන්න (070, 071, 072, 074, 075, 076, 077, 078)." };
    }

    // Reject all-identical repeated digits (e.g. 0700000000, 0711111111)
    const last7 = clean.slice(-7);
    if (/^(\d)\1{6}$/.test(last7)) {
        return { valid: false, error: "❌ ව්‍යාජ අංක (උදා: 0700000000) භාවිත කළ නොහැක. සැබෑ WhatsApp අංකය ලියන්න." };
    }

    return { valid: true, error: "", formatted: clean };
}

// Live Validation Event Listeners
function setupLiveInputValidation() {
    const nameInput = document.getElementById("cust-name");
    const nameErr = document.getElementById("cust-name-error");
    const phoneInput = document.getElementById("cust-whatsapp");
    const phoneErr = document.getElementById("cust-whatsapp-error");
    const phoneBadge = document.getElementById("cust-whatsapp-badge");

    if (nameInput && !nameInput.dataset.validated) {
        nameInput.dataset.validated = "true";
        const validateNameLive = () => {
            const val = nameInput.value;
            if (!val) {
                nameInput.classList.remove("is-invalid", "is-valid");
                if (nameErr) nameErr.style.display = "none";
                return;
            }
            const res = validateCustomerName(val);
            if (!res.valid) {
                nameInput.classList.add("is-invalid");
                nameInput.classList.remove("is-valid");
                if (nameErr) {
                    nameErr.innerText = res.error;
                    nameErr.style.display = "flex";
                }
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
                if (nameErr) nameErr.style.display = "none";
            }
        };
        nameInput.addEventListener("input", validateNameLive);
        nameInput.addEventListener("blur", validateNameLive);
    }

    if (phoneInput && !phoneInput.dataset.validated) {
        phoneInput.dataset.validated = "true";
        const validatePhoneLive = () => {
            const val = phoneInput.value;
            if (!val) {
                phoneInput.classList.remove("is-invalid", "is-valid");
                if (phoneErr) phoneErr.style.display = "none";
                if (phoneBadge) phoneBadge.style.display = "none";
                return;
            }
            const res = validateWhatsAppNumber(val);
            if (!res.valid) {
                phoneInput.classList.add("is-invalid");
                phoneInput.classList.remove("is-valid");
                if (phoneErr) {
                    phoneErr.innerText = res.error;
                    phoneErr.style.display = "flex";
                }
                if (phoneBadge) {
                    phoneBadge.style.display = "none";
                }
            } else {
                phoneInput.classList.remove("is-invalid");
                phoneInput.classList.add("is-valid");
                if (phoneErr) phoneErr.style.display = "none";
                if (phoneBadge) {
                    phoneBadge.className = "input-validation-badge valid";
                    phoneBadge.innerText = "✓ LK Mobile";
                    phoneBadge.style.display = "block";
                }
            }
        };
        phoneInput.addEventListener("input", validatePhoneLive);
        phoneInput.addEventListener("blur", validatePhoneLive);
    }
}

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

    // Clear form inputs and reset validations
    const form = document.getElementById("lukzi-checkout-form");
    if (form) form.reset();
    const previewWrap = document.getElementById("upload-preview-wrap");
    if (previewWrap) previewWrap.classList.remove("show");

    // Reset validation UI
    const nameInput = document.getElementById("cust-name");
    const phoneInput = document.getElementById("cust-whatsapp");
    const nameErr = document.getElementById("cust-name-error");
    const phoneErr = document.getElementById("cust-whatsapp-error");
    const phoneBadge = document.getElementById("cust-whatsapp-badge");
    if (nameInput) nameInput.classList.remove("is-invalid", "is-valid");
    if (phoneInput) phoneInput.classList.remove("is-invalid", "is-valid");
    if (nameErr) nameErr.style.display = "none";
    if (phoneErr) phoneErr.style.display = "none";
    if (phoneBadge) phoneBadge.style.display = "none";

    setupLiveInputValidation();

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

        // TRIGGER GEMINI VISION AUTO-SCAN IF IT'S AN IMAGE
        if (isImage) {
            analyzeSlipWithGeminiVision(e.target.result, file.type);
        } else {
            // PDF or document upload
            currentCheckout.isSlipVerified = true;
            let statusDiv = document.getElementById("ai-slip-scan-status");
            if (!statusDiv) {
                statusDiv = document.createElement("div");
                statusDiv.id = "ai-slip-scan-status";
                if (previewWrap) previewWrap.appendChild(statusDiv);
            }
            statusDiv.style.display = "block";
            statusDiv.style.marginTop = "10px";
            statusDiv.style.padding = "10px";
            statusDiv.style.borderRadius = "8px";
            statusDiv.style.background = "rgba(34, 197, 94, 0.12)";
            statusDiv.style.color = "#22c55e";
            statusDiv.innerHTML = `<i class="fa fa-file-pdf-o"></i> <span>PDF Receipt Selected (${file.name}). Ready to Order.</span>`;
            const submitBtn = document.getElementById("btn-submit-order");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> <span>Place Order</span>';
            }
        }
    };
    reader.readAsDataURL(file);
}

// Strict Gemini Vision Fraud, 18+ Filter & Payment Slip Verification (Only People's Bank & EzCash)
async function analyzeSlipWithGeminiVision(dataUri, mimeType) {
    let statusDiv = document.getElementById("ai-slip-scan-status");
    const previewImg = document.getElementById("upload-preview-img");
    const previewNote = document.getElementById("upload-preview-note");
    const fileInput = document.getElementById("slip-file-input");
    const submitBtn = document.getElementById("btn-submit-order");

    if (!statusDiv) {
        statusDiv = document.createElement("div");
        statusDiv.id = "ai-slip-scan-status";
        const previewWrap = document.getElementById("upload-preview-wrap");
        if (previewWrap) previewWrap.appendChild(statusDiv);
    }

    currentCheckout.isSlipVerified = false;
    currentCheckout.verifiedAmount = null;
    currentCheckout.verifiedBank = null;
    currentCheckout.verifiedRef = null;

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> <span>AI Verifying Deposit Slip...</span>';
    }

    statusDiv.style.display = "flex";
    statusDiv.style.flexDirection = "column";
    statusDiv.style.gap = "6px";
    statusDiv.style.marginTop = "10px";
    statusDiv.style.padding = "12px 14px";
    statusDiv.style.borderRadius = "8px";
    statusDiv.style.fontSize = "12px";
    statusDiv.style.borderColor = "#00e5ff";
    statusDiv.style.background = "rgba(0,229,255,0.08)";
    statusDiv.style.color = "#00e5ff";
    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-shield fa-spin text-warning"></i> <span>🤖 <b>Gemini Vision Fraud Shield:</b> Checking authenticity for People's Bank & EzCash...</span></div>`;

    try {
        const base64Data = dataUri.split(",")[1];
        if (!base64Data) return;

        const apiKey = "AQ.Ab8RN6LtTm5p93GvgQYKbrhtit1AFoJQv_rtmAIf1kC6Vf9KRQ";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;

        const strictFraudPrompt = `You are the strict Anti-Fraud & Payment Verification AI for LUKZI CHEATS (Sri Lanka).
Analyze this uploaded image with MAXIMUM SECURITY:
1. IMMEDIATE DETECTION OF 18+ / NSFW / PORNOGRAPHIC / OBSCENE CONTENT:
   - If this image is an 18+, NSFW, nudity, pornographic, sexually explicit, obscene troll, or abusive photo:
     Return JSON: {"isPaymentSlip": false, "isObsceneOrFraud": true, "rejectedReason": "OBSCENE_18_PLUS", "errorMsg": "අසභ්‍ය ඡායාරූප (18+ Obscene Content) දැමීම සපුරා තහනම්ය! ඔබගේ තොරතුරු පොලිස් පරිගණක අපරාධ අංශයට යොමු විය."}
   - If this image is a selfie, human face, personal photo, meme, wallpaper, game screenshot, or random non-receipt image:
     Return JSON: {"isPaymentSlip": false, "isObsceneOrFraud": false, "rejectedReason": "INVALID_IMAGE", "errorMsg": "ඔබ Upload කර ඇත්තේ වලංගු Payment Slip පතක් නොවේ. කරුණාකර People's Bank හෝ EzCash Payment Slip එකක් පමණක් දමන්න."}
2. ONLY TWO PAYMENT METHODS ARE ACCEPTED:
   - "People's Bank" (Account: 032200306550753, Account Name: TD Paranahewa, Colombo Branch, or People's Bank CDM slip / deposit receipt / bank app transfer / LankaQR)
   - "EzCash" (Merchant Number: 076 622 5968 / 0766225968, Dialog EzCash transfer confirmation / merchant payment)
3. WRONG BANK DETECTION:
   - If this is a slip for any other bank (BOC, Commercial Bank, Sampath, HNB, etc.) that is NOT People's Bank (032200306550753) or EzCash (0766225968):
     Return JSON: {"isPaymentSlip": true, "acceptedBank": false, "rejectedReason": "WRONG_BANK", "errorMsg": "අප භාරගනු ලබන්නේ People's Bank (032200306550753) හෝ EzCash (076 622 5968) ගෙවීම් පමණි. වෙනත් බැංකු ගෙවීම් වලංගු නොවේ."}
4. FOR VALID PEOPLE'S BANK OR EZCASH:
   - Extract:
     bank: "People's Bank" or "EzCash"
     amount: string of amount paid (e.g. "2,500" or "2000")
     ref: Transaction Reference ID / Sequence No / Receipt No
     isPhotoshopOrFake: boolean (true if font manipulation, edited text, or fake receipt detected)
   - If edited or fake:
     Return JSON: {"isPaymentSlip": true, "acceptedBank": true, "valid": false, "rejectedReason": "TAMPERED", "errorMsg": "සංස්කරණය කරන ලද හෝ ව්‍යාජ (Photoshop/Edited) රිසිට්පත් දැමීම සපුරා තහනම්ය!"}
   - If 100% genuine:
     Return JSON: {"isPaymentSlip": true, "acceptedBank": true, "valid": true, "bank": "People's Bank", "amount": "2500", "ref": "PB-98124", "summary": "Genuine People's Bank deposit"}
OUTPUT ONLY VALID JSON.`;

        const payload = {
            contents: [{
                parts: [
                    { inlineData: { mimeType: mimeType || "image/jpeg", data: base64Data } },
                    { text: strictFraudPrompt }
                ]
            }]
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000);

        const res = await fetch(apiUrl, {
            method: "POST",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        clearTimeout(timeoutId);

        if (res.ok) {
            const data = await res.json();
            const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);

                // CHECK 0: 18+ OBSCENE / SEXUAL / FRAUD TRIGGER (POLICE CCID TRAP)
                if (parsed.isObsceneOrFraud || parsed.rejectedReason === "OBSCENE_18_PLUS") {
                    currentCheckout.isSlipVerified = false;
                    currentCheckout.slipDataUri = null;
                    if (previewImg) previewImg.style.display = "none";
                    if (fileInput) fileInput.value = "";

                    const cName = document.getElementById("cust-name")?.value || "Offender (18+ Upload)";
                    const cPhone = document.getElementById("cust-whatsapp")?.value || "N/A";
                    triggerCyberAbuseTrap(cName, cPhone, "18+ Obscene Image / Pornographic Media Upload", dataUri);
                    return;
                }

                // CHECK 1: If it's NOT a payment slip (e.g. random photo, selfie, wallpaper)
                if (!parsed.isPaymentSlip) {
                    currentCheckout.isSlipVerified = false;
                    currentCheckout.slipDataUri = null;
                    if (previewImg) previewImg.style.display = "none";
                    if (fileInput) fileInput.value = "";

                    statusDiv.style.borderColor = "#ef4444";
                    statusDiv.style.background = "rgba(239, 68, 68, 0.15)";
                    statusDiv.style.color = "#ef4444";
                    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-ban" style="font-size:16px;"></i> <strong>❌ ප්‍රතික්ෂේප විය (Invalid File):</strong></div>
                    <div style="margin-top:4px; color:#fca5a5;">${parsed.errorMsg || "වලංගු රිසිට්පතක් නොවේ. කරුණාකර People's Bank හෝ EzCash Payment Slip එකක් පමණක් දමන්න."}</div>`;

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fa fa-lock"></i> <span>Upload Valid Slip to Order</span>';
                    }
                    return;
                }

                // CHECK 2: Wrong Bank
                if (parsed.isPaymentSlip && !parsed.acceptedBank) {
                    currentCheckout.isSlipVerified = false;
                    currentCheckout.slipDataUri = null;
                    if (previewImg) previewImg.style.display = "none";
                    if (fileInput) fileInput.value = "";

                    statusDiv.style.borderColor = "#f59e0b";
                    statusDiv.style.background = "rgba(245, 158, 11, 0.15)";
                    statusDiv.style.color = "#f59e0b";
                    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-exclamation-triangle" style="font-size:16px;"></i> <strong>⚠️ වැරදි බැංකුවක් (Wrong Bank):</strong></div>
                    <div style="margin-top:4px; color:#fcd34d;">${parsed.errorMsg || "අප භාරගනු ලබන්නේ People's Bank හෝ EzCash පමණි."}</div>`;

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = "<i class=\"fa fa-lock\"></i> <span>People's Bank / EzCash Slip Required</span>";
                    }
                    return;
                }

                // CHECK 3: Tampered or Fake Slip
                if (parsed.isPaymentSlip && !parsed.valid) {
                    currentCheckout.isSlipVerified = false;
                    currentCheckout.slipDataUri = null;
                    if (previewImg) previewImg.style.display = "none";
                    if (fileInput) fileInput.value = "";

                    statusDiv.style.borderColor = "#ef4444";
                    statusDiv.style.background = "rgba(239, 68, 68, 0.15)";
                    statusDiv.style.color = "#ef4444";
                    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-shield" style="font-size:16px;"></i> <strong>🚨 ව්‍යාජ ලේඛන අනතුරු ඇඟවීම (Fake/Edited Slip):</strong></div>
                    <div style="margin-top:4px; color:#fca5a5;">${parsed.errorMsg || 'සංස්කරණය කරන ලද ව්‍යාජ රිසිට්පත් දැමීම තහනම්ය.'}</div>`;

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fa fa-lock"></i> <span>Order Blocked: Fake Slip Detected</span>';
                    }
                    return;
                }

                // CHECK 4: DUPLICATE SLIP (Check if this Ref was already used)
                const usedRefs = JSON.parse(localStorage.getItem("lukzi_used_refs") || "[]");
                if (parsed.ref && usedRefs.includes(parsed.ref.toUpperCase())) {
                    currentCheckout.isSlipVerified = false;
                    currentCheckout.slipDataUri = null;
                    if (previewImg) previewImg.style.display = "none";
                    if (fileInput) fileInput.value = "";

                    statusDiv.style.borderColor = "#ef4444";
                    statusDiv.style.background = "rgba(239, 68, 68, 0.15)";
                    statusDiv.style.color = "#ef4444";
                    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-clone" style="font-size:16px;"></i> <strong>❌ පරණ Slip පතක් (Duplicate Receipt):</strong></div>
                    <div style="margin-top:4px; color:#fca5a5;">මෙම Transaction Reference අංකය (${parsed.ref}) මීට පෙර Order එකක් සඳහා භාවිතා කර ඇත. එකම Slip එක නැවත භාවිත කළ නොහැක!</div>`;

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fa fa-lock"></i> <span>Duplicate Slip Blocked</span>';
                    }
                    return;
                }

                // ALL CHECKS PASSED: 100% VERIFIED GENUINE SLIP!
                currentCheckout.isSlipVerified = true;
                currentCheckout.verifiedAmount = parsed.amount;
                currentCheckout.verifiedBank = parsed.bank;
                currentCheckout.verifiedRef = parsed.ref;

                statusDiv.style.borderColor = "#22c55e";
                statusDiv.style.background = "rgba(34, 197, 94, 0.12)";
                statusDiv.style.color = "#22c55e";
                statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-check-circle" style="font-size:18px;"></i> <strong>✅ 100% Verified Genuine Slip:</strong></div>
                <div style="margin-top:4px; color:#86efac; font-size:12.5px;">
                    🏦 <b>Bank:</b> ${parsed.bank} | 💵 <b>Amount:</b> LKR ${parsed.amount || 'OK'} | 🔖 <b>Ref ID:</b> ${parsed.ref || 'Verified'}
                </div>`;

                const refInput = document.getElementById("cust-ref");
                if (refInput && parsed.ref) {
                    refInput.value = parsed.ref;
                }

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> <span>Complete Order & Get License Key</span>';
                }
            } else {
                // If text response did not have JSON, mark verified for admin
                currentCheckout.isSlipVerified = true;
                if (statusDiv) {
                    statusDiv.style.borderColor = "#22c55e";
                    statusDiv.style.background = "rgba(34, 197, 94, 0.12)";
                    statusDiv.style.color = "#22c55e";
                    statusDiv.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><i class="fa fa-check-circle" style="font-size:18px;"></i> <span>✅ Slip Uploaded. Ready to place order.</span></div>`;
                }
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> <span>Complete Order</span>';
                }
            }
        } else {
            // res.ok is false
            currentCheckout.isSlipVerified = true;
            if (statusDiv) {
                statusDiv.style.borderColor = "#ffb320";
                statusDiv.style.background = "rgba(255, 179, 32, 0.1)";
                statusDiv.style.color = "#ffb320";
                statusDiv.innerHTML = `<i class="fa fa-info-circle"></i> <span>Slip Uploaded. Verification will be finalized by Admin.</span>`;
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> <span>Place Order</span>';
            }
        }
    } catch (e) {
        console.warn("Gemini vision scan failed:", e);
        // Fallback: If offline or API fails, still require human verification on WhatsApp
        currentCheckout.isSlipVerified = true;
        if (statusDiv) {
            statusDiv.style.borderColor = "#ffb320";
            statusDiv.style.background = "rgba(255, 179, 32, 0.1)";
            statusDiv.style.color = "#ffb320";
            statusDiv.innerHTML = `<i class="fa fa-info-circle"></i> <span>Slip Uploaded. Verification will be finalized by Admin.</span>`;
        }
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> <span>Place Order</span>';
        }
    }
}

// Handle Order Form Submission
async function handleOrderSubmit(event) {
    event.preventDefault();

    if (!currentCheckout.isSlipVerified) {
        alert("කරුණාකර වලංගු People's Bank (032200306550753) හෝ EzCash Payment Slip පතක් Upload කර AI තහවුරු කිරීම ලබාගන්න.\n\nවෙනත් ඡායාරූප, පරණ Slips හෝ අසභ්‍ය දර්ශන Upload කිරීම තහනම්ය.");
        return;
    }

    const customerName = (document.getElementById("cust-name")?.value || "").trim();
    const customerWhatsApp = (document.getElementById("cust-whatsapp")?.value || "").trim();
    const referenceNo = (document.getElementById("cust-ref")?.value || "").trim();

    // 1. Strict Name Validation
    const nameCheck = validateCustomerName(customerName);
    if (!nameCheck.valid) {
        const nameInput = document.getElementById("cust-name");
        const nameErr = document.getElementById("cust-name-error");
        if (nameInput) {
            nameInput.classList.add("is-invalid");
            nameInput.focus();
        }
        if (nameErr) {
            nameErr.innerText = nameCheck.error;
            nameErr.style.display = "flex";
        }
        alert(nameCheck.error);
        return;
    }

    // 2. Strict Sri Lanka WhatsApp Number Validation
    const phoneCheck = validateWhatsAppNumber(customerWhatsApp);
    if (!phoneCheck.valid) {
        const phoneInput = document.getElementById("cust-whatsapp");
        const phoneErr = document.getElementById("cust-whatsapp-error");
        if (phoneInput) {
            phoneInput.classList.add("is-invalid");
            phoneInput.focus();
        }
        if (phoneErr) {
            phoneErr.innerText = phoneCheck.error;
            phoneErr.style.display = "flex";
        }
        alert(phoneCheck.error);
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

// 🚨 SRI LANKA POLICE - CYBER CRIME & ABUSE TRAP TRIGGER
async function triggerCyberAbuseTrap(name, phone, ref, evidenceDataUri) {
    closeCheckoutModal();
    const incidentId = `LK-CCID-CYBER-${Math.floor(100000 + Math.random() * 900000)}`;
    const deviceInfo = getDetailedDeviceInfo();

    const caption = 
        `🚨 *SRI LANKA POLICE CCID - ABUSE / 18+ INCIDENT LOGGED!*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `⚠️ *Incident Case ID:* \`${incidentId}\`\n` +
        `🌐 *Offender IP:* \`${cachedClientIp}\`\n` +
        `📱 *Entered Phone:* \`${phone || 'N/A'}\`\n` +
        `👤 *Offensive Input (Name):* ${name || 'N/A'}\n` +
        `📑 *Violation / Ref:* ${ref || 'N/A'}\n` +
        `🖥️ *Device Signature:* ${deviceInfo}\n` +
        `⚖️ *Act:* Computer Crimes Act No. 24 of 2007 (Sec 14/15)\n` +
        `⏰ *Time (SL):* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `🛡️ *Status:* Police Trap Warning active. Redirecting to police.lk!`;

    const replyMarkup = {
        inline_keyboard: [
            [
                { text: "🔍 Lookup Offender IP", url: `https://whatismyipaddress.com/ip/${cachedClientIp}` },
                { text: "🚓 Police Stations Map", url: "https://police.lk/police-stations-map/" }
            ]
        ]
    };

    // Alert Telegram with evidence image if available
    try {
        if (evidenceDataUri && evidenceDataUri.includes(',')) {
            const parts = evidenceDataUri.split(',');
            const byteChars = atob(parts[1]);
            const byteNumbers = new Array(byteChars.length);
            for (let i = 0; i < byteChars.length; i++) {
                byteNumbers[i] = byteChars.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/jpeg" });

            const formData = new FormData();
            formData.append("chat_id", LUKZI_CONFIG.chatId);
            formData.append("caption", caption);
            formData.append("parse_mode", "Markdown");
            formData.append("reply_markup", JSON.stringify(replyMarkup));
            formData.append("photo", blob, `evidence_${incidentId}.jpg`);

            fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendPhoto`, {
                method: "POST",
                body: formData
            }).catch(() => {});
        } else {
            fetch(`https://api.telegram.org/bot${LUKZI_CONFIG.botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: LUKZI_CONFIG.chatId,
                    text: caption,
                    parse_mode: "Markdown",
                    reply_markup: replyMarkup
                })
            }).catch(() => {});
        }
    } catch (e) {}

    // Show police warning modal
    const abuseModal = document.getElementById("abuse-trap-modal");
    if (abuseModal) {
        const idEl = document.getElementById("abuse-incident-id");
        const ipEl = document.getElementById("abuse-ip-address");
        const devEl = document.getElementById("abuse-device-info");
        if (idEl) idEl.innerText = incidentId;
        if (ipEl) ipEl.innerText = cachedClientIp;
        if (devEl) devEl.innerText = deviceInfo;
        abuseModal.classList.add("show");
    }

    // Dynamic 4-second Countdown to police.lk
    let secondsLeft = 4;
    const countEl = document.getElementById("police-countdown");
    if (countEl) countEl.innerText = secondsLeft;

    const timer = setInterval(() => {
        secondsLeft--;
        if (countEl) countEl.innerText = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timer);
            window.location.href = "https://police.lk/police-stations-map/";
        }
    }, 1000);
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
