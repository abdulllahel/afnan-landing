/* Page copy shared by every direction. */
window.ENROLL_URL = 'https://afnanmahmud.com/ai-for-developers';
window.C = {
  price: '৳990', refPrice: '৳10,000', saved: '৳9,010',
  nav: [['hero','Overview'],['build','Projects'],['workflow','Learning Path'],['curriculum','Curriculum'],['instructor','Instructor'],['reviews','Reviews'],['faq','FAQ']],
  hero: {
    eyebrow: 'AI FOR DEVELOPERS · বাংলায় রেকর্ডেড কোর্স',
    title: 'কোডিং না জেনেও AI দিয়ে নিজের Website + Mobile App বানান',
    sub: 'AI-এর সাহায্যে idea থেকে planning, design, development, deployment এবং app publishing পর্যন্ত পুরো workflow শিখুন — নিজের সময়ে, ধাপে ধাপে।',
    side: 'একদম জিরো থেকে শুরু, Play Store পর্যন্ত।',
    side2: 'সহজ বাংলায় ধাপে ধাপে শিখবেন, কীভাবে AI-কে দিয়ে কাজ করিয়ে নিজের website আর mobile app বানাবেন, নিজের domain-এ live করবেন এবং Play Store/App Store-এ publish করবেন।',
    chips: ['Recorded course','Beginner-friendly','8 Modules','40+ Lessons','3 Real Projects','Lifetime Access','বাংলা ভাষা'],
    bubble: 'চলুন, অ্যাপটা বানাই!'
  },
  facts: [
    ['2500+','Students'],['7-Day','Money Back'],['Recorded','নিজের সময়ে'],['Lifetime','Access'],
    ['8','Modules'],['40+','Lessons'],['3','Real Projects'],['Beginner','Friendly']
  ],
  build: {
    title: 'কোর্স শেষে আপনি নিজেই যা বানাতে পারবেন',
    sub: 'শুধু AI tools ব্যবহার করা নয় — নিজের website, app এবং production workflow তৈরি করতে শিখবেন।',
    outcomes: [
      {k:'Build Websites', d:'AI দিয়ে login, database আর admin panel সহ পুরো একটা website।', tags:['Frontend','Backend','Database','Authentication','Admin panel','Responsive UI']},
      {k:'Build Mobile Apps', d:'একই code থেকে Android আর iPhone, দুটোর জন্যই app।', tags:['React Native','Android','iOS','Shared codebase','Release prep']},
      {k:'Debug & Secure', d:'Error আসলে AI দিয়ে খুঁজে ঠিক করা, আর app-কে hack থেকে নিরাপদ রাখা।', tags:['Troubleshooting','AI debugging','Code review','Security checks']},
      {k:'Deploy & Publish', d:'নিজের domain-এ website live, আর Play Store/App Store-এ app publish।', tags:['Domain','VPS deploy','CI/CD','Play Store','App Store']}
    ],
    projectsTitle: '৩টি real project',
    projectsNote: '',
    projects: [
      {k:'Project 01', t:'Full-stack Website', d:'Login, database আর admin panel সহ AI দিয়ে বানানো পূর্ণ website।', plat:'Web', feats:['Authentication','Admin panel','CRUD + validation','Responsive UI'], tech:['Next.js','Node.js','MongoDB'], mods:'Module 02–05', out:'Live website'},
      {k:'Project 02', t:'Production SaaS', d:'Dashboard, security hardening আর production-ready codebase।', plat:'Web · SaaS', feats:['User dashboard','Login / signup','Security hardening','CI/CD deploy'], tech:['React','Node.js','GitHub Actions'], mods:'Module 06–07', out:'Deployed SaaS'},
      {k:'Project 03', t:'Mobile App', d:'React Native দিয়ে Android ও iOS app, store submission পর্যন্ত।', plat:'Android · iOS', feats:['React Native screens','Device features','APK / AAB build','Store submission'], tech:['React Native','Play Store','App Store'], mods:'Module 08', out:'Store-ready app'}
    ]
  },
  audience: {
    title: 'এই কোর্স কাদের জন্য',
    sub: 'নিজেকে চিনে নিন — শুরু করতে কোনো আগের coding অভিজ্ঞতা লাগবে না।',
    items: [
      {n:'01', k:'Beginner ও Student', d:'Coding একদম না জানলেও শুরু করতে পারবেন। কম্পিউটার চালাতে পারলেই যথেষ্ট।', tags:['No coding needed','Step-by-step'], pts:['Guided learning sequence','Basic development concepts থেকে শুরু']},
      {n:'02', k:'Developer', d:'AI দিয়ে একই কাজ অনেক কম সময়ে, আরও ভালোভাবে করতে চান।', tags:['Claude Code','Cursor','AntiGravity'], pts:['AI-assisted productivity','Real development workflow']},
      {n:'03', k:'Job Holder ও Career Switcher', d:'চাকরির পাশাপাশি নতুন skill, নিজের app, বা tech career-এ আসতে চান।', tags:['Real projects','Client ready'], pts:['Flexible study schedule','Portfolio-oriented learning']},
      {n:'04', k:'Freelancer ও Entrepreneur', d:'Client project, MVP বা software-based business idea নিয়ে কাজ করতে চান।', tags:['MVP','Deployment'], pts:['Product deployment শিখবেন','নিজের সময়ে শিখুন']}
    ],
    note: 'প্রয়োজন: একটি কম্পিউটার ও internet connection।'
  },
  approach: {
    title: 'শেখা কেন কঠিন লাগে — আর AI-first পথ কী',
    sub: 'AI code লিখে দেয়, কিন্তু requirement, code quality, security আর deployment বোঝার দায়িত্ব আপনারই।',
    old: ['আলাদা আলাদা অনেক tool আলাদাভাবে শেখা','পুরোটা হাতে code লেখা','Setup আর debugging-এ অনেক সময়','ছড়ানো tutorial, কোনো ধারাবাহিকতা নেই','Frontend, backend আর deploy জোড়া লাগানো কঠিন'],
    neu: ['AI-এর সাথে কথা বলে feature plan করা','AI assistant দিয়ে প্রথম code তৈরি','Code review ও refine আপনি করবেন','AI দিয়ে debug, আপনি যাচাই করবেন','Idea থেকে launch পর্যন্ত একটাই workflow'],
    steps: [['Idea','সমস্যা বুঝুন'],['Plan','PRD ও API'],['Code','AI লিখবে'],['Review','আপনি দেখবেন'],['Live','Deploy ও publish']],
    caveat: 'AI আপনার জায়গায় চিন্তা করে না — তাই এই কোর্সে code review, testing আর security-ও শেখানো হয়।'
  },
  workflow: {
    title: 'যে নতুন Workflow-তে আপনি কাজ শিখবেন',
    lead: 'You design. AI builds. You control.',
    sub: 'কী বানাবেন আর সেটা কেমন হবে, তা ঠিক করবেন আপনি। Code লেখা, ভুল খোঁজা আর ঠিক করার কাজ করবে AI, আপনি দেখে নেবেন।',
    stages: [
      {n:'01', k:'Idea', mod:'Module 01–02', d:'সমস্যা বুঝুন এবং আইডিয়া তৈরি করুন।', pts:['AI দিয়ে SaaS idea generate আর validate','AI-first mindset: তুমি architect, AI builder'], tools:['Gemini','Claude'], you:'আপনি ঠিক করবেন', out:'Defined product idea'},
      {n:'02', k:'Plan', mod:'Module 02', d:'পরিকল্পনা করুন এবং প্রয়োজনীয়তা নির্ধারন করুন।', pts:['Feature planning আর PRD (requirements doc) লেখা','REST API structure আর contract design'], tools:['Gemini','AntiGravity'], you:'আপনি ঠিক করবেন', out:'Requirements & technical plan'},
      {n:'03', k:'Design', mod:'Module 02–03', d:'UI/UX এবং system architecture ডিজাইন করুন।', pts:['ফ্রি AI tool দিয়ে System Design','Gemini দিয়ে Database Schema design','Responsive আর mobile-first UI design'], tools:['Gemini','Claude Code'], you:'আপনি ঠিক করবেন', out:'Interface & architecture'},
      {n:'04', k:'Code', mod:'Module 03–04', d:'AI আপনার জন্য code তৈরি করবে।', pts:['Claude Code দিয়ে reusable UI component','Robust API আর backend logic scratch থেকে','Frontend আর backend connect'], tools:['Claude Code','Cursor','AntiGravity'], you:'AI লিখবে, আপনি review করবেন', out:'Working application'},
      {n:'05', k:'Debug', mod:'Module 05–06', d:'AI code test করবে এবং bug ঠিক করবে।', pts:["The 'Error Loop': AI error confidently fix",'Error log আর stack trace পড়া','Security hardening: app যেন কেউ hack করতে না পারে'], tools:['Claude Code','GitHub'], you:'AI ঠিক করবে, আপনি যাচাই করবেন', out:'Improved & tested build'},
      {n:'06', k:'Deploy', mod:'Module 07', d:'সবকিছু প্রস্তুত করে production এ পাঠান।', pts:['VPS/AWS এ live server এ deploy','Environment variable আর production config','GitHub Actions দিয়ে CI/CD automation'], tools:['VPS','GitHub Actions'], you:'আপনি live করবেন', out:'Live hosted website'},
      {n:'07', k:'Launch', mod:'Module 08', d:'আপনার প্রোডাক্ট এখন ব্যবহারকারীর জন্য প্রস্তুত!', pts:['Google Play Store এ app publish','Apple App Store এ app publish','Launch এর পর update, analytics আর growth'], tools:['Play Store','App Store'], you:'আপনার প্রোডাক্ট live', out:'Release-ready application'}
    ]
  },
  stack: {
    title: 'Your AI Dev Stack.',
    note: 'আগে থেকে এগুলোর কোনোটাই জানতে হবে না, সব শুরু থেকে দেখানো হবে। Tool-এর free tier ও policy বদলাতে পারে; hosting, domain ও app-store developer account আলাদা খরচ।',
    ai: [
      {k:'Cursor', d:'AI code editor', fit:'Code · Debug', mod:'Module 01, 03', practice:'Cursor setup করে AI-built-in editor-এ কাজ করা'},
      {k:'Antigravity', d:'Agentic workflow', fit:'Plan · Code', mod:'Module 01, 02, 04', practice:'Agentic workflow-এর basics আর project scaffold'},
      {k:'Claude Code', d:'Terminal-এর AI agent', fit:'Design · Code · Debug', mod:'Module 01, 03, 05', practice:'Reusable UI component আর error fixing'},
      {k:'Gemini', d:'Free tier · DB design', fit:'Idea · Plan · Design', mod:'Module 01, 02, 04', practice:'Database schema আর optimization'}
    ],
    dev: [
      {k:'JavaScript / TypeScript', d:'ভাষা', fit:'Code'},{k:'React / Next.js', d:'Frontend', fit:'Code · Design'},
      {k:'Node.js', d:'Backend', fit:'Code'},{k:'MongoDB', d:'Database', fit:'Plan · Code'},
      {k:'React Native', d:'Android + iOS app', fit:'Launch'},{k:'Git / GitHub', d:'Version control', fit:'Debug · Deploy'}
    ]
  },
  curriculum: {
    title: 'কোর্স কারিকুলাম', badge: '৮ মডিউল · ৪০+ লেসন', head: '৮টি Module · ৪০+ Lessons — Zero থেকে Live App',
    modules: [
      {n:'01', t:'The Modern AI Dev Stack Setup', o:'Tools, AI-first workflow, development setup', tags:['Cursor','Claude'], tools:'Cursor, Claude Code, Gemini, Antigravity', out:'Environment সেটআপ করে AI-assisted development-এর দায়িত্ব বোঝা।', topics:['AI-first mindset: তুমি architect, AI builder','Cursor IDE setup: AI built-in code editor','Node, npm, Git আর dev environment তৈরি','Claude Code: terminal এর AI agent','Gemini free tier integration','AntiGravity agentic workflow এর basics','সব ফ্রি tool দিয়ে pro-level environment']},
      {n:'02', t:'Project Architecture & DB Design', o:'Idea → PRD → System Design → Database → API', tags:['PRD','DB'], tools:'Gemini, Antigravity', out:'ব্যবহারযোগ্য product ও technical implementation plan তৈরি।', topics:['AI দিয়ে SaaS idea generate আর validate','Feature planning আর PRD (requirements doc) লেখা','ফ্রি AI tool দিয়ে System Design','Gemini দিয়ে Database Schema design','REST API structure আর contract design','AntiGravity দিয়ে project base scaffold']},
      {n:'03', t:'Frontend Generation with Claude', o:'React / Next.js + AI-powered UI development', tags:['UI','React'], tools:'Claude Code, Cursor', out:'কার্যকর responsive frontend তৈরি।', topics:['React/Next.js foundations AI এর সাথে','Claude Code দিয়ে reusable UI component','Real-time UI generate-preview-refine loop','Responsive আর mobile-first UI design','State management আর form automation','UI bug fixing আর visual polish']},
      {n:'04', t:'Backend, Database & Logic Mastery', o:'API, CRUD, business logic, authentication', tags:['API','Auth'], tools:'Node.js, MongoDB, Gemini, Antigravity', out:'Application-কে functional backend service-এর সাথে যুক্ত করা।', topics:['Robust API আর backend logic scratch থেকে','Database integration আর full CRUD','Gemini দিয়ে database optimization','Frontend আর backend connect','Business logic, validation আর error handling','AntiGravity দিয়ে fast backend development']},
      {n:'05', t:'Debugging & Version Control (GitHub)', o:'Errors, debugging, refactoring, version control', tags:['Bug','Git'], tools:'Claude Code, Git, GitHub', out:'Error diagnose করা এবং code change দায়িত্বশীলভাবে manage করা।', topics:["The 'Error Loop': AI error confidently fix",'Error log আর stack trace পড়া','AI কে effective feedback দিয়ে fast fix','Git আর GitHub fundamentals','AI project এর জন্য version control workflow','AI দিয়ে code refactoring']},
      {n:'06', t:'Building the Production SaaS', o:'Security, dashboard, production-ready code', tags:['SaaS','Secure'], tools:'Antigravity, Gemini, Claude Code', out:'Production-এর গুরুত্বপূর্ণ বিষয়সহ একটি পূর্ণাঙ্গ application জোড়া লাগানো।', topics:['AntiGravity + Gemini + Claude একসাথে orchestrate','User authentication system (login/signup)','User dashboard বানানো','Zero থেকে production-ready codebase','Security hardening: app যেন কেউ hack করতে না পারে','App কে mobile এর জন্য prepare করা','Final polish আর UX improvement']},
      {n:'07', t:'Live Server Deployment & Career', o:'VPS, CI/CD, portfolio, job & freelancing', tags:['VPS','Live'], tools:'VPS/AWS, GitHub Actions', out:'Application deploy করা এবং portfolio/client-delivery workflow বোঝা।', topics:['VPS/AWS এ live server এ deploy','Environment variable আর production config','GitHub Actions দিয়ে CI/CD automation','Developer portfolio বানানো','AI-era developer হিসেবে job preparation','Freelance client delivery secrets']},
      {n:'08', t:'Mobile App + Play Store & App Store Launch', o:'React Native → Android/iOS → Play Store/App Store', tags:['Play','iOS'], tools:'React Native, Play Console, App Store Connect', out:'Mobile app build এবং store-submission workflow বোঝা।', topics:['Web থেকে native mobile app এর foundation','AI দিয়ে mobile app এর screens বানানো','Native device feature আর phone এ testing','Release build বানানো (APK/AAB আর iOS)','Google Play Store এ app publish','Apple App Store এ app publish','Launch এর পর update, analytics আর growth']}
    ]
  },
  how: {
    title: 'Recorded কোর্স কীভাবে কাজ করে',
    sub: 'Pay করার পর কী হয় — ধাপে ধাপে।',
    steps: [
      {k:'Enroll', d:'আসল payment flow-এর মাধ্যমে course কিনুন।', more:'এককালীন পেমেন্ট। কোনো fixed batch বা class schedule নেই।'},
      {k:'Access Your Course', d:'Payment-এর পর আপনার ফোন নাম্বারে কনফার্মেশন মেসেজ যাবে।', more:'সেই নাম্বার দিয়ে website-এ লগইন করলেই সব ক্লাস দেখতে পারবেন।'},
      {k:'নিজের সময়ে শিখুন', d:'Recorded lesson দেখুন, module অনুসরণ করুন — নিজের গতিতে।', more:'কোনো live class বা বাধ্যতামূলক attendance নেই।'},
      {k:'Build ও Support', d:'Real project বানান, আটকে গেলে WhatsApp ও Facebook community-তে জিজ্ঞেস করুন।', more:'WhatsApp ও Facebook community-র মাধ্যমে সাপোর্ট পাবেন।'}
    ]
  },
  glance: {
    title: 'এক নজরে কোর্স',
    items: [['৮টি Module','৪০+ লেসন, Zero → Store'],['2500+ Students','ইতিমধ্যে join করেছেন'],['Website + App','৩টি real project'],['Lifetime Access','৭ দিনের money back']]
  },
  why: {
    title: 'কেন এই কোর্সে জয়েন করবেন?',
    items: [
      {n:'01', k:'Beginner Friendly', d:'Zero থেকে step-by-step শিখানো হবে', vis:['Setup','Frontend','Backend','Deploy','App']},
      {n:'02', k:'Free AI Tools', d:'শেখার জন্য expensive AI subscription লাগবে না', vis:['Gemini · free tier','Cursor · free','AntiGravity · free'], big:'৳0'},
      {n:'03', k:'Fundamentals Included', d:'শুধু AI prompting নয়, development fundamentals-ও শিখবেন', vis:['Prompting','Git & Deploy','Database & API','JavaScript']},
      {n:'04', k:'Community Support', d:'WhatsApp + Facebook support গ্রুপের মাধ্যমে সমস্যার সমাধান পাবেন', vis:['WhatsApp','Facebook']},
      {n:'05', k:'Client Ready', d:'Real projects দিয়ে portfolio তৈরি করবেন', vis:['Website · Live ✓','Mobile App · Store ✓','SaaS · Deployed ✓']}
    ]
  },
  reviews: {
    title: 'Student-রা যা বলছেন', sub: '2500+ জন student ইতিমধ্যে কোর্সটি শুরু করেছেন।',
    items: [
      {q:'You are doing great. I thoroughly enjoyed your lessons so far. The lessons feel practical and easy to follow.', n:'Akter'},
      {q:'Project Architecture module শেষ করে backend part-এ আছি। AI দিয়ে API আর database design এত সহজে বুঝব ভাবিনি।', n:'Tanvir Ahmed'},
      {q:'Backend module-এর step-by-step explanation খুব clear। Beginner হয়েও পুরো workflow এখন বুঝতে পারছি।', n:'Farhana Islam'}
    ]
  },
  media: {
    title: 'জাতীয় গণমাধ্যমে আমাদের কাজ',
    sub: 'AI দিয়ে website ও mobile app বানানো শেখানোর এই উদ্যোগ নিয়ে প্রতিবেদন প্রকাশ করেছে দেশের জাতীয় গণমাধ্যম।',
    items: [
      {src:'দৈনিক কালবেলা', h:'হাজারো তরুণের ক্যারিয়ার গড়ার স্বপ্ন দেখছেন আফনান', date:'০৩ সেপ্টেম্বর ২০২৬', img:'assets/kalbela.png'},
      {src:'পাবলিকিয়ান পরিবার', h:'মাত্র ২৪ বছর বয়সে হাজারো স্টুডেন্টের ক্যারিয়ার গড়ার কারিগর আফনান মাহমুদ', date:'২৮ আগস্ট ২০২৬', img:'assets/publician-poribar.png'}
    ]
  },
  instructor: {
    kicker: 'your instructor', lead: 'Real projects. Real workflow.', name: 'Afnan Mahmud', role: 'Full-Stack Engineer & AI Workflow Expert',
    bio: 'MERN Stack-এ production-grade software এবং real client projects নিয়ে কাজ করছি। এই course-এ আমার real-world AI development workflow-টাই শেখানো হবে।',
    ventures: [
      {k:'Cholo Bohudur', r:'Co-Founder', d:'একটি সফটওয়্যার ফার্ম, যেখানে রিয়েল ক্লায়েন্টের জন্য প্রোডাকশন-গ্রেড সফটওয়্যার তৈরি করা হয়।'},
      {k:'Gowaay', r:'Founder', d:'ট্যুর অ্যান্ড ট্রাভেল ইন্ডাস্ট্রির জন্য তৈরি একটি প্রোডাক্ট ও প্ল্যাটফর্ম।'},
      {k:'Niyoog', r:'Founder & CTO', d:'জব মার্কেট প্রোডাক্ট। প্রোফাইল সাবমিট করলেই বেস্ট-ম্যাচিং জবে অটোমেটিক CV চলে যায়; নিয়োগদাতারা ২৪ ঘন্টার মধ্যেই সেরা এমপ্লয়ি হায়ার করতে পারেন।'},
      {k:'Sujog', r:'Founder', d:'মূলত বাংলাদেশের ই-কমার্সদের জন্য ওয়েব ও মোবাইল অ্যাপ্লিকেশন ডেভেলপ করার একটি প্ল্যাটফর্ম।'}
    ]
  },
  pricing: {
    badge: 'limited-time offer', title: 'এক কোর্সে Zero থেকে Live App.',
    sub: 'Recorded course, নিজের সময়ে দেখবেন। একবার enroll করলেই lifetime access, course update আর community support।',
    listTitle: 'এই কোর্সে আপনি যা যা পাচ্ছেন: আসল ভ্যালু',
    rows: [['৮টি মডিউল, ৪০+ লেসন (জিরো → লাইভ অ্যাপ)','৳4,000'],['মোবাইল অ্যাপ + Play Store ও App Store পাবলিশ','৳2,500'],['রিয়েল প্রজেক্টের সোর্স কোড + AI Prompts লাইব্রেরি','৳2,000'],['লাইফটাইম কমিউনিটি সাপোর্ট + আপডেট','৳1,500']],
    total: ['সর্বমোট আসল ভ্যালু','৳10,000'],
    chips: ['8 Modules · 40+ Lessons','3 Real Projects','Website + Mobile App','Play Store + App Store Publishing','Source Code + AI Prompts','Lifetime Community Support','Lifetime Updates'],
    card: {top:'Lifetime access', off:'90% OFF', pre:'কিন্তু আজ আপনি পাচ্ছেন মাত্র', save:'৯০% ছাড়, ৳9,010 সাশ্রয়', warn1:'যেকোনো সময় দাম বাড়তে পারে।', warn2:'দাম বেড়ে যাওয়ার আগেই আপনার সিটটি নিশ্চিত করুন।', cta:'এখনই Enroll করুন · ৳990', guarantee:'7-Day Money-Back Guarantee: ৭ দিনের মধ্যে ভালো না লাগলে টাকা ফেরত।'}
  },
  faq: {
    title: 'আপনার প্রশ্ন। আমাদের উত্তর।',
    items: [
      ['আমি তো কোডিং পারি না, আমি কি পারবো?','অবশ্যই। কোর্সটি একদম beginner-friendly এবং zero থেকে step-by-step সাজানো। বেসিক কম্পিউটার ব্যবহার জানলেই শুরু করতে পারবেন।'],
      ['কোর্সটি live নাকি recorded?','এটি high-quality recorded course। নিজের সময়মতো শিখতে পারবেন, আর আটকে গেলে WhatsApp ও Facebook community support পাবেন।'],
      ['Enroll করার পর কীভাবে কোর্সটি দেখবো?','Payment করার পর আপনার ফোন নাম্বারে কনফার্মেশন মেসেজ যাবে। সেই নাম্বার দিয়ে website-এ লগইন করলেই সব ক্লাস দেখতে পারবেন।'],
      ['ভালো না লাগলে কী হবে?','৭ দিনের মানি-ব্যাক গ্যারান্টি আছে। Enroll করার ৭ দিনের মধ্যে জানালে টাকা ফেরত পাবেন।'],
      ['কোর্স করতে কি টাকা দিয়ে AI tool কিনতে হবে?','না। শেখার পুরো workflow free AI tools দিয়েই দেখানো হবে। Production work-এর জন্য paid model কখন কাজে লাগে, সেটাও বুঝিয়ে দেওয়া হবে।'],
      ['Website আর mobile app, দুটোই কি শেখাবেন?','হ্যাঁ। Full-stack website বানানো থেকে React Native mobile app এবং Android/iOS store publishing, দুটোই course-এর অন্তর্ভুক্ত।'],
      ['Project live করা কীভাবে শেখাবেন?','GitHub থেকে VPS/server-এ deploy, environment configuration, domain setup এবং CI/CD workflow হাতে-কলমে দেখানো হবে।'],
      ['Security শেখানো হবে?','হ্যাঁ। AI দিয়ে vulnerabilities খুঁজে বের করা, code audit এবং production launch-এর আগে security issues fix করার workflow থাকবে।'],
      ['এত কম দামে কেন?','Course-টি accessible রাখাই লক্ষ্য। তাই limited-time offer-এ ৳10,000 মূল্যের complete program lifetime access-সহ ৳990-তে দেওয়া হচ্ছে।'],
      ['আরও কিছু জানতে চান?','Community team-এর সাথে যোগাযোগ করুন — WhatsApp: +880 1791225000 অথবা support@afnanmahmud.com।']
    ],
    note: ''
  },
  final: { title: 'জিরো থেকে লাইভ অ্যাপ, শুরু হোক আজই।', sub: 'Recorded · Lifetime Access · 7-Day Money Back' },
  footer: {
    about: 'Real-world development skills for Bangladeshi students, web, mobile and AI, taught by an engineer who ships.',
    email: 'support@afnanmahmud.com', phone: '+880 1791225000',
    cols: [['Explore',['Home','Courses','About','Contact']],['Account',['Dashboard','Sign in','Android app']],['Legal',['Privacy Policy','Terms of Service','Refund Policy']]],
    copy: '© 2026 Afnan Mahmud. All rights reserved.', made: 'Made in Bangladesh'
  },
  img: { poster:'assets/demo-poster.jpg', video:'https://afnanmahmud.com/course-demo.mp4', sketch:'assets/afnan-sketch.webp', campus:'assets/campus.webp', mentor:'assets/mentor.jpg', mark:'assets/afnan-mark.png', thumb:'assets/course-thumb.jpg' }
};
