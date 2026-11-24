/* Renders the page from content.js once, then wires interactions.
   Switching themes only changes <html data-theme>, so it is instant. */
(function () {
  var C = window.C, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var I = {
    arrow: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    play: '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 2.5v11l9-5.5z"/></svg>',
    check: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3L13 4.5"/></svg>',
    plus: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>',
    users: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="7" r="3"/><path d="M2.5 16c.6-3 2.8-4.5 5.5-4.5S12.900 13 13.500 16M14 4.500a2.500 2.500 0 010 5M15.500 11.800c1.300.5 2.200 1.800 2.500 4"/></svg>',
    shield: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M10 2l6.500 2.500v5c0 4-2.700 6.800-6.500 8-3.800-1.200-6.500-4-6.500-8v-5z"/><path d="M7 10l2.200 2L13 8" stroke-linecap="round"/></svg>',
    rec: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.500" y="4.500" width="15" height="11" rx="2.500"/><path d="M8.500 8l4 2-4 2z" fill="currentColor"/></svg>',
    inf: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M10 10c-1.500-2.500-2.800-3.500-4.500-3.500a3.500 3.500 0 000 7C7.200 13.500 8.500 12.500 10 10zm0 0c1.500 2.500 2.800 3.500 4.500 3.500a3.500 3.500 0 000-7C12.800 6.500 11.500 7.500 10 10z"/></svg>',
    book: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 4.500c2.500-.8 5-.5 7 1 2-1.500 4.500-1.800 7-1v10.500c-2.500-.8-5-.5-7 1-2-1.500-4.500-1.800-7-1z"/><path d="M10 5.500V16"/></svg>',
    code: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6l-4 4 4 4M13 6l4 4-4 4"/></svg>',
    layers: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M10 3l7.500 4L10 11 2.500 7zM2.500 10.500L10 14.500l7.500-4M2.500 13.500L10 17.500l7.500-4"/></svg>',
    spark: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M10 2.500l1.800 4.800 4.800 1.800-4.800 1.800L10 15.700l-1.800-4.800-4.800-1.800 4.800-1.800z"/></svg>'
  };
  var factIco = [I.users, I.shield, I.rec, I.inf, I.layers, I.book, I.code, I.spark];
  var cta = function (src, label, cls) { return '<a class="btn ' + (cls || 'btn-primary') + '" href="' + ENROLL_URL + '" data-src="' + src + '" target="_blank" rel="noopener">' + (label || 'Enroll Now · ' + C.price) + '</a>'; };
  var demoBtn = function (cls) { return '<button type="button" class="btn btn-ghost js-demo">' + I.play + ' Demo Class দেখুন</button>'; };
  var tag = function (t) { return '<span class="tag">' + t + '</span>'; };
  var sec = function (id, cls, inner) { return '<section id="' + id + '" class="sec ' + cls + '" aria-labelledby="' + id + '-h"><div class="wrap">' + inner + '</div></section>'; };
  var head = function (id, kick, title, sub, extra) { return '<header class="sec-head rv">' + (kick ? '<span class="kick">' + kick + '</span>' : '') + '<h2 id="' + id + '-h">' + title + '</h2>' + (sub ? '<p class="sub">' + sub + '</p>' : '') + (extra || '') + '</header>'; };

  /* ---------- section templates ---------- */
  function header() {
    return '<header class="site-header" id="siteHeader"><div class="wrap hdr"><a class="brand" href="#hero"><img src="' + C.img.mark + '" alt="" width="28" height="28"><span>Afnan Mahmud</span></a>' +
      '<nav class="nav" aria-label="Primary">' + C.nav.map(function (n) { return '<a href="#' + n[0] + '" data-nav="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</nav>' +
      '<div class="hdr-actions"><a class="signin" href="https://afnanmahmud.com" target="_blank" rel="noopener">Sign in</a>' + cta('nav', 'Enroll · ' + C.price) +
      '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="drawer"><span></span><span></span></button></div></div>' +
      '<div class="drawer" id="drawer" hidden>' + C.nav.map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + '</a>'; }).join('') + cta('nav', 'Enroll Now · ' + C.price) + '</div></header>';
  }
  function hero() {
    var h = C.hero;
    return '<section id="hero" class="sec hero" aria-labelledby="hero-h"><div class="wrap hero-grid">' +
      '<div class="hero-copy"><p class="eyebrow rv">' + h.eyebrow + '</p><h1 id="hero-h" class="rv">' + h.title + '</h1><p class="lead rv">' + h.sub + '</p>' +
      '<div class="cta-row rv">' + cta('hero') + demoBtn() + '</div>' +
      '<ul class="micro rv">' + ['2500+ Students', '7-Day Money Back', 'Recorded · নিজের সময়ে', 'Lifetime Access'].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
      '<div class="qs rv" aria-label="Quick start"><span class="qs-tab">QUICK START</span><div class="qs-body"><b>Start in 3 steps</b><code><span>$</span> enroll → login --phone → learn --self-paced</code></div></div></div>' +
      '<div class="hero-visual rv"><div class="vid-card"><button type="button" class="vid js-demo" aria-label="Demo Class দেখুন"><img src="' + C.img.poster + '" alt="Course demo preview" loading="eager"><span class="play">' + I.play + '</span><span class="vid-cap">Demo Class · ফুল স্ক্রিনে দেখুন →</span></button>' +
      '<img class="sketch" src="' + C.img.sketch + '" alt="" loading="lazy"><span class="bubble">' + h.bubble + '</span></div></div>' +
      '<aside class="hero-card rv" aria-label="Course summary"><div class="hc-top"><span class="hc-badge">Self-paced</span><span>Recorded</span></div><div class="hc-price"><b>' + C.price + '</b><s>' + C.refPrice + '</s></div>' +
      '<p>এককালীন পেমেন্ট · Lifetime access</p><ul>' + ['8 Modules · 40+ Lessons', '3 Real Projects', 'Website + Mobile App', 'Source code + AI prompts', 'Community support'].map(function (x) { return '<li>' + I.check + x + '</li>'; }).join('') + '</ul>' + cta('hero-card', 'Enroll Now · ' + C.price) + '<p class="hc-g">7-Day Money-Back Guarantee</p></aside>' +
      '</div></section>';
  }
  function facts() {
    return '<section class="sec facts" aria-label="Course facts"><div class="wrap"><ul class="facts-grid">' + C.facts.map(function (f, i) { return '<li class="rv"><i>' + factIco[i] + '</i><b>' + f[0] + '</b><span>' + f[1] + '</span></li>'; }).join('') + '</ul></div></section>';
  }
  var vis = [
    '<div class="mini mini-web"><i class="on">Frontend <em>React · Next.js</em></i><i>Backend <em>Node.js ✓</em></i><i>Database <em>MongoDB ✓</em></i><i>Auth <em>✓</em></i></div>',
    '<div class="mini mini-app"><span class="phone"><b></b><b></b><b></b></span><span class="phone p2"><b></b><b></b><b></b></span><small>Android · iOS</small></div>',
    '<div class="mini mini-term"><code>$ npm run build</code><code class="bad">✗ TypeError: user is undefined</code><code>$ claude "fix this error"</code><code class="ok">✓ fixed · null check added</code></div>',
    '<div class="mini mini-pipe"><span>build ✓</span><i></i><span>deploy · VPS ✓</span><i></i><span class="on">your-domain.com live</span></div>'
  ];
  function build() {
    var b = C.build;
    var outs = b.outcomes.map(function (o, i) { return '<article class="card outcome rv"><span class="num">0' + (i + 1) + '</span>' + vis[i] + '<h3>' + o.k + '</h3><p>' + o.d + '</p><div class="tags">' + o.tags.map(tag).join('') + '</div></article>'; }).join('');
    var tabs = b.projects.map(function (p, i) { return '<button role="tab" class="ptab' + (i ? '' : ' is-on') + '" aria-selected="' + (!i) + '" data-i="' + i + '">' + p.k + '<small>' + p.t + '</small></button>'; }).join('');
    return sec('build', 'build', head('build', 'What you will build', b.title, b.sub) + '<div class="outcomes">' + outs + '</div>' +
      '<div class="proj rv"><div class="proj-head"><h3>' + b.projectsTitle + '</h3></div><div class="ptabs" role="tablist" aria-label="Projects">' + tabs + '</div><div class="proj-body" id="projBody"></div></div>');
  }
  function projPanel(i, mode) {
    var p = C.build.projects[i];
    var screen = mode === 'mobile' ? '<div class="dev dev-m"><div class="notch"></div><div class="scr"><b></b><i></i><i></i><i class="s"></i><u></u></div></div>' : '<div class="dev dev-d"><div class="bar"><span></span><span></span><span></span><em>your-project.com</em></div><div class="scr"><aside><i></i><i></i><i></i></aside><main><b></b><i></i><i></i><div class="cards"><u></u><u></u><u></u></div></main></div></div>';
    return '<div class="pinfo"><span class="pill">' + p.plat + '</span><h4>' + p.t + '</h4><p>' + p.d + '</p><ul class="check">' + p.feats.map(function (f) { return '<li>' + I.check + f + '</li>'; }).join('') + '</ul>' +
      '<dl><div><dt>Technologies</dt><dd>' + p.tech.join(' · ') + '</dd></div><div><dt>Modules</dt><dd>' + p.mods + '</dd></div><div><dt>Final deliverable</dt><dd>' + p.out + '</dd></div></dl>' +
      '</div>' +
      '<div class="pprev"><div class="seg" role="group" aria-label="Preview"><button type="button" data-m="desktop" class="' + (mode !== 'mobile' ? 'is-on' : '') + '">Desktop</button><button type="button" data-m="mobile" class="' + (mode === 'mobile' ? 'is-on' : '') + '">Mobile</button></div><div class="stage-dev">' + screen + '</div></div>';
  }
  function audience() {
    var a = C.audience;
    return sec('audience', 'audience', head('audience', 'Who is this for', a.title, a.sub) + '<div class="aud-grid">' + a.items.map(function (x, i) {
      return '<article class="card aud rv' + (i === 0 ? ' is-on' : '') + '" tabindex="0" data-t="' + (i + 1) + '"><span class="badge-n">' + x.n + '</span><h3>' + x.k + '</h3><p>' + x.d + '</p><ul class="check">' + x.pts.map(function (p) { return '<li>' + I.check + p + '</li>'; }).join('') + '</ul><div class="tags">' + x.tags.map(tag).join('') + '</div></article>';
    }).join('') + '</div><p class="note rv">' + a.note + '</p>');
  }
  function approach() {
    var a = C.approach;
    return sec('approach', 'approach', head('approach', 'The new approach', a.title, a.sub) +
      '<div class="vs"><div class="card vs-old rv"><h3><span>✕</span> Traditional approach</h3><ul>' + a.old.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card vs-new rv"><h3><span>✓</span> AI-assisted approach</h3><ul>' + a.neu.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div></div>' +
      '<div class="steps rv" role="tablist" aria-label="Idea to app">' + a.steps.map(function (s, i) { return '<button role="tab" class="step' + (i === 0 ? ' is-on' : '') + '" aria-selected="' + (i === 0) + '"><i>' + (i + 1) + '</i><b>' + s[0] + '</b><small>' + s[1] + '</small></button>'; }).join('') + '</div><p class="note rv">' + a.caveat + '</p>');
  }
  function workflow() {
    var w = C.workflow;
    var items = w.stages.map(function (s, i) {
      return '<button class="stg-btn' + (i === 0 ? ' is-open' : '') + '" aria-expanded="' + (i === 0) + '" data-i="' + i + '"><i>' + s.n + '</i><b>' + s.k + '</b></button>' +
        '<div class="stg-body' + (i === 0 ? ' is-open' : '') + '" data-c="' + (i % 7) + '"><div class="stg-main"><span class="mono">' + s.n + ' / 07 · ' + s.mod + '</span><h3>' + s.k + '</h3><p>' + s.d + '</p><ul class="check">' + s.pts.map(function (p) { return '<li>' + I.check + p + '</li>'; }).join('') + '</ul></div>' +
        '<div class="stg-side"><div><small>Tools</small><div class="tags">' + s.tools.map(tag).join('') + '</div></div><div><small>Responsibility</small><b>' + s.you + '</b></div><div><small>Output</small><b>' + s.out + '</b></div></div></div>';
    }).join('');
    return sec('workflow', 'workflow', head('workflow', 'Seven-step workflow', w.title, '<b class="lead2">' + w.lead + '</b> ' + w.sub, cta('workflow')) + '<div class="stages rv"><div class="progress"><span id="stgProg"></span></div>' + items + '</div>');
  }
  function stack() {
    var s = C.stack;
    return sec('stack', 'stack', head('stack', 'Tools & stack', s.title, '') +
      '<div class="stack-grid"><div class="card rv"><span class="mono">AI TOOLS</span><h3>আমাদের AI টুলস</h3><div class="tool-list" role="tablist">' + s.ai.map(function (t, i) { return '<button role="tab" class="tool' + (i === 0 ? ' is-on' : '') + '" aria-selected="' + (i === 0) + '" data-i="' + i + '"><i>' + t.k.charAt(0) + '</i><b>' + t.k + '</b><small>' + t.d + '</small></button>'; }).join('') + '</div><div class="tool-det" id="toolDet"></div></div>' +
      '<div class="card rv"><span class="mono">DEVELOPMENT STACK</span><h3>ডেভেলপমেন্ট স্ট্যাক</h3><ul class="dev-list">' + s.dev.map(function (t) { return '<li><b>' + t.k + '</b><span>' + t.d + '</span><em>' + t.fit + '</em></li>'; }).join('') + '</ul></div></div><p class="note rv">' + s.note + '</p>');
  }
  function curriculum() {
    var c = C.curriculum;
    var items = c.modules.map(function (m, i) {
      return '<button class="mod-btn' + (i === 0 ? ' is-open' : '') + '" aria-expanded="' + (i === 0) + '"><span class="mono">MODULE</span><i>' + m.n + '.</i><b>' + m.t + '</b><small>' + m.o + '</small><span class="tags">' + m.tags.map(tag).join('') + '</span></button>' +
        '<div class="mod-body' + (i === 0 ? ' is-open' : '') + '"><span class="mono">Module ' + m.n + ' · ' + m.topics.length + ' topics</span><h3>' + m.t + '</h3><p class="o">' + m.o + '</p><ol>' + m.topics.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol><div class="mod-meta"><div><small>Tools</small>' + m.tools + '</div><div><small>Expected outcome</small>' + m.out + '</div></div></div>';
    }).join('');
    return sec('curriculum', 'curriculum', head('curriculum', c.badge, c.head, '', '<button type="button" class="link" id="expandAll">সব module খুলুন</button>') + '<div class="mods rv">' + items + '</div>');
  }
  function how() {
    var h = C.how;
    return sec('how', 'how', head('how', 'Recorded learning', h.title, h.sub) + '<ol class="how-steps">' + h.steps.map(function (s, i) {
      return '<li class="card how rv' + (i === 0 ? ' is-open' : '') + '"><button aria-expanded="' + (i === 0) + '"><i>' + (i + 1) + '</i><b>' + s.k + '</b><span class="pm">' + I.plus + '</span></button><p>' + s.d + '</p><p class="more">' + s.more + '</p></li>';
    }).join('') + '</ol>');
  }
  function glance() {
    return sec('glance', 'glance', head('glance', '', C.glance.title, '') + '<ul class="glance-grid">' + C.glance.items.map(function (g) { return '<li class="rv"><b>' + g[0] + '</b><span>' + g[1] + '</span></li>'; }).join('') + '</ul><div class="campus rv"><img src="' + C.img.campus + '" alt="" loading="lazy"><p>AI দিয়ে বানান real, production-grade app</p></div>');
  }
  function why() {
    var v = function (it) {
      var h = '<div class="wv">';
      if (it.n === '01') h += '<div class="bars">' + it.vis.map(function (x, i) { return '<span style="height:' + (28 + i * 16) + '%">' + x + '</span>'; }).join('') + '</div>';
      else if (it.n === '02') h += '<div class="zero"><b>' + it.big + '</b><small>subscription খরচ</small></div><div class="rows">' + it.vis.map(function (x) { var p = x.split(' · '); return '<span>' + p[0] + '<em>' + p[1] + '</em></span>'; }).join('') + '</div>';
      else if (it.n === '03') h += '<div class="stackp">' + it.vis.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>';
      else if (it.n === '04') h += '<div class="chat"><span>Deploy-এ error আসছে 😕</span><span class="me">Log টা পাঠান, দেখছি ✓</span></div><div class="tags">' + it.vis.map(tag).join('') + '</div>';
      else h += '<div class="rows">' + it.vis.map(function (x) { var p = x.split(' · '); return '<span>' + p[0] + '<em>' + p[1] + '</em></span>'; }).join('') + '</div>';
      return h + '</div>';
    };
    return sec('why', 'why', head('why', '', C.why.title, '') + '<div class="why-grid">' + C.why.items.map(function (it) { return '<article class="card why-c rv" data-c="' + (+it.n - 1) + '"><span class="num">' + it.n + '</span><h3>' + it.k + '</h3><p>' + it.d + '</p>' + v(it) + '</article>'; }).join('') + '</div>');
  }
  function reviews() {
    var r = C.reviews;
    return sec('reviews', 'reviews', head('reviews', 'student review', r.title, r.sub) + '<div class="rev-grid">' + r.items.map(function (x, i) { return '<figure class="card rev rv" data-c="' + i + '"><div class="stars" aria-label="5 stars">★★★★★</div><blockquote>' + x.q + '</blockquote><figcaption><i>' + x.n.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2) + '</i><b>' + x.n + '</b><small>Student</small></figcaption></figure>'; }).join('') + '</div>');
  }
  function media() {
    var m = C.media;
    return sec('media', 'media', head('media', 'National Media', m.title, m.sub) + '<div class="media-grid">' + m.items.map(function (x) {
      return '<a class="card media-c rv" href="#media" aria-label="' + x.src + '"><div class="mi"><img src="' + x.img + '" alt="' + x.src + '-এর প্রতিবেদন" loading="lazy"></div><div class="mt"><span class="tag">' + x.src + '</span><h3>' + x.h + '</h3><small>' + x.src + ' · ' + x.date + '</small></div></a>';
    }).join('') + '</div>');
  }
  function instructor() {
    var n = C.instructor;
    return sec('instructor', 'instructor', '<div class="ins-grid"><div class="ins-photo rv"><img src="' + C.img.mentor + '" alt="Afnan Mahmud" loading="lazy"></div><div class="ins-copy"><span class="kick rv">' + n.kicker + '</span><p class="lead2 rv">' + n.lead + '</p><h2 id="instructor-h" class="rv">' + n.name + '<i>.</i></h2><p class="role rv">' + n.role + '</p><p class="rv">' + n.bio + '</p><span class="mono rv">FOUNDER &amp; BUILDER OF</span><div class="vent-grid">' + n.ventures.map(function (v) { return '<article class="card vent rv"><h4>' + v.k + '</h4><span class="mono">' + v.r + '</span><p>' + v.d + '</p></article>'; }).join('') + '</div></div></div>');
  }
  function pricing() {
    var p = C.pricing, k = p.card;
    return sec('pricing', 'pricing', head('pricing', p.badge, p.title, p.sub) + '<div class="price-grid"><div class="card val rv"><h3>' + p.listTitle + '</h3><ul>' + p.rows.map(function (r) { return '<li><span>' + r[0] + '</span><b>' + r[1] + '</b></li>'; }).join('') + '<li class="tot"><span>' + p.total[0] + '</span><b>' + p.total[1] + '</b></li></ul><div class="tags">' + p.chips.map(tag).join('') + '</div></div>' +
      '<div class="price-card rv" id="enroll"><div class="pc-top"><span class="mono">' + k.top + '</span><span class="mono">' + k.off + '</span></div><p>' + k.pre + '</p><div class="pc-price"><b>' + C.price + '</b><s>' + C.refPrice + '</s></div><p class="save">' + k.save + '</p><div class="warn"><b>' + k.warn1 + '</b><span>' + k.warn2 + '</span></div>' + cta('pricing', k.cta, 'btn-block') + demoBtn() + '<p class="g">' + k.guarantee + '</p></div></div>');
  }
  function faq() {
    var f = C.faq;
    return sec('faq', 'faq', head('faq', 'frequently asked', f.title, '') + '<div class="faq-list rv">' + f.items.map(function (x, i) {
      return '<div class="qa' + (i === 0 ? ' is-open' : '') + '"><button aria-expanded="' + (i === 0) + '"><span>' + x[0] + '</span><i>' + I.plus + '</i></button><div class="ans"><p>' + x[1] + '</p></div></div>';
    }).join('') + '</div>');
  }
  function final() {
    return '<section class="sec final" id="final"><div class="wrap fin rv"><h2>' + C.final.title + '</h2><p>' + C.final.sub + '</p><div class="cta-row">' + cta('final', 'Enroll Now · ' + C.price) + demoBtn() + '</div></div></section>';
  }
  function footer() {
    var f = C.footer;
    return '<footer class="foot"><div class="wrap"><div class="foot-grid"><div><a class="brand" href="#hero"><img src="' + C.img.mark + '" alt="" width="28" height="28"><span>Afnan Mahmud</span></a><p>' + f.about + '</p><p class="contact">' + f.email + '<br>' + f.phone + '</p></div>' +
      f.cols.map(function (c) { return '<nav aria-label="' + c[0] + '"><b>' + c[0] + '</b>' + c[1].map(function (l) { return '<a href="#hero">' + l + '</a>'; }).join('') + '</nav>'; }).join('') + '</div><div class="foot-bot"><span>' + f.copy + '</span><span>' + f.made + '</span></div></div><div class="foot-word" aria-hidden="true">Afnan</div></footer>' +
      '<div class="sticky-cta" id="stickyCta"><div><b>' + C.price + '</b><small>Lifetime · 7-Day Money Back</small></div>' + cta('sticky', 'Enroll Now') + '</div>' +
      '<div class="modal" id="modal" hidden role="dialog" aria-modal="true" aria-label="Demo class"><div class="modal-in"><button class="modal-x" id="modalX" aria-label="Close">✕</button><video id="demoVideo" controls playsinline preload="none" poster="' + C.img.poster + '"></video><p class="modal-err" id="modalErr" hidden>Video load করা যায়নি — পরে আবার চেষ্টা করুন।</p></div></div>';
  }

  var root = $('#app');
  root.innerHTML = header() + '<main id="main">' + hero() + facts() + build() + audience() + approach() + workflow() + stack() + curriculum() + how() + glance() + why() + reviews() + media() + instructor() + pricing() + faq() + final() + '</main>' + footer();

  document.body.appendChild($('#modal')); /* keep the demo dialog outside #app so every layout can use it */
  /* ---------- interactions ---------- */
  var desk = window.matchMedia('(min-width:900px)');
  function tabs(container, sel, onPick) {
    $$(sel, container).forEach(function (b, i, all) {
      b.addEventListener('click', function () { all.forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-selected', x === b); }); onPick(i, b); });
    });
  }
  /* projects */
  var projMode = 'desktop', projIdx = 0, pb = $('#projBody');
  function renderProj() { pb.innerHTML = projPanel(projIdx, projMode); $$('.seg button', pb).forEach(function (b) { b.onclick = function () { projMode = b.dataset.m; renderProj(); }; }); }
  renderProj(); tabs($('.ptabs'), '.ptab', function (i) { projIdx = i; renderProj(); });
  /* audience */
  $$('.aud').forEach(function (c) { var on = function () { $$('.aud').forEach(function (x) { x.classList.toggle('is-on', x === c); }); }; c.addEventListener('mouseenter', on); c.addEventListener('focus', on); c.addEventListener('click', on); });
  /* approach steps */
  tabs($('.steps'), '.step', function () { });
  /* generic accordions */
  function accordion(scope, btnSel, bodySel, exclusiveOnDesk) {
    var btns = $$(btnSel, scope);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var body = bodySel ? b.nextElementSibling : b.parentElement, open = !body.classList.contains('is-open');
        if (exclusiveOnDesk && desk.matches) { if (!open) return; btns.forEach(function (x) { var y = bodySel ? x.nextElementSibling : x.parentElement; y.classList.remove('is-open'); x.classList.remove('is-open'); x.setAttribute('aria-expanded', 'false'); }); }
        else if (!exclusiveOnDesk) { btns.forEach(function (x) { if (x !== b) { var y = x.parentElement; y.classList.remove('is-open'); x.setAttribute('aria-expanded', 'false'); } }); }
        body.classList.toggle('is-open', open); b.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
        if (scope.classList.contains('stages')) $('#stgProg').style.width = ((+b.dataset.i + 1) / 7 * 100) + '%';
      });
    });
  }
  accordion($('.stages'), '.stg-btn', true, true); $('#stgProg').style.width = (100 / 7) + '%';
  accordion($('.mods'), '.mod-btn', true, true);
  accordion($('.faq-list'), '.qa > button', false, false);
  accordion($('.how-steps'), '.how > button', false, false);
  $('#expandAll').addEventListener('click', function () { $$('.mod-btn').forEach(function (b) { b.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); b.nextElementSibling.classList.add('is-open'); }); });
  /* tools */
  var td = $('#toolDet');
  function tool(i) { var t = C.stack.ai[i]; td.innerHTML = '<h4>' + t.k + ' <small>' + t.d + '</small></h4><dl><div><dt>Workflow-এ কোথায়</dt><dd>' + t.fit + '</dd></div><div><dt>Related module</dt><dd>' + t.mod + '</dd></div><div><dt>আপনি practice করবেন</dt><dd>' + t.practice + '</dd></div></dl>'; }
  tool(0); tabs($('.tool-list'), '.tool', tool);
  /* demo modal */
  var modal = $('#modal'), vid = $('#demoVideo'), lastBtn = null;
  function openModal(b) { lastBtn = b; modal.hidden = false; document.body.classList.add('lock'); vid.src = C.img.video; $('#modalErr').hidden = true; $('#modalX').focus(); }
  function closeModal() { vid.pause(); vid.removeAttribute('src'); vid.load(); modal.hidden = true; document.body.classList.remove('lock'); if (lastBtn) lastBtn.focus(); }
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('.js-demo'); if (b) openModal(b); if (e.target === modal) closeModal(); });
  $('#modalX').addEventListener('click', closeModal); vid.addEventListener('error', function () { $('#modalErr').hidden = false; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  /* header: compact on scroll, drawer, scrollspy, sticky mobile cta */
  var hdr = $('#siteHeader'), burger = $('#burger'), drawer = $('#drawer'), sticky = $('#stickyCta');
  burger.addEventListener('click', function () { var o = drawer.hidden; drawer.hidden = !o; burger.setAttribute('aria-expanded', o); });
  drawer.addEventListener('click', function (e) { if (e.target.tagName === 'A') { drawer.hidden = true; burger.setAttribute('aria-expanded', 'false'); } });
  function onScroll() { hdr.classList.toggle('compact', window.scrollY > 40); var p = $('#pricing').getBoundingClientRect(), f = $('#final').getBoundingClientRect(); sticky.classList.toggle('show', window.scrollY > 500 && !(p.top < innerHeight * .6 && p.bottom > 0) && f.top > innerHeight * .8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var spy = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) $$('[data-nav]').forEach(function (a) { a.classList.toggle('is-active', a.dataset.nav === e.target.id); }); }); }, { rootMargin: '-45% 0px -50% 0px' });
  C.nav.forEach(function (n) { var el = document.getElementById(n[0]); if (el) spy.observe(el); });
  /* reveal on scroll */
  var rvo = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rvo.unobserve(e.target); } }); }, { threshold: .08, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(function (el, i) { el.style.setProperty('--d', (i % 4) * 70 + 'ms'); rvo.observe(el); });
  /* theme tabs */
  var bar = $('#themeBar'), order = window.THEME_ORDER;
  bar.innerHTML = '<span class="tb-label">Design direction</span><div class="tb-tabs" role="tablist" aria-label="Design versions">' + order.map(function (k, i) { return '<button role="tab" data-t="' + k + '"><kbd>' + (i + 1) + '</kbd>' + THEMES[k].label + '</button>'; }).join('') + '</div><a class="tb-ds" href="design-system.html">Design system →</a>';
  function setTheme(k, keep) {
    if (!THEMES[k]) k = order[0];
    document.documentElement.setAttribute('data-theme', k); document.body.dataset.layout = THEMES[k].layout || '';
    $$('#themeBar [role=tab]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.t === k); b.tabIndex = b.dataset.t === k ? 0 : -1; });
    try { localStorage.setItem('afnan-theme', k); } catch (e) { }
    history.replaceState(null, '', '#v=' + k + (keep && location.hash.indexOf('&') > -1 ? '' : ''));
    $('#themeNote').textContent = THEMES[k].label + ' — ' + THEMES[k].vibe;
    document.body.classList.remove('swap'); void document.body.offsetWidth; document.body.classList.add('swap');
  }
  bar.addEventListener('click', function (e) { var b = e.target.closest('[role=tab]'); if (b) setTheme(b.dataset.t); });
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input,textarea,video') || e.metaKey || e.ctrlKey || e.altKey) return;
    var n = +e.key; if (n >= 1 && n <= order.length) setTheme(order[n - 1]);
  });
  bar.addEventListener('keydown', function (e) { var cur = document.documentElement.dataset.theme, i = order.indexOf(cur); if (e.key === 'ArrowRight') setTheme(order[(i + 1) % order.length]); if (e.key === 'ArrowLeft') setTheme(order[(i + order.length - 1) % order.length]); if (e.key.indexOf('Arrow') === 0) $('#themeBar [aria-selected=true]').focus(); });
  var m = location.hash.match(/v=(\w+)/), saved = null; try { saved = localStorage.getItem('afnan-theme'); } catch (e) { }
  setTheme(m ? m[1] : (saved || order[0]));
  /* anchor offset handled by CSS scroll-margin-top */
})();
