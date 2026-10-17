/**
 * LUKZI CHEATS - Storefront & Order Management Engine
 * Sri Lanka's #1 Free Fire Gaming Tools Hub
 */

// Product Catalog - Highlighting LUKZI MOBILE OPTIMIZER & SENSI as #1 Best Seller
const PRODUCTS = [
    {
        id: "mobile-optimizer",
        name: "LUKZI MOBILE OPTIMIZER & SENSI",
        tagline: "ALL-IN-ONE DEVICE BOOSTER & AIM SENSI CALIBRATOR",
        badge: "🇱🇰 ලංකාවේ NO.1 (MOST POPULAR)",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/50",
        themeColor: "amber",
        category: "mobile",
        deviceTypes: ["android", "mobile"],
        deviceIcon: "🤖",
        platform: "Android Mobile (No Root Required)",
        image: "assets/images/mobile-optimizer.jpg",
        description: "ශ්‍රී ලංකාවේ Mobile Free Fire ක්‍රීඩකයින් අතර අංක 1 වඩාත්ම ජනප්‍රිය Optimizer එක. RAM Boost, Sensi Calculator, Floating Crosshair සහ Touch Drag Calibration සමග 100% Non-Root Safe!",
        features: [
            "⚡ One-Tap Quick Boost & Device RAM Cleaner",
            "🎯 Sensitivity Calculator & Touch Calibration",
            "🎮 Game Profiles: Ultra Low, Balanced, Smooth & Custom",
            "🕹️ Free Fire & Free Fire MAX Direct Launch Hub",
            "🎯 Floating Crosshair & Perfect Aim Drag Assist",
            "🔋 Battery Health Optimizer & FPS Stabilizer",
            "🛡️ 100% Main ID Safe & Google Play Protect Clean"
        ],
        pricing: [
            { duration: "3 Months License", price: 3000, popular: false },
            { duration: "LIFETIME VIP PRO (All Sensi Functions)", price: 5000, popular: true }
        ],
        compatibility: ["All Android Phones (Samsung, Xiaomi, Vivo, Oppo, Realme, etc.)", "No Root Needed"]
    },
    {
        id: "internal-panel-v4",
        name: "INTERNAL PANEL V4 (1.0v)",
        tagline: "ALL IN ONE FREE FIRE & MAX INTERNAL CHEAT",
        badge: "🔥 PC BESTSELLER",
        badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
        themeColor: "red",
        category: "pc",
        deviceTypes: ["pc"],
        deviceIcon: "💻",
        platform: "PC Emulator (Free Fire & FF MAX)",
        image: "assets/images/internal-panel-v4.jpg",
        description: "Zero Fake Damage, 360° Target Lock සහ Safe Anti-Blacklist Protection සහිත PC සඳහා වඩාත්ම ප්‍රබල Internal Panel එක.",
        features: [
            "🎯 Smart Target Lock & 360° Tracking",
            "💥 Auto Headshot & Prediction Control",
            "🔥 100% Real Damage (Zero Fake Damage)",
            "👁️ Full ESP: Line, Box, Distance & Player Name",
            "🛡️ Safe Memory Bypass & Anti-Blacklist Protection",
            "⚡ No Recoil, No Spread, Fast Loot & Custom HUD",
            "🔄 Auto Updates & Safe Long Term Stability"
        ],
        pricing: [
            { duration: "3 Days Key", price: 400, popular: false },
            { duration: "7 Days Key", price: 800, popular: true },
            { duration: "1 Month (30 Days)", price: 2000, popular: false }
        ],
        compatibility: ["BlueStacks 4/5", "LDPlayer 9", "MEmu", "NoxPlayer", "Win 10/11"]
    },
    {
        id: "mouse-bot-pro",
        name: "MOUSE BOT PRO (1.7v)",
        tagline: "AI SMART AIM ASSISTANT FOR PC EMULATORS",
        badge: "⚡ 100% MAIN ID SAFE",
        badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
        themeColor: "cyan",
        category: "pc",
        deviceTypes: ["pc"],
        deviceIcon: "🖱️",
        platform: "PC Emulator (BlueStacks, LDPlayer)",
        image: "assets/images/mouse-bot-pro.jpg",
        description: "Memory Inject නොවන බාහිර AI Mouse Assistant එක. ඔබගේ Main Account එකට 100% Safe වන අතර Zero Ban Risk සහිතයි.",
        features: [
            "🧠 AI Smart Aim Assist & Human-like Movement",
            "🖱️ Zero Memory Read/Write (Zero Game Injection Detection)",
            "🛡️ 100% Main ID Safe & Undetected",
            "🎮 Low-End & High-End PC සඳහා Fully Optimized",
            "⚙️ Fully Customizable Aim FOV, Smoothing & Sens",
            "🔄 Free Fire Update වලදී Auto Update පහසුකම",
            "🛠️ Complete Setup Assistance & Driver Help"
        ],
        pricing: [
            { duration: "3 Days Key", price: 400, popular: false },
            { duration: "7 Days Key", price: 700, popular: true },
            { duration: "1 Month (30 Days)", price: 1500, popular: false }
        ],
        compatibility: ["BlueStacks", "LDPlayer 9", "MEmu", "NoxPlayer", "Windows 10/11"]
    },
    {
        id: "mobile-esp",
        name: "MOBILE ESP (ANDROID)",
        tagline: "REAL PLAYERS USE ESP — SEE THEM FIRST, STAY AHEAD",
        badge: "📱 ANDROID ONLY (iOS COMING SOON ⏳)",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
        themeColor: "emerald",
        category: "mobile",
        deviceTypes: ["android", "mobile"],
        deviceIcon: "📱",
        platform: "Android (All Versions) • iOS Coming Soon ⏳",
        image: "assets/images/mobile-esp.jpg",
        description: "Mobile Android ක්‍රීඩකයින් සඳහා වන Ultimate Visual Awareness ESP එක. TikTok / YouTube Live Stream කරන විට Viewers ලාට ESP එක නොපෙනෙන Stream Mode අන්තර්ගතයි. (iOS Version එක දැනට සංවර්ධනය වෙමින් පවතී — Coming Soon).",
        features: [
            "🎯 Enemy Location ESP (Radar & 3D Box)",
            "📺 Stream Mode Support (TikTok / YouTube Live වලදී නොපෙනේ)",
            "📱 Android Compatible (All Android 9 to 15 Versions)",
            "⏳ Apple iOS: COMING SOON (දැනට සංවර්ධනය වෙමින් පවතී)",
            "⚙️ Configurable Distance, Line & Enemy HP",
            "🔄 Regular Updates & Compatibility Guarantees",
            "🔐 100% Private, Secure & Undetected Code",
            "🛠️ Step-by-Step Installation Guidance & Support"
        ],
        pricing: [
            { duration: "1 OBB Update Valid (2 Months)", price: 2000, popular: true }
        ],
        compatibility: ["Android 9 to 15 (Samsung, Xiaomi, Vivo, Oppo, Realme)", "Non-Root & Root Safe", "iOS Version Coming Soon ⏳"]
    }
];

// Dedicated Technical Support Admins (Official Staff)
const SUPPORT_ADMINS = [
    {
        id: "admin-isuka",
        name: "ISUKA",
        title: "MAIN ADMIN OF STAFF",
        experience: "4 Years + Trusted and Verified Staff Member & Friend",
        role: "Main Admin of Staff & Technical Operations",
        avatar: "assets/images/support-agent.png",
        status: "Online",
        whatsapp: "94705194865",
        phoneDisplay: "+94 70 519 4865",
        badge: "👑 MAIN ADMIN • 4+ YEARS VERIFIED",
        specialties: [
            "4 Years + Trusted and Verified Staff Member & Friend",
            "Main Admin of Staff & Setup Guidance",
            "Full System Setup, Key Activation & Troubleshooting",
            "TeamViewer / AnyDesk Remote Installation Support"
        ]
    },
    {
        id: "admin-dinu",
        name: "DINU MALLI",
        title: "2ND ADMIN & SUPPORTER OF LUKZI GANG",
        experience: "2nd Admin & Supporter of Lukzi Gang",
        role: "2nd Admin & Supporter of Lukzi Gang",
        avatar: "assets/images/support-agent.png",
        status: "Online",
        whatsapp: "94725087806",
        phoneDisplay: "+94 72 508 7806",
        badge: "⚡ 2ND ADMIN • LUKZI GANG",
        specialties: [
            "2nd Admin & Supporter of Lukzi Gang",
            "Fast Customer Assistance & Setup Help",
            "Android Optimizer & PC Emulator Guidance",
            "Direct 1-on-1 Friendly WhatsApp Support"
        ]
    }
];

// Feedback & Proof Videos (Embedded Internal Showcase)
const STREAMER_VIDEOS = [
    {
        id: "video-1",
        title: "MASTER BROTHERS FREE PROMOTION",
        creator: "Master Brothers",
        badge: "🔥 PROMOTION PROOF",
        views: "Official Showcase",
        duration: "Full Video",
        youtubeId: "z8tvkHMJH1A",
        description: "Master Brothers Official Review & Gameplay Testing for LUKZI tools."
    },
    {
        id: "video-2",
        title: "GAMING SADU FEEDBACKS",
        creator: "Gaming Sadu",
        badge: "⭐ STREAMER FEEDBACK",
        views: "Verified Review",
        duration: "Full Video",
        youtubeId: "RJy2tP6wYeY",
        description: "Gaming Sadu Live Gameplay Proof, Sensitivity & Smooth Performance Test."
    },
    {
        id: "video-3",
        title: "TRYHARD FEEDBACKS",
        creator: "Tryhard",
        badge: "🎯 PRO PLAYER FEEDBACK",
        views: "Squad Showcase",
        duration: "Full Video",
        youtubeId: "Lf30olu4nDM",
        description: "Tryhard squad testing real damage, headshot drag & recoil stability."
    }
];

// Multi-Language Translations Dictionary (Sinhala default, English, Tamil)
const TRANSLATIONS = {
    si: {
        announcement: "🔥 Safe Memory Bypass • Real Damage • No Fake Damage • Fast Activation",
        sellerOnline: "Seller Online • විනාඩි 2-5න් Instant Verification",
        sellerAway: "Seller Away • සුළු වෙලාවකින් Verification සිදුවේ",
        navProducts: "ප්‍රොඩක්ට්ස් (Products)",
        navHowToBuy: "මිලදී ගන්නා හැටි",
        navPayments: "ගෙවීම් විස්තර",
        navAdmins: "තාක්ෂණික සහාය (Admins)",
        navVideos: "වීඩියෝ සාක්ෂි",
        navTutorials: "Drivers & Tutorials",
        navProofs: "ගෙවීම් සාක්ෂි",
        navTrackOrder: "Order එක බලන්න",
        shopNow: "මිලදී ගන්න (SHOP NOW)",
        proofChannel: "සාක්ෂි Channel එක",
        heroPill: "ශ්‍රී ලංකාවේ අංක 1 විශ්වාසනීය DIGITAL GAMING STORE — 100% WORKING",
        heroTitle1: "DOMINATE EVERY",
        heroTitle2: "BATTLEFIELD",
        heroDesc: "Fake sellers ලාට අහුවෙලා සල්ලි නාස්ති කරගන්න එපා. Free Fire PC & Mobile සඳහා Private Internal Panels, Mouse Bot AI, Mobile ESP (Android) සහ Mobile Optimizer & Sensi මෙතැනින් ලබාගන්න. People's Bank හෝ EzCash හරහා ගෙවා විනාඩි 2-5න් instant verification සමග VIP Access ගන්න!",
        heroExploreBtn: "සියලු CHEATS & TOOLS බලන්න",
        heroTrackBtn: "Order එක Track කරන්න",
        badgeSafe: "100% Main ID Safe",
        badgeSafeSub: "Zero Ban Risk ක්‍රමවේද",
        badgeDamage: "Real Damage 100%",
        badgeDamageSub: "Zero Fake Damage Bugs",
        badgeDelivery: "විනාඩි 2-5න් Delivery",
        badgeDeliverySub: "ඉක්මන් Slip Verification",
        badgeCustomers: "1,000+ Gamers ලා",
        badgeCustomersSub: "ක්‍රියාකාරී ලාංකික ක්‍රීඩකයින්",
        catalogTag: "STORE CATALOG",
        catalogTitle: "ප්‍රධාන PRODUCTS සහ පැකේජ",
        catalogDesc: "ඔබට අවශ්‍ය Platform එක තෝරා මිල ගණන් සහ විශේෂාංග පරීක්ෂා කර මිලදී ගන්න.",
        tabAll: "සියලු Products",
        tabPc: "PC Emulators",
        tabMobile: "Mobile (Android / iOS)",
        spotlightBadge: "🔥 ලංකාවේ NO.1 වැඩිම ඉල්ලුමක් ඇති PRODUCT එක",
        spotlightTitle: "LUKZI MOBILE OPTIMIZER & SENSI",
        spotlightDesc: "Mobile Players ලාට Zero Lag, 90 FPS Smoothness, Floating Crosshair සහ Perfect Aim Drag ලබාදෙන එකම All-In-One Optimizer එක!",
        howToBuyTag: "කාලය නාස්ති වීමක් නැත",
        howToBuyTitle: "පියවර 3න් පහසුවෙන්ම මිලදී ගන්නා ආකාරය",
        howToBuyDesc: "WhatsApp වල පැය ගණන් මැසේජ් කර කර ඉන්න අවශ්‍ය නැත. සල්ලි දාලා Slip එක දැමූ සැණින් VIP Access එක Screen එකේම විවෘත වේ.",
        step1Title: "Tool එක තෝරා මුදල් ගෙවන්න",
        step1Desc: "ඔබට අවශ්‍ය Product එක තෝරා අපගේ People's Bank හෝ EzCash ගිණුමට නියමිත මුදල තැන්පත් කරන්න.",
        step2Title: "Receipt / Slip එක Upload කරන්න",
        step2Desc: "මිලදී ගන්න (Buy Now) click කර, ගෙවීම් පත්‍රිකාවේ (Slip) ඡායාරූපය හෝ PDF එක upload කර ඔබගේ WhatsApp අංකය ඇතුළත් කරන්න.",
        step3Title: "ක්ෂණික VIP Unlock",
        step3Desc: "විනාඩි 2-5ක් ඇතුළත අපගේ Seller විසින් slip එක පරීක්ෂා කර ඔබගේ License Key එක සහ Download Links වෙබ්සයිට් එකෙන්ම ලබාදේ.",
        bankTag: "නිල ගෙවීම් විස්තර",
        bankTitle: "BANK TRANSFER සහ EZCASH විස්තර",
        bankDesc: "පහත ඇති Copy Buttons භාවිතා කර ඉතා පහසුවෙන් ඔබගේ Banking App (Flash, Sampath Vishwa, Genie ආදී) හෝ EzCash වලට paste කරන්න.",
        supportTag: "තාක්ෂණික සහාය",
        supportTitle: "SETUP SUPPORT & ERROR FIXING ADMINS",
        supportDesc: "Cheat එක හෝ Optimizer එක දාගන්න තේරෙන්නේ නැද්ද? අපේ Support Admins ලා නොමිලේ TeamViewer / AnyDesk හෝ WhatsApp මගින් Setup කර දෙනු ලැබේ.",
        videosTag: "වීඩියෝ සාක්ෂි",
        videosTitle: "STREAMER GAMEPLAY & VIDEO PROOFS",
        videosDesc: "ලංකාවේ ජනප්‍රිය Streamers ලා අපගේ Tools භාවිතා කර Play කරන වීඩියෝ සහ Tutorials නරඹන්න.",
        proofsTag: "සත්‍යාපිත සමාලෝචන",
        proofsTitle: "CUSTOMER FEEDBACKS සහ ගෙවීම් සාක්ෂි",
        proofsDesc: "1,000කට අධික ලාංකික Free Fire ක්‍රීඩකයින් පිරිසක් LUKZI CHEATS සමග අත්වැල් බැඳගෙන සිටී.",
        trackTitle: "ORDER STATUS එක පරීක්ෂා කර VIP ACCESS ගන්න",
        trackDesc: "දැනටමත් Slip එක Upload කළාද? ඔබගේ Order ID එක (උදා: LKZ-123456) හෝ WhatsApp දුරකථන අංකය ඇතුළත් කරන්න.",
        trackBtn: "Order එක සොයන්න",
        faqTitle: "නිතර අසන ප්‍රශ්න (FAQ)",
        buyNowBtn: "මිලදී ගන්න (BUY NOW)",
        fullSpecsBtn: "විස්තර (Specs)",
        deviceLabel: "ඔබගේ Device එක:",
        deviceFilterText: "මගේ Device එකට ගැලපෙන Tools",
        deviceAllBtn: "🌐 සියල්ල (All)",
        tabAndroid: "Android Mobile",
        tabIos: "Apple iOS (iPhone/iPad)",
        bNavHome: "Home",
        bNavProducts: "Products",
        bNavBank: "ගෙවීම්",
        bNavTrack: "Track",
        bNavSupport: "සහාය",
        deviceNoticeAndroid: "Android Phone එකක් හඳුනාගන්නා ලදී — LUKZI Mobile Optimizer & Mobile ESP 100% Non-Root Safe!",
        deviceNoticeIos: "Apple iOS (iPhone/iPad) හඳුනාගන්නා ලදී — Mobile ESP with Stream Mode & Sensi 100% ක්‍රියාත්මකයි.",
        deviceNoticePc: "PC / Laptop එකක් හඳුනාගන්නා ලදී — Mouse Bot Pro AI (Zero Ban) & Internal Panel V4 ගැලපේ."
    },
    en: {
        announcement: "🔥 Safe Memory Bypass • Real Damage • No Fake Damage • Fast Activation",
        sellerOnline: "Seller Online • Instant 2-5 Min Verification",
        sellerAway: "Seller Away • Short Delay for Verification",
        navProducts: "Products & Pricing",
        navHowToBuy: "How to Buy",
        navPayments: "Bank Details",
        navAdmins: "Tech Support Admins",
        navVideos: "Streamer Proofs",
        navTutorials: "Tutorials & Drivers",
        navProofs: "Customer Proofs",
        navTrackOrder: "Track Order",
        shopNow: "SHOP NOW",
        proofChannel: "Proof Channel",
        heroPill: "SRI LANKA'S #1 VERIFIED DIGITAL GAMING STORE — 100% WORKING",
        heroTitle1: "DOMINATE EVERY",
        heroTitle2: "BATTLEFIELD",
        heroDesc: "Stop wasting time on fake sellers. Get private Free Fire PC & Mobile Internal Panels, Mouse Bot AI, Mobile ESP (Android), and Mobile Optimizer & Sensi. Instant 2-5 min automated verification via People's Bank & EzCash.",
        heroExploreBtn: "EXPLORE ALL CHEATS & TOOLS",
        heroTrackBtn: "Track Submitted Slip",
        badgeSafe: "100% Main ID Safe",
        badgeSafeSub: "Zero ban risk architecture",
        badgeDamage: "Real Damage 100%",
        badgeDamageSub: "Zero fake damage bugs",
        badgeDelivery: "Instant 2-5 Min Setup",
        badgeDeliverySub: "Quick slip verification",
        badgeCustomers: "1,000+ Customers",
        badgeCustomersSub: "Active Sri Lankan players",
        catalogTag: "STORE CATALOG",
        catalogTitle: "FEATURED PRODUCTS & PACKAGES",
        catalogDesc: "Select your platform below to view live pricing, features, and instant buy options.",
        tabAll: "All Products",
        tabPc: "PC Emulators",
        tabMobile: "Mobile (Android / iOS)",
        spotlightBadge: "🔥 SRI LANKA'S #1 MOST POPULAR PRODUCT",
        spotlightTitle: "LUKZI MOBILE OPTIMIZER & SENSI",
        spotlightDesc: "The ultimate all-in-one optimizer for mobile players delivering zero lag, 90 FPS smoothness, floating crosshair, and aim drag calibration!",
        howToBuyTag: "ZERO TIME-WASTING",
        howToBuyTitle: "HOW THE 3-STEP INSTANT BUY PROCESS WORKS",
        howToBuyDesc: "No need to wait hours for manual messages. Complete payment, upload slip, and your VIP access unlocks directly on screen.",
        step1Title: "Select Tool & Transfer",
        step1Desc: "Pick your product and transfer the exact amount to our People's Bank or EzCash account.",
        step2Title: "Upload Receipt / Slip",
        step2Desc: "Click 'Buy Now', upload your clear slip screenshot or PDF, and enter your WhatsApp number.",
        step3Title: "Instant VIP Unlock",
        step3Desc: "Our seller verifies within 2-5 minutes. Your screen automatically unlocks with your VIP License Key & Downloads.",
        bankTag: "OFFICIAL PAYMENT GATEWAY",
        bankTitle: "BANK TRANSFER & EZCASH DETAILS",
        bankDesc: "Use quick copy buttons below to easily paste into banking apps (Flash, Sampath Vishwa, Genie) or EzCash.",
        supportTag: "TECHNICAL SUPPORT",
        supportTitle: "SETUP SUPPORT & ERROR FIXING ADMINS",
        supportDesc: "Having trouble setting up? Our dedicated Support Admins provide 100% free setup support via TeamViewer, AnyDesk, or WhatsApp.",
        videosTag: "VIDEO PROOFS",
        videosTitle: "STREAMER GAMEPLAY & VIDEO PROOFS",
        videosDesc: "Watch popular Sri Lankan streamers testing our tools and step-by-step setup guides.",
        proofsTag: "VERIFIED REVIEWS",
        proofsTitle: "CUSTOMER FEEDBACKS & PAYMENT PROOFS",
        proofsDesc: "Over 1,000+ satisfied Sri Lankan Free Fire gamers trust LUKZI CHEATS every single day.",
        trackTitle: "TRACK YOUR ORDER STATUS & UNLOCK VIP ACCESS",
        trackDesc: "Already submitted your slip? Enter your Order ID (e.g. LKZ-123456) or your WhatsApp phone number below.",
        trackBtn: "Track Status",
        faqTitle: "FREQUENTLY ASKED QUESTIONS",
        buyNowBtn: "BUY NOW",
        fullSpecsBtn: "Full Specs",
        deviceLabel: "Your Device:",
        deviceFilterText: "Tools for My Device",
        deviceAllBtn: "🌐 All Tools",
        tabAndroid: "Android Mobile",
        tabIos: "Apple iOS (iPhone/iPad)",
        bNavHome: "Home",
        bNavProducts: "Products",
        bNavBank: "Bank Details",
        bNavTrack: "Track Order",
        bNavSupport: "Support",
        deviceNoticeAndroid: "Android Device Detected — LUKZI Mobile Optimizer & Mobile ESP 100% Non-Root Safe!",
        deviceNoticeIos: "Apple iOS Detected — Mobile ESP with Stream Mode & Touch Sensi fully compatible.",
        deviceNoticePc: "PC / Laptop Detected — Mouse Bot Pro AI & Internal Panel V4 ready for LDPlayer/BlueStacks."
    },
    ta: {
        announcement: "🔥 Safe Memory Bypass • Real Damage • No Fake Damage • Fast Activation",
        sellerOnline: "விற்பனையாளர் ஆன்லைனில் • 2-5 நிமிட சரிபார்ப்பு",
        sellerAway: "விற்பனையாளர் வெளியே உள்ளார் • சிறிது நேரத்தில் சரிபார்க்கப்படும்",
        navProducts: "பொருட்கள் & விலை",
        navHowToBuy: "வாங்குவது எப்படி",
        navPayments: "வங்கி விவரங்கள்",
        navAdmins: "தொழில்நுட்ப உதவி",
        navVideos: "வீடியோ சான்றுகள்",
        navTutorials: "வழிகாட்டிகள்",
        navProofs: "வாடிக்கையாளர் சான்றுகள்",
        navTrackOrder: "ஆர்டரை சரிபார்க்கவும்",
        shopNow: "இப்போதே வாங்கவும்",
        proofChannel: "சான்று சேனல்",
        heroPill: "இலங்கையின் #1 நம்பகமான கேமிங் ஸ்டோர் — 100% இயங்குகிறது",
        heroTitle1: "DOMINATE EVERY",
        heroTitle2: "BATTLEFIELD",
        heroDesc: "போலி விற்பனையாளர்களிடம் ஏமாற வேண்டாம். Free Fire PC & Mobile கருவிகள், Mouse Bot AI, Mobile ESP (Android) மற்றும் Mobile Optimizer ஆகியவற்றை உடனே பெறுங்கள். மக்கள் வங்கி அல்லது EzCash மூலம் செலுத்தி 2-5 நிமிடங்களில் VIP அணுக்கத்தைப் பெறுங்கள்!",
        heroExploreBtn: "அனைத்து கருவிகளையும் காண்க",
        heroTrackBtn: "ஆர்டரை சரிபார்க்கவும்",
        badgeSafe: "100% Main ID Safe",
        badgeSafeSub: "முழுமையான பாதுகாப்பு",
        badgeDamage: "Real Damage 100%",
        badgeDamageSub: "போலி சேதம் இல்லை",
        badgeDelivery: "2-5 நிமிடங்களில் கிடைக்கும்",
        badgeDeliverySub: "விரைவான சரிபார்ப்பு",
        badgeCustomers: "1,000+ வாடிக்கையாளர்கள்",
        badgeCustomersSub: "இலங்கை வீரர்கள்",
        catalogTag: "தயாரிப்பு பட்டியல்",
        catalogTitle: "முக்கிய தயாரிப்புகள் & தொகுப்புகள்",
        catalogDesc: "உங்கள் சாதனத்திற்கு ஏற்ற கருவியைத் தேர்ந்தெடுத்து உடனடியாக வாங்கவும்.",
        tabAll: "அனைத்தும்",
        tabPc: "PC Emulators",
        tabMobile: "Mobile (Android / iOS)",
        spotlightBadge: "🔥 இலங்கையில் அதிகம் விற்பனையாகும் பொருள்",
        spotlightTitle: "LUKZI MOBILE OPTIMIZER & SENSI",
        spotlightDesc: "மொபைல் வீரர்களுக்கான Zero Lag, 90 FPS மற்றும் சிறந்த Aim Drag தரும் ஒரே Optimizer!",
        howToBuyTag: "நேர விரயம் இல்லை",
        howToBuyTitle: "3 எளிய படிகளில் வாங்குவது எப்படி",
        howToBuyDesc: "நீண்ட நேரம் காத்திருக்க தேவையில்லை. பணம் செலுத்தி சீட்டை பதிவேற்றியதும் VIP அணுக்கம் திரையில் தோன்றும்.",
        step1Title: "கருவியைத் தேர்வு செய்து பணம் செலுத்தவும்",
        step1Desc: "பொருளைத் தேர்வு செய்து மக்கள் வங்கி அல்லது EzCash கணக்கிற்கு தொகையை மாற்றவும்.",
        step2Title: "ரசீதை பதிவேற்றவும்",
        step2Desc: "'இப்போதே வாங்கவும்' என்பதை அழுத்தி, ரசீதை பதிவேற்றி உங்கள் WhatsApp எண்ணை உள்ளிடவும்.",
        step3Title: "உடனடி VIP திறப்பு",
        step3Desc: "2-5 நிமிடங்களில் உங்கள் உரிம விசை (License Key) மற்றும் பதிவிறக்க இணைப்புகள் வழங்கப்படும்.",
        bankTag: "வங்கி விவரங்கள்",
        bankTitle: "வங்கி மற்றும் EZCASH விவரங்கள்",
        bankDesc: "கீழே உள்ள Copy பொத்தான்களைப் பயன்படுத்தி எளிதாக நகலெடுக்கவும்.",
        supportTag: "தொழில்நுட்ப உதவி",
        supportTitle: "அமைவு உதவி & பிழை திருத்தம்",
        supportDesc: "அமைப்பதில் சிரமமா? எங்கள் நிர்வாகிகள் AnyDesk அல்லது WhatsApp மூலம் இலவசமாக அமைத்து தருவார்கள்.",
        videosTag: "வீடியோ சான்றுகள்",
        videosTitle: "வீடியோ மற்றும் ஸ்ட்ரீமர் சான்றுகள்",
        videosDesc: "பிரபல இலங்கை ஸ்ட்ரீமர்களின் விளையாட்டு வீடியோக்கள் மற்றும் வழிகாட்டிகளைப் பாருங்கள்.",
        proofsTag: "வாடிக்கையாளர் கருத்துக்கள்",
        proofsTitle: "வாடிக்கையாளர் சான்றுகள்",
        proofsDesc: "1,000+ க்கும் மேற்பட்ட இலங்கை Free Fire வீரர்கள் எங்களை நம்புகிறார்கள்.",
        trackTitle: "ஆர்டர் நிலையை சரிபார்க்கவும்",
        trackDesc: "ரசீதை பதிவேற்றியுள்ளீர்களா? உங்கள் ஆர்டர் எண் அல்லது WhatsApp எண்ணை உள்ளிடவும்.",
        trackBtn: "சரிபார்க்கவும்",
        faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)",
        buyNowBtn: "இப்போதே வாங்கவும்",
        fullSpecsBtn: "முழு விவரங்கள்",
        deviceLabel: "உங்கள் சாதனம்:",
        deviceFilterText: "எனது சாதன கருவிகள்",
        deviceAllBtn: "🌐 அனைத்து கருவிகள்",
        tabAndroid: "Android Mobile",
        tabIos: "Apple iOS (iPhone/iPad)",
        bNavHome: "முகப்பு",
        bNavProducts: "பொருட்கள்",
        bNavBank: "வங்கி",
        bNavTrack: "சரிபார்",
        bNavSupport: "உதவி",
        deviceNoticeAndroid: "Android சாதனம் கண்டறியப்பட்டது — Mobile Optimizer & ESP 100% இயங்குகிறது!",
        deviceNoticeIos: "Apple iOS கண்டறியப்பட்டது — Mobile ESP & Touch Sensi முழுமையாக பொருந்தும்.",
        deviceNoticePc: "PC / மடிக்கணினி கண்டறியப்பட்டது — Mouse Bot Pro AI & Internal Panel V4 தயாராக உள்ளது."
    }
};

// Language State
let currentLanguage = localStorage.getItem("lukzi_lang") || "si";

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("lukzi_lang", lang);

    ['si', 'en', 'ta'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "px-2.5 py-1 rounded-lg text-cyan-400 bg-cyan-500/20 font-bold transition border border-cyan-500/30";
            } else {
                btn.className = "px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition border border-transparent";
            }
        }
    });

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.si;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Refresh products grid with active language labels
    initProductsGrid(currentCategoryFilter);
}

// Bank & Payment Configuration
const PAYMENT_CONFIG = {
    bank: {
        name: "People's Bank (මහජන බැංකුව)",
        accountName: "TD Paranahewa",
        accountNumber: "032200306550753",
        branch: "Colombo"
    },
    ezcash: {
        name: "EzCash (Dialog / SLT)",
        number: "076 622 5968",
        notice: "Merchant wallet for cash-in only. Do not message or call."
    },
    whatsappChannel: "https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36"
};

// Official WhatsApp Community & VIP Support Channel Configuration
const TELEGRAM_CONFIG = {
    channelInvite: "https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36",
    vipGroupLink: "https://whatsapp.com/channel/0029Vb9CqFIATRSfE7H7Il36"
};

// State
let currentSelectedProduct = null;
let currentSelectedPlan = null;
let uploadedSlipDataUrl = null;
let uploadedSlipType = "image"; // "image" or "pdf"
let uploadedSlipName = "";

let currentCategoryFilter = "all";

// Toggle Tablet & Mobile Navigation Drawer
function toggleMobileDrawer() {
    const drawer = document.getElementById("mobile-nav-drawer");
    if (!drawer) return;
    drawer.classList.toggle("hidden");
}

// Initialize when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    checkForBannedUser();
    initProductsGrid("all");
    initFilterTabs();
    initStaffStatus();
    initSupportAdmins();
    initStreamerVideos();
    checkForActiveOrder();
    renderTrackOrderSection();
    initCheckExistingOrder();
    initFAQ();
    changeLanguage(currentLanguage);
});

// Render Product Cards - Specially Highlight LUKZI MOBILE OPTIMIZER & SENSI
function initProductsGrid(filter = "all") {
    currentCategoryFilter = filter;
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Avoid repeating mobile-optimizer when in 'all' mode because it is already highlighted in the Spotlight banner right above!
    const filtered = filter === "all" 
        ? PRODUCTS.filter(p => p.id !== "mobile-optimizer") 
        : PRODUCTS.filter(p => p.category === filter);

    filtered.forEach(product => {
        const isOptimizer = product.id === "mobile-optimizer";
        const isRedTheme = product.themeColor === "red";
        
        const cardClass = isOptimizer 
            ? "cyber-card cyber-card-gold ring-2 ring-amber-400/80 shadow-2xl shadow-amber-500/20" 
            : (isRedTheme ? "cyber-card cyber-card-red" : "cyber-card");
            
        const accentColor = isOptimizer ? "text-amber-400" : (isRedTheme ? "text-red-500" : "text-cyan-400");
        
        const btnBg = isOptimizer 
            ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold shadow-amber-500/30" 
            : (isRedTheme ? "bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-red-900/40" : "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-cyan-900/40");

        const featuresHtml = product.features.slice(0, 4).map(f => `
            <li class="flex items-start text-xs sm:text-sm text-slate-300">
                <span class="mr-2 ${accentColor}">✔</span>
                <span>${f}</span>
            </li>
        `).join("");

        const lowestPrice = Math.min(...product.pricing.map(p => p.price));

        const buyText = currentLanguage === 'en' ? 'BUY NOW' : (currentLanguage === 'ta' ? 'இப்போதே வாங்க' : 'මිලදී ගන්න (BUY NOW)');
        const specsText = currentLanguage === 'en' ? 'Full Specs' : (currentLanguage === 'ta' ? 'விவரங்கள்' : 'විස්තර (Specs)');

        const card = document.createElement("div");
        card.className = `${cardClass} rounded-2xl flex flex-col p-4 sm:p-5 shadow-2xl relative border border-slate-800`;
        card.innerHTML = `
            ${isOptimizer ? `
                <div class="absolute -top-1 -right-1 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-lg uppercase font-tech tracking-wider animate-pulse">
                    🔥 MOST POPULAR IN SRI LANKA
                </div>
            ` : ''}

            <!-- Top Badge & Category -->
            <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${product.badgeColor}">
                    ${product.badge}
                </span>
                <span class="text-xs uppercase tracking-wider font-tech text-cyan-300 bg-slate-900/90 px-2.5 py-0.5 rounded border border-slate-800 flex items-center gap-1.5">
                    <span>${product.deviceIcon || '🎮'}</span>
                    <span>${product.platform}</span>
                </span>
            </div>

            <!-- Image Banner with Aspect Ratio -->
            <div class="relative rounded-xl overflow-hidden mb-4 border border-slate-800/80 group">
                <img src="${product.image}" onerror="this.onerror=null; this.src='assets/images/lukzi-logo.jpg';" alt="${product.name}" class="w-full h-44 sm:h-48 object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                    <span class="text-xs text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                        ${product.compatibility.slice(0, 2).join(" • ")}
                    </span>
                    <button onclick="previewImage('${product.image}', '${product.name}')" class="text-xs text-cyan-400 bg-slate-900/90 hover:bg-slate-800 px-2.5 py-1 rounded border border-cyan-500/40 flex items-center gap-1 transition">
                        <span>🔍 View</span>
                    </button>
                </div>
            </div>

            <!-- Title & Tagline -->
            <div class="mb-3">
                <h3 class="text-lg sm:text-xl font-bold font-tech text-white tracking-wide uppercase ${isOptimizer ? 'text-amber-300' : ''}">
                    ${product.name}
                </h3>
                <p class="text-xs text-slate-400 mt-1 line-clamp-2">
                    ${product.tagline}
                </p>
            </div>

            <!-- Features List -->
            <ul class="space-y-1.5 mb-5 flex-1 border-t border-b border-slate-800/80 py-3">
                ${featuresHtml}
            </ul>

            <!-- Pricing Preview & Order Button -->
            <div class="mt-auto pt-2">
                <div class="flex items-baseline justify-between mb-3">
                    <div>
                        <span class="text-xs text-slate-400">Starting from</span>
                        <div class="text-xl sm:text-2xl font-bold font-gaming ${accentColor}">
                            Rs. ${lowestPrice.toLocaleString()} <span class="text-xs text-slate-400 font-sans font-normal">LKR</span>
                        </div>
                    </div>
                    <span class="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-full flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        Instant Delivery
                    </span>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <button onclick="openProductDetails('${product.id}')" class="px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition text-center">
                        ${specsText}
                    </button>
                    <button onclick="openCheckoutModal('${product.id}')" class="btn-cyber px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white ${btnBg} shadow-lg transition text-center flex items-center justify-center gap-1">
                        <span>${buyText}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Render Support Admins
function initSupportAdmins() {
    const container = document.getElementById("support-admins-grid");
    if (!container) return;

    container.innerHTML = SUPPORT_ADMINS.map(admin => {
        const isIsuka = admin.id === "admin-isuka";
        const accent = isIsuka ? "text-amber-400 border-amber-500/40 bg-amber-500/10" : "text-cyan-400 border-cyan-500/40 bg-cyan-500/10";
        const cardBorder = isIsuka ? "border-amber-500/30 hover:border-amber-500/60" : "border-cyan-500/30 hover:border-cyan-500/60";
        const btnClass = "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25";
        
        const specialtiesHtml = admin.specialties.map(s => `
            <li class="flex items-center gap-2 text-xs text-slate-300">
                <span class="${isIsuka ? 'text-amber-400' : 'text-cyan-400'} font-bold">✔</span>
                <span>${s}</span>
            </li>
        `).join("");

        const isLinked = admin.whatsapp && admin.whatsapp !== "pending";
        const waMsg = encodeURIComponent(`Hello ${admin.name}, I bought a product from LUKZI CHEATS website and I need setup support.`);
        const waUrl = isLinked ? `https://wa.me/${admin.whatsapp}?text=${waMsg}` : '#support-admins-grid';

        return `
            <div class="cyber-card p-6 rounded-2xl border ${cardBorder} flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-300">
                <div class="absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-wider font-tech border ${accent}">
                    ${admin.badge}
                </div>
                <div>
                    <div class="flex items-center gap-3.5 mb-4">
                        <div class="w-14 h-14 rounded-2xl bg-slate-900/90 border ${isIsuka ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' : 'border-cyan-500/50 shadow-lg shadow-cyan-500/20'} flex items-center justify-center p-2 group-hover:scale-105 transition-transform flex-shrink-0">
                            <img src="${admin.avatar}" alt="${admin.name}" class="w-10 h-10 object-contain drop-shadow-[0_0_8px_${isIsuka ? 'rgba(245,158,11,0.5)' : 'rgba(0,229,255,0.5)'}]">
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h3 class="font-tech text-lg sm:text-xl font-bold text-white uppercase">${admin.name}</h3>
                                <span class="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Online
                                </span>
                            </div>
                            <p class="text-xs font-semibold ${isIsuka ? 'text-amber-400' : 'text-cyan-400'} mt-0.5">${admin.title || admin.role}</p>
                            <p class="text-[11px] text-slate-400 mt-0.5">${admin.experience}</p>
                            <div class="mt-2 flex items-center gap-2">
                                <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 flex items-center gap-1.5">
                                    <span class="text-emerald-400">📞</span> ${admin.phoneDisplay}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-5">
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-tech">Specialized Setup Areas:</span>
                        <ul class="space-y-1.5">
                            ${specialtiesHtml}
                        </ul>
                    </div>
                </div>

                <div class="pt-2">
                    <a href="${waUrl}" ${isLinked ? 'target="_blank" rel="noopener noreferrer"' : ''} class="w-full btn-cyber py-3 rounded-xl ${btnClass} font-bold text-xs sm:text-sm uppercase shadow-lg flex items-center justify-center gap-2 transition">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                        <span>${isLinked ? `WhatsApp මගින් සම්බන්ධ වන්න (${admin.phoneDisplay})` : 'Admin WhatsApp (Updating Soon)'}</span>
                    </a>
                </div>
            </div>
        `;
    }).join("");
}

// Render Streamer & Promo Videos
function initStreamerVideos() {
    const container = document.getElementById("streamer-videos-grid");
    if (!container) return;

    container.innerHTML = STREAMER_VIDEOS.map(video => {
        return `
            <div class="cyber-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between shadow-2xl group cursor-pointer" onclick="openVideoModal('${video.youtubeId}', '${video.title.replace(/'/g, "\\'")}')">
                <div class="relative aspect-video bg-slate-950 overflow-hidden">
                    <img src="https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg" onerror="this.src='assets/images/mobile-optimizer.jpg'" alt="${video.title}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 opacity-80">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div class="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-500 text-white flex items-center justify-center text-xl shadow-xl shadow-red-600/50 group-hover:scale-110 transition-all">
                            ▶
                        </div>
                    </div>
                    <div class="absolute top-2 left-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-black/70 text-cyan-400 border border-cyan-500/40 backdrop-blur-sm">
                            ${video.badge}
                        </span>
                    </div>
                    <div class="absolute bottom-2 right-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 text-white backdrop-blur-sm">
                            ${video.duration}
                        </span>
                    </div>
                </div>

                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-tech">
                            <span class="text-emerald-400 font-bold">${video.creator}</span>
                            <span>${video.views}</span>
                        </div>
                        <h4 class="font-tech text-base font-bold text-white line-clamp-2 uppercase leading-snug group-hover:text-cyan-400 transition-colors">
                            ${video.title}
                        </h4>
                        <p class="text-xs text-slate-400 mt-1 line-clamp-2">
                            ${video.description}
                        </p>
                    </div>

                    <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                        <span>Watch Video Preview</span>
                        <span class="group-hover:translate-x-1 transition-transform">➔</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function openVideoModal(youtubeId, title) {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");
    const titleEl = document.getElementById("video-modal-title");

    if (!modal || !iframe) return;

    if (titleEl) titleEl.innerText = title;
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0&disablekb=0&playsinline=1`;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeVideoModal() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");

    if (iframe) iframe.src = "";
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
}

// Category Tabs Filter
function initFilterTabs() {
    const tabs = document.querySelectorAll(".category-tab");
    const spotlight = document.getElementById("spotlight-banner");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const filter = tab.getAttribute("data-category") || "all";
            
            // Update active state visual styles on tabs
            tabs.forEach(t => {
                t.className = "category-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white transition";
            });
            tab.className = "category-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-cyan-500/50 bg-cyan-500/20 text-cyan-400 transition";

            // If user clicked PC, hide Mobile Optimizer spotlight banner to keep PC catalog uncluttered
            if (spotlight) {
                if (filter === "pc") {
                    spotlight.classList.add("hidden");
                } else {
                    spotlight.classList.remove("hidden");
                }
            }

            initProductsGrid(filter);
        });
    });
}

// Staff / Seller Status Indicator
function initStaffStatus() {
    const statusBadge = document.getElementById("seller-status-badge");
    const statusText = document.getElementById("seller-status-text");
    const statusDot = document.getElementById("seller-status-dot");

    if (statusBadge && statusText && statusDot) {
        statusBadge.className = "flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs text-emerald-400 font-medium";
        statusDot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse";
        statusText.innerText = "Seller Online • Instant 2-5 Min Delivery";
    }
}

// Open Product Details Modal
function openProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("product-details-modal");
    const content = document.getElementById("product-details-content");

    content.innerHTML = `
        <div class="relative">
            <button onclick="closeProductDetails()" class="absolute top-0 right-0 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition z-10">
                ✕
            </button>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-xl border border-slate-800 shadow-2xl mb-4">
                    <div class="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                        <h5 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Supported Environments</h5>
                        <div class="flex flex-wrap gap-1.5">
                            ${product.compatibility.map(c => `<span class="text-xs bg-slate-800 text-cyan-300 px-2.5 py-1 rounded border border-slate-700">${c}</span>`).join("")}
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <span class="inline-block px-2.5 py-0.5 rounded text-xs font-semibold border ${product.badgeColor} w-max mb-2">
                        ${product.badge}
                    </span>
                    <h3 class="text-2xl font-bold font-tech text-white uppercase mb-1">${product.name}</h3>
                    <p class="text-sm text-cyan-400 font-tech mb-4">${product.tagline}</p>
                    <p class="text-sm text-slate-300 mb-4 leading-relaxed">${product.description}</p>

                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Features & Capabilities:</h4>
                    <ul class="space-y-2 mb-6">
                        ${product.features.map(f => `<li class="flex items-start text-xs sm:text-sm text-slate-200"><span class="text-emerald-400 mr-2">✔</span> ${f}</li>`).join("")}
                    </ul>

                    <div class="mt-auto bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Available Packages:</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            ${product.pricing.map(p => `
                                <div class="bg-slate-900 p-2.5 rounded-lg border ${p.popular ? 'border-cyan-500/60 bg-cyan-950/20' : 'border-slate-800'} flex justify-between items-center">
                                    <span class="text-xs font-medium text-slate-200">${p.duration}</span>
                                    <span class="text-sm font-bold text-cyan-400">Rs. ${p.price.toLocaleString()}</span>
                                </div>
                            `).join("")}
                        </div>
                        <button onclick="closeProductDetails(); openCheckoutModal('${product.id}')" class="w-full btn-cyber py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                            <span>Proceed to Buy & Upload Slip</span>
                            <span>➔</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeProductDetails() {
    const modal = document.getElementById("product-details-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// Open Checkout Modal
function openCheckoutModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentSelectedProduct = product;
    // Default to popular plan or first plan
    currentSelectedPlan = product.pricing.find(p => p.popular) || product.pricing[0];
    uploadedSlipDataUrl = null;

    const modal = document.getElementById("checkout-modal");
    document.getElementById("checkout-product-name").innerText = product.name;
    document.getElementById("checkout-product-platform").innerText = product.platform;
    document.getElementById("checkout-product-thumb").src = product.image;

    renderPlanSelector(product);
    updateCheckoutPriceDisplay();

    // Reset form fields
    document.getElementById("customer-name").value = "";
    document.getElementById("customer-whatsapp").value = "";
    document.getElementById("customer-ref").value = "";
    document.getElementById("slip-file-input").value = "";
    document.getElementById("slip-preview-container").classList.add("hidden");
    document.getElementById("slip-dropzone-content").classList.remove("hidden");

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// Render Plan Selector Options inside Checkout Modal
function renderPlanSelector(product) {
    const container = document.getElementById("plan-selector-container");
    container.innerHTML = "";

    product.pricing.forEach((plan, idx) => {
        const isSelected = plan.duration === currentSelectedPlan.duration;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `p-3 rounded-xl border text-left transition flex justify-between items-center ${
            isSelected 
                ? "border-cyan-500 bg-cyan-950/40 text-white shadow-lg shadow-cyan-950/50" 
                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
        }`;
        btn.innerHTML = `
            <div>
                <div class="text-xs sm:text-sm font-bold">${plan.duration}</div>
                ${plan.popular ? '<span class="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded">POPULAR</span>' : ''}
            </div>
            <div class="text-sm sm:text-base font-bold font-gaming text-cyan-400">
                Rs. ${plan.price.toLocaleString()}
            </div>
        `;
        btn.onclick = () => {
            currentSelectedPlan = plan;
            renderPlanSelector(product);
            updateCheckoutPriceDisplay();
        };
        container.appendChild(btn);
    });
}

function updateCheckoutPriceDisplay() {
    const totalEl = document.getElementById("checkout-total-price");
    if (totalEl && currentSelectedPlan) {
        totalEl.innerText = `Rs. ${currentSelectedPlan.price.toLocaleString()} LKR`;
    }
}

// Slip Upload (Image or PDF) & Drag/Drop
function handleSlipFile(files) {
    if (!files || !files[0]) return;
    const file = files[0];

    // Validate size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
        showToast("File is too large! Maximum 10MB allowed.", "error");
        return;
    }

    uploadedSlipName = file.name;
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    uploadedSlipType = isPdf ? "pdf" : "image";

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedSlipDataUrl = e.target.result;

        const imgEl = document.getElementById("slip-preview-img");
        const pdfIcon = document.getElementById("slip-preview-pdf-icon");
        const nameEl = document.getElementById("slip-preview-filename");
        const typeEl = document.getElementById("slip-preview-type");

        if (nameEl) nameEl.innerText = file.name;

        if (isPdf) {
            if (imgEl) imgEl.classList.add("hidden");
            if (pdfIcon) pdfIcon.classList.remove("hidden");
            if (typeEl) typeEl.innerText = "Bank PDF Receipt Attached (Ready)";
        } else {
            if (imgEl) {
                imgEl.src = uploadedSlipDataUrl;
                imgEl.classList.remove("hidden");
            }
            if (pdfIcon) pdfIcon.classList.add("hidden");
            if (typeEl) typeEl.innerText = "Receipt Image Screenshot Attached (Ready)";
        }

        document.getElementById("slip-preview-container").classList.remove("hidden");
        document.getElementById("slip-dropzone-content").classList.add("hidden");
        showToast(isPdf ? "Bank PDF Receipt attached successfully!" : "Payment slip photo attached successfully!", "success");
    };
    reader.readAsDataURL(file);
}

function removeUploadedSlip() {
    uploadedSlipDataUrl = null;
    uploadedSlipType = "image";
    uploadedSlipName = "";
    document.getElementById("slip-file-input").value = "";
    document.getElementById("slip-preview-container").classList.add("hidden");
    document.getElementById("slip-dropzone-content").classList.remove("hidden");
}

// Copy to clipboard with visual toast
function copyToClipboard(text, label = "Details") {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }
    showToast(`Copied ${label} to clipboard!`, "success");
}

// Copy all bank details together (Bank Name, Account Name, Number, Branch)
function copyAllBankDetails() {
    const text = `Bank: People's Bank (මහජන බැංකුව)\nAccount Name: TD Paranahewa\nAccount Number: 032200306550753\nBranch: Colombo\n(LankaQR available on website for instant scan)`;
    copyToClipboard(text, "All Bank Details (නම, අංකය, ශාඛාව)");
}

// Toast notification helper
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    const bgClass = type === "success" 
        ? "bg-slate-900 border-emerald-500/50 text-emerald-300" 
        : type === "error" 
        ? "bg-slate-900 border-red-500/50 text-red-300" 
        : "bg-slate-900 border-cyan-500/50 text-cyan-300";

    toast.className = `p-3 rounded-xl border ${bgClass} shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-medium modal-enter max-w-sm backdrop-blur-md`;
    toast.innerHTML = `
        <span>${type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️"}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Sri Lanka Valid Phone Number Verifier (070/071/072/074/075/076/077/078)
function isValidSriLankanPhone(phone) {
    if (!phone) return false;
    const cleaned = phone.replace(/[\s\-\+]/g, "");

    let local10 = "";
    if (cleaned.startsWith("07") && cleaned.length === 10) {
        local10 = cleaned;
    } else if (cleaned.startsWith("947") && cleaned.length === 11) {
        local10 = "0" + cleaned.substring(2);
    } else if (cleaned.startsWith("7") && cleaned.length === 9) {
        local10 = "0" + cleaned;
    } else {
        return false;
    }

    const prefix = local10.substring(0, 3);
    const validPrefixes = ["070", "071", "072", "074", "075", "076", "077", "078"];
    if (!validPrefixes.includes(prefix)) return false;

    // Reject fake repeated digits (e.g., 0777777777, 0700000000)
    const suffix = local10.substring(3);
    if (/^(\d)\1+$/.test(suffix)) return false;
    if (suffix === "1234567" || suffix === "7654321") return false;

    return true;
}

// ==========================================
// 🛡️ ANTI-ABUSE & CYBER CRIME TRAP SYSTEM
// ==========================================

// Check if current device is permanently blacklisted
function checkForBannedUser() {
    const isBanned = localStorage.getItem("lukzi_banned_user");
    if (isBanned === "true") {
        const modal = document.getElementById("cyber-trap-modal");
        if (modal) {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            document.body.style.overflow = "hidden";
            const caseIdEl = document.getElementById("trap-case-id");
            if (caseIdEl) caseIdEl.innerText = localStorage.getItem("lukzi_ban_case_id") || "CCID-LK-SECURITY";
            const ipEl = document.getElementById("trap-ip");
            if (ipEl) ipEl.innerText = localStorage.getItem("lukzi_ban_ip") || "RECORDED";
            const timeEl = document.getElementById("trap-timestamp");
            if (timeEl) timeEl.innerText = localStorage.getItem("lukzi_ban_timestamp") || new Date().toLocaleString();

            // Redirect banned offender to Police Stations Map
            setTimeout(() => {
                window.location.href = "https://police.lk/police-stations-map/";
            }, 3000);
        }
    }
}

// Detect Sinhala / Singlish abusive, vulgar, defamatory words
function containsAbusiveContent(text) {
    if (!text || typeof text !== "string") return false;
    const clean = text.toLowerCase()
        .replace(/[\s\-_.,/\\!@#$%^&*()+=~`'"[\]{}|:;<>?]+/g, "")
        .replace(/0/g, "o")
        .replace(/1/g, "i")
        .replace(/3/g, "e")
        .replace(/4/g, "a")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/8/g, "b");

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

// Play harmless siren sound using standard Web Audio API
function playSirenTone() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(450, audioCtx.currentTime);
        for (let i = 0; i < 6; i++) {
            osc.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + (i * 0.4) + 0.2);
            osc.frequency.exponentialRampToValueAtTime(450, audioCtx.currentTime + (i * 0.4) + 0.4);
        }
        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 2.5);
    } catch (e) {
        // Audio playback restricted
    }
}

// Trigger Fullscreen Cyber Crime Warning, play siren, and auto-open Police Map
async function triggerCyberCrimeTrap(data, serverCaseId, serverIp) {
    playSirenTone();

    const caseId = serverCaseId || `CCID-LK-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });

    // Mark permanent ban on offender's device
    localStorage.setItem("lukzi_banned_user", "true");
    localStorage.setItem("lukzi_ban_case_id", caseId);
    localStorage.setItem("lukzi_ban_timestamp", timestamp);

    // Close checkout and display full-screen trap modal
    closeCheckoutModal();
    const trapModal = document.getElementById("cyber-trap-modal");
    if (trapModal) {
        trapModal.classList.remove("hidden");
        trapModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }

    const caseIdEl = document.getElementById("trap-case-id");
    if (caseIdEl) caseIdEl.innerText = caseId;
    const timeEl = document.getElementById("trap-timestamp");
    if (timeEl) timeEl.innerText = timestamp;
    const deviceEl = document.getElementById("trap-device");
    if (deviceEl) deviceEl.innerText = `${navigator.platform || 'Device'} • ${navigator.userAgent.slice(0, 32)}...`;

    // 🚨 AUTO-OPEN POLICE STATIONS MAP (police.lk) WITH 5s COUNTDOWN
    let secondsLeft = 5;
    const countdownEl = document.getElementById("trap-countdown");
    if (countdownEl) countdownEl.innerText = secondsLeft;

    // Try opening popup tab immediately
    try {
        window.open("https://police.lk/police-stations-map/", "_blank");
    } catch (e) {}

    const countdownTimer = setInterval(() => {
        secondsLeft--;
        if (countdownEl) countdownEl.innerText = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(countdownTimer);
            // Guaranteed redirection (cannot be blocked by browser popup blockers)
            window.location.href = "https://police.lk/police-stations-map/";
        }
    }, 1000);

    // Fetch real IP & ISP
    let detectedIp = serverIp || "112.134.82.14";
    let ispGeo = "Sri Lanka Telecom / Cellular";
    if (!serverIp) {
        try {
            const ipRes = await fetch("https://api.ipify.org?format=json");
            const ipJson = await ipRes.json();
            if (ipJson && ipJson.ip) detectedIp = ipJson.ip;
        } catch (err) {}
    }

    try {
        const geoRes = await fetch(`https://ipapi.co/${detectedIp}/json/`);
        const geoJson = await geoRes.json();
        if (geoJson && (geoJson.org || geoJson.city)) {
            ispGeo = `${geoJson.org || 'SL Broadband'} (${geoJson.city || 'Western'}, LK)`;
        }
    } catch (e) {}

    localStorage.setItem("lukzi_ban_ip", detectedIp);
    const ipEl = document.getElementById("trap-ip");
    if (ipEl) ipEl.innerText = detectedIp;
    const ispEl = document.getElementById("trap-isp");
    if (ispEl) ispEl.innerText = ispGeo;

    // If server already handled alert, don't duplicate dispatch
    if (!serverCaseId) {
        try {
            fetch("/.netlify/functions/notify-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    isAbuseTrap: true,
                    incidentId: caseId,
                    customerName: data.name,
                    customerWhatsApp: data.whatsapp,
                    referenceNo: data.ref,
                    clientIp: detectedIp,
                    geoInfo: ispGeo,
                    deviceInfo: `${navigator.platform} | ${navigator.userAgent}`,
                    slipImage: data.slipDataUrl
                })
            });
        } catch (e) {
            console.error("Evidence dispatch error:", e);
        }
    }
}

// Order Submission & Verification Pipeline
function submitOrderSlip(event) {
    if (event) event.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const whatsapp = document.getElementById("customer-whatsapp").value.trim();
    const ref = document.getElementById("customer-ref").value.trim() || "N/A";

    if (!name) {
        showToast("Please enter your name / gamer tag!", "error");
        document.getElementById("customer-name").focus();
        return;
    }

    // 🚨 ANTI-ABUSE TRAP TRIGGER: Check for vulgar/abusive words
    if (containsAbusiveContent(name) || containsAbusiveContent(ref) || containsAbusiveContent(whatsapp)) {
        triggerCyberCrimeTrap({
            name: name,
            whatsapp: whatsapp,
            ref: ref,
            slipDataUrl: uploadedSlipDataUrl
        });
        return;
    }

    // Strict Sri Lankan Phone Verification
    if (!isValidSriLankanPhone(whatsapp)) {
        showToast("කරුණාකර වලංගු ශ්‍රී ලාංකික WhatsApp අංකයක් ඇතුළත් කරන්න (උදා: 07XXXXXXXX)!", "error");
        document.getElementById("customer-whatsapp").focus();
        return;
    }

    if (!uploadedSlipDataUrl) {
        showToast("Please upload your Bank Slip / EzCash Receipt photo or PDF!", "error");
        return;
    }

    // Generate Unique Order ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderId = `LKZ-${randomNum}`;

    // Pre-generate a unique VIP License Key
    const generatedKey = `LKZ-${currentSelectedProduct.id.substring(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
        orderId: orderId,
        productId: currentSelectedProduct.id,
        productName: currentSelectedProduct.name,
        planDuration: currentSelectedPlan.duration,
        amount: currentSelectedPlan.price,
        customerName: name,
        customerWhatsApp: whatsapp,
        referenceNo: ref,
        slipImage: uploadedSlipDataUrl,
        slipType: uploadedSlipType, // "image" or "pdf"
        slipName: uploadedSlipName || "receipt",
        timestamp: new Date().toISOString(),
        status: "pending", // pending -> approved -> rejected
        approvedKey: generatedKey,
        downloadUrl: TELEGRAM_CONFIG.channelInvite,
        vipGroupUrl: TELEGRAM_CONFIG.vipGroupLink
    };

    // Save to LocalStorage Orders Collection (accessible across tabs/refreshes)
    saveOrder(newOrder);

    // Save as persistent Active Order for this browser/device
    localStorage.setItem("lukzi_active_order", JSON.stringify(newOrder));
    checkForActiveOrder();
    renderTrackOrderSection();

    // 🚀 DISPATCH SLIP & DETAILS DIRECTLY TO TELEGRAM CHANNEL
    sendOrderToTelegramChannel(newOrder);

    // Close checkout and open Order Verification Modal
    closeCheckoutModal();
    openOrderStatusModal(orderId);
}

// Convert Base64 dataURL to binary Blob for Telegram upload
function dataURItoBlob(dataURI) {
    try {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    } catch (e) {
        console.error("Blob convert error", e);
        return null;
    }
}

// Secure Telegram Bot Dispatch via Serverless Function / Local Backend
function sendOrderToTelegramChannel(order) {
    try {
        fetch("/.netlify/functions/notify-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result => {
            if (result && result.isAbuse) {
                // 🚨 SERVER DETECTED ABUSE: TRIGGER FULL CYBER TRAP IMMEDIATELY!
                closeOrderStatusModal();
                localStorage.removeItem("lukzi_active_order");
                const activeBanner = document.getElementById("active-order-banner");
                if (activeBanner) activeBanner.classList.add("hidden");

                triggerCyberCrimeTrap({
                    name: order.customerName,
                    whatsapp: order.customerWhatsApp,
                    ref: order.referenceNo,
                    slipDataUrl: order.slipImage
                }, result.incidentId, result.clientIp);
                return;
            }
            if (result && result.success) {
                showToast("Payment receipt submitted! Verifying your order...", "success");
            }
        })
        .catch(err => {
            console.error("Order notify dispatch error:", err);
        });
    } catch (err) {
        console.error("Order dispatch error:", err);
    }
}

// Persistent Active Order Check (Survives Refresh, Browser Close, Tab Crashes)
function checkForActiveOrder() {
    const banner = document.getElementById("active-order-banner");
    if (!banner) return;

    let activeOrder = null;
    try {
        activeOrder = JSON.parse(localStorage.getItem("lukzi_active_order") || "null");
    } catch(e) {}

    if (!activeOrder) {
        banner.classList.add("hidden");
        return;
    }

    // Refresh order data from master list if updated by admin
    const orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
    const freshOrder = orders.find(o => o.orderId === activeOrder.orderId) || activeOrder;

    document.getElementById("banner-order-id").innerText = freshOrder.orderId;
    document.getElementById("banner-order-product").innerText = freshOrder.productName;

    const badge = document.getElementById("banner-order-status-badge");
    banner.className = "sticky top-0 z-50 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white font-bold px-4 py-2.5 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm";
    badge.className = "px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono bg-white text-emerald-800 font-bold";
    badge.innerText = "✔ Slip Received • WhatsApp Delivery";

    banner.classList.remove("hidden");
}

function openActiveOrderModal() {
    const activeOrder = JSON.parse(localStorage.getItem("lukzi_active_order") || "null");
    if (activeOrder) {
        openOrderStatusModal(activeOrder.orderId);
    }
}

function dismissActiveOrderBanner() {
    const banner = document.getElementById("active-order-banner");
    if (banner) banner.classList.add("hidden");
}

// Save order helper
function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
    const existingIdx = orders.findIndex(o => o.orderId === order.orderId);
    if (existingIdx >= 0) {
        orders[existingIdx] = order;
    } else {
        orders.unshift(order);
    }
    localStorage.setItem("lukzi_orders", JSON.stringify(orders));
}

// Order Status & Confirmation Modal (WhatsApp Direct Delivery Model)
function openOrderStatusModal(orderId) {
    const modal = document.getElementById("order-status-modal");
    if (!modal) return;

    const orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
    const order = orders.find(o => o.orderId === orderId);

    if (order) {
        const idEl = document.getElementById("order-modal-id");
        const idCopyEl = document.getElementById("order-modal-id-copy");
        const prodEl = document.getElementById("order-modal-product");
        const amtEl = document.getElementById("order-modal-amount");
        const phoneEl = document.getElementById("order-modal-phone");

        if (idEl) idEl.innerText = order.orderId;
        if (idCopyEl) idCopyEl.innerText = order.orderId;
        if (prodEl) prodEl.innerText = `${order.productName} (${order.planDuration})`;
        if (amtEl) amtEl.innerText = `Rs. ${Number(order.amount).toLocaleString()} LKR`;
        if (phoneEl) phoneEl.innerText = order.customerWhatsApp;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeOrderStatusModal() {
    const modal = document.getElementById("order-status-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
    checkForActiveOrder();
    renderTrackOrderSection();
}

// Automatically Render Active Order Tracker Card (WhatsApp Direct Model)
function renderTrackOrderSection() {
    const container = document.getElementById("auto-order-tracker-card");
    if (!container) return;

    let activeOrder = null;
    try {
        activeOrder = JSON.parse(localStorage.getItem("lukzi_active_order") || "null");
    } catch(e) {}

    // Fallback: If no lukzi_active_order, check if any order exists in lukzi_orders
    if (!activeOrder) {
        const orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");
        if (orders.length > 0) {
            activeOrder = orders[0];
            localStorage.setItem("lukzi_active_order", JSON.stringify(activeOrder));
        }
    }

    const manualSearch = document.getElementById("manual-order-search-box");

    if (!activeOrder) {
        // No order placed yet on this device
        container.innerHTML = `
            <div class="cyber-card p-6 sm:p-8 rounded-2xl border border-slate-800 text-center max-w-xl mx-auto shadow-xl">
                <div class="w-14 h-14 mx-auto rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl mb-3">
                    🛒
                </div>
                <h3 class="font-tech text-base sm:text-lg font-bold text-white uppercase mb-1">
                    ඔබ මෙම Device එකෙන් තවමත් ඇණවුමක් දමා නැත
                </h3>
                <p class="text-xs text-slate-400 mb-5">
                    ඔබට අවශ්‍ය Product එක තෝරාගෙන Payment Slip එක Submit කළ පසු, ඔබගේ Order Status සහ විස්තර මෙතැනින් ස්වයංක්‍රීයව බලාගත හැක.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-3">
                    <a href="#products" class="btn-cyber px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 font-bold text-xs text-white shadow-lg flex items-center gap-2">
                        <span>⚡ Products බලන්න (Shop Now)</span>
                    </a>
                    <button onclick="toggleManualOrderLookup(true)" class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold transition">
                        <span>🔍 වෙනත් Order එකක් සොයන්න</span>
                    </button>
                </div>
            </div>
        `;
        if (manualSearch) manualSearch.classList.add("hidden");
        return;
    }

    container.innerHTML = `
        <div class="cyber-card p-5 sm:p-7 rounded-2xl border border-emerald-500/50 text-center max-w-xl mx-auto shadow-2xl shadow-emerald-950/40 transition-all">
            <!-- Header -->
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span class="text-xs font-bold font-tech uppercase tracking-wider text-emerald-400">
                        ඔබගේ සක්‍රීය ඇණවුම (Active Order)
                    </span>
                </div>
                <span class="text-[10px] text-slate-400 font-mono">
                    ${activeOrder.timestamp ? new Date(activeOrder.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Live'}
                </span>
            </div>

            <!-- Order Details Grid -->
            <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-left mb-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                    <span class="text-[10px] text-slate-400 uppercase font-tech block">Order ID</span>
                    <div class="flex items-center gap-1.5 mt-0.5">
                        <span class="font-mono font-bold text-cyan-400 text-sm">${activeOrder.orderId}</span>
                        <button onclick="copyToClipboard('${activeOrder.orderId}', 'Order ID')" class="text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800" title="Copy ID">📋</button>
                    </div>
                </div>
                <div>
                    <span class="text-[10px] text-slate-400 uppercase font-tech block">Amount Paid</span>
                    <span class="font-gaming font-bold text-white text-sm mt-0.5 block">Rs. ${Number(activeOrder.amount).toLocaleString()} LKR</span>
                </div>
                <div class="col-span-2 border-t border-slate-800 pt-2">
                    <span class="text-[10px] text-slate-400 uppercase font-tech block">Product & Plan</span>
                    <span class="font-bold text-slate-200 mt-0.5 block truncate">${activeOrder.productName} <span class="text-cyan-400">(${activeOrder.planDuration})</span></span>
                </div>
                <div class="col-span-2 border-t border-slate-800 pt-2">
                    <span class="text-[10px] text-slate-400 uppercase font-tech block">Registered WhatsApp</span>
                    <span class="font-mono text-emerald-300 font-bold mt-0.5 block">${activeOrder.customerWhatsApp}</span>
                </div>
            </div>

            <!-- Delivery Notice -->
            <div class="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-left">
                <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping flex-shrink-0"></span>
                <div>
                    <div class="text-xs font-bold text-emerald-300 uppercase font-tech">Slip Received • 2-5 Min WhatsApp Delivery</div>
                    <div class="text-[11px] text-slate-300 mt-0.5">ඔබගේ Payment Slip එක Seller වෙත ලැබී ඇත. විනාඩි 2-5ක් ඇතුළත ඔබ ලබාදුන් WhatsApp අංකයට VIP License Key එක සහ Files එවනු ලැබේ.</div>
                </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2">
                <button onclick="copyToClipboard('${activeOrder.orderId}', 'Order ID')" class="flex-1 btn-cyber py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 transition">
                    <span>📋 Copy Order ID</span>
                </button>
                <button onclick="openOrderStatusModal('${activeOrder.orderId}')" class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition">
                    <span>🔍 විස්තර බලන්න</span>
                </button>
                <button onclick="refreshActiveOrderTracker()" class="px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition" title="Refresh">
                    <span>🔄</span>
                </button>
            </div>

            <!-- Toggle for Lookup Another Order -->
            <div class="mt-4 pt-3 border-t border-slate-800/80">
                <button onclick="toggleManualOrderLookup()" class="text-xs text-cyan-400 hover:underline flex items-center justify-center gap-1 mx-auto">
                    <span>🔍 වෙනත් Order ID හෝ දුරකථන අංකයකින් පරීක්ෂා කරන්න</span>
                </button>
            </div>
        </div>
    `;

    if (manualSearch) manualSearch.classList.add("hidden");
}

function toggleManualOrderLookup(forceOpen = false) {
    const box = document.getElementById("manual-order-search-box");
    if (!box) return;
    if (forceOpen) {
        box.classList.remove("hidden");
    } else {
        box.classList.toggle("hidden");
    }
    if (!box.classList.contains("hidden")) {
        const input = document.getElementById("track-order-input");
        if (input) input.focus();
    }
}

function refreshActiveOrderTracker() {
    renderTrackOrderSection();
    checkForActiveOrder();
    showToast("Order status refreshed!", "info");
}

// Track Existing Order Button (By Phone Number or Order ID)
function initCheckExistingOrder() {
    const input = document.getElementById("track-order-input");
    const btn = document.getElementById("track-order-btn");

    if (btn && input) {
        btn.onclick = () => {
            const rawQuery = input.value.trim();
            if (!rawQuery) {
                showToast("Please enter your Order ID or WhatsApp Number!", "error");
                return;
            }

            const cleanQuery = rawQuery.replace(/\D/g, "");
            const orders = JSON.parse(localStorage.getItem("lukzi_orders") || "[]");

            const found = orders.find(o => {
                const matchId = o.orderId.toLowerCase() === rawQuery.toLowerCase();
                const oCleanPhone = (o.customerWhatsApp || "").replace(/\D/g, "");
                const matchPhone = cleanQuery.length >= 7 && oCleanPhone.includes(cleanQuery);
                return matchId || matchPhone;
            });

            if (found) {
                // Save found order as active order too
                localStorage.setItem("lukzi_active_order", JSON.stringify(found));
                checkForActiveOrder();
                renderTrackOrderSection();
                openOrderStatusModal(found.orderId);
                showToast(`Found Order: ${found.orderId}`, "success");
            } else {
                showToast("Order not found! Please check your ID or phone number.", "error");
            }
        };
    }
}

// Image Zoom / Preview Modal
function previewImage(src, title) {
    const modal = document.getElementById("image-preview-modal");
    const img = document.getElementById("image-preview-img");
    const caption = document.getElementById("image-preview-title");

    if (!modal || !img) return;

    const actualSrc = (src && src.includes("peoples-bank-qr") && window.LANKA_QR_IMAGE) 
        ? window.LANKA_QR_IMAGE 
        : src;

    img.src = actualSrc;
    img.onerror = function() {
        if (src && src.includes("peoples-bank-qr") && window.LANKA_QR_IMAGE) {
            this.src = window.LANKA_QR_IMAGE;
        } else {
            this.src = "assets/images/lukzi-logo.jpg";
        }
    };

    if (caption) caption.innerText = title;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeImagePreview() {
    const modal = document.getElementById("image-preview-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        if (questionBtn && answer) {
            questionBtn.addEventListener("click", () => {
                const isOpen = !answer.classList.contains("hidden");
                // Close all
                document.querySelectorAll(".faq-answer").forEach(a => a.classList.add("hidden"));
                document.querySelectorAll(".faq-icon").forEach(i => i.style.transform = "rotate(0deg)");

                if (!isOpen) {
                    answer.classList.remove("hidden");
                    if (icon) icon.style.transform = "rotate(180deg)";
                }
            });
        }
    });
}
