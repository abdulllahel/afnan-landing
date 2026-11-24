/* "Course Page" direction — its own information architecture (not the shared section stack).
   Structure: chrome → hero → [article | sticky enroll rail] → closing CTA.
   Reads the same content.js, so copy stays in one place. */
(function () {
  var C = window.C, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var ic = {
    check: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.500l3.200 3L13 4.500"/></svg>',
    x: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
    play: '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 2.500v11l9-5.500z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none"><path d="M12 2c1 4 5 5.500 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" fill="#E8A33D"/><path d="M12 22a3 3 0 003-3c0-2-2-3-3-5-1 2-3 3-3 5a3 3 0 003 3z" fill="#B3402E"/></svg>',
    chev: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>',
    arrow: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>'
  };
  var enroll = function (src, label, cls) { return '<a class="cp-btn ' + (cls || 'cp-btn-primary') + '" href="' + ENROLL_URL + '" data-src="' + src + '" target="_blank" rel="noopener">' + (label || 'Enroll · ' + C.price) + '</a>'; };
  var tag = function (t) { return '<span class="cp-tag">' + t + '</span>'; };
  var sec = function (id, title, kicker, body) { return '<section class="cp-sec" id="' + id + '" aria-labelledby="' + id + '-h"><header>' + (kicker ? '<span class="cp-kick">' + kicker + '</span>' : '') + '<h2 id="' + id + '-h">' + title + '</h2></header>' + body + '</section>'; };

  var nav = [['cp-overview', 'Overview'], ['cp-build', 'What you’ll build'], ['cp-path', 'Learning path'], ['cp-syllabus', 'Syllabus'], ['cp-instructor', 'Instructor'], ['cp-reviews', 'Reviews'], ['cp-faq', 'FAQ']];

  function chrome() {
    return '<header class="cp-head" id="cpHead"><div class="cp-top"><div class="cp-wrap cp-top-in"><a class="cp-brand" href="#cp-top"><img src="' + C.img.mark + '" alt="" width="30" height="30"><b>Afnan Mahmud</b><span>AI for Developers</span></a>' +
      '<div class="cp-top-r"><a href="https://afnanmahmud.com" target="_blank" rel="noopener" class="cp-link">Sign in</a><button type="button" class="cp-link js-demo">Free demo class</button>' + enroll('cp-nav', 'Enroll · ' + C.price) + '</div></div></div>' +
      '<nav class="cp-sub" aria-label="Page sections"><div class="cp-wrap cp-sub-in">' + nav.map(function (n) { return '<a href="#' + n[0] + '" data-cp="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</div></nav></header>';
  }
  function hero() {
    var h = C.hero, ins = C.instructor;
    return '<section class="cp-hero" id="cp-top"><div class="cp-wrap cp-hero-in"><div class="cp-hero-copy">' +
      '<span class="cp-badge">Recorded course · বাংলা</span>' +
      '<h1>' + h.title + '</h1>' +
      '<div class="cp-meta"><span><b>2500+</b> students</span><span><b>8</b> modules</span><span><b>40+</b> lessons</span><span><b>3</b> real projects</span></div>' +
      '<div class="cp-feat"><small>FEATURED IN</small>' + C.media.items.map(function (m) { return '<i>' + m.src + '</i>'; }).join('') + '</div>' +
      '<p class="cp-by"><b>' + ins.name + '</b> ' + ins.role + '</p>' +
      '<p class="cp-by cp-by2"><b>Founder &amp; builder</b> Cholo Bohudur · Gowaay · Niyoog · Sujog</p>' +
      '<div class="cp-hero-act"><a class="cp-btn cp-btn-light" href="#cp-syllabus">View Syllabus</a><button type="button" class="cp-btn cp-btn-light js-demo">' + ic.play + ' Demo Class দেখুন</button>' +
      '<div class="cp-pop">' + ic.flame + '<div><b>This course is popular.</b><span>2500+ জন student ইতিমধ্যে কোর্সটি শুরু করেছেন।</span></div></div></div></div>' +
      '<div class="cp-hero-art" aria-hidden="true"><div class="cp-stripes"></div><img src="' + C.img.sketch + '" alt=""></div></div></section>';
  }
  function overview() {
    var a = C.approach, p = C.pricing;
    var more = ['Recorded lessons, lifetime access — নিজের সময়ে শিখুন', 'WhatsApp ও Facebook community support', 'Real project-এর source code + AI Prompts library', 'Course update ও lifetime community support'];
    return sec('cp-overview', 'Zero থেকে Live App — এক কোর্সে।', '', '<p class="cp-lede">' + C.hero.sub + '</p>' +
      '<p>' + C.hero.side2 + '</p><h3>More than a course: একটি পূর্ণ workflow, tools আর community।</h3><ul class="cp-ticks">' + more.map(function (m) { return '<li>' + ic.check + m + '</li>'; }).join('') + '</ul>' +
      '<h3>এগুলোর মধ্যে কোনটা কি আপনার আটকে যাওয়ার কারণ?</h3><ul class="cp-pains">' + a.old.map(function (m) { return '<li>' + ic.x + m + '</li>'; }).join('') + '</ul>' +
      '<div class="cp-callout"><b>এই কোর্সে AI-first পথ:</b><ul>' + a.neu.map(function (m) { return '<li>' + ic.check + m + '</li>'; }).join('') + '</ul><p>' + a.caveat + '</p></div>');
  }
  var oicons = [
    '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.500h.01M10 6.500h.01"/>',
    '<rect x="7" y="2.500" width="10" height="19" rx="2.500"/><path d="M11 18.500h2"/>',
    '<path d="M12 3l7 3v5c0 4.500-3 8-7 10-4-2-7-5.500-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    '<path d="M14 4c3 0 6 0 6 0s0 3 0 6c-1.500 3-4 5-7 6l-5-5c1-3 3-5 6-7z"/><path d="M5 15c-1 2-1 4-1 4s2 0 4-1"/><circle cx="15" cy="9" r="1.500"/>'
  ];
  var wire = [
    '<div class="wf wf-web"><div class="wf-bar"><i></i><i></i><i></i></div><div class="wf-body"><b></b><u></u><u class="s"></u><div class="wf-row"><s></s><s></s><s></s></div></div></div>',
    '<div class="wf wf-dash"><aside><i></i><i></i><i></i></aside><main><div class="wf-kpi"><s></s><s></s></div><div class="wf-bars"><i style="height:38%"></i><i style="height:62%"></i><i style="height:48%"></i><i style="height:80%"></i><i style="height:58%"></i></div></main></div>',
    '<div class="wf wf-phone"><span></span><b></b><u></u><u class="s"></u><i></i></div>'
  ];
  function build() {
    var b = C.build;
    var outs = '<div class="cp-grid2 cp-bento">' + b.outcomes.map(function (o, i) { return '<article class="cp-card"><div class="cp-card-h"><span class="cp-n">0' + (i + 1) + '</span><span class="cp-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + oicons[i] + '</svg></span></div><h3>' + o.k + '</h3><p>' + o.d + '</p><div class="cp-tags">' + o.tags.map(tag).join('') + '</div></article>'; }).join('') + '</div>';
    var projs = '<h3 class="cp-h3">' + b.projectsTitle + '</h3><div class="cp-projs">' + b.projects.map(function (p, i) {
      return '<article class="cp-proj"><div class="cp-thumb t' + i + '"><span class="cp-plat">' + p.plat + '</span>' + wire[i] + '</div><div class="cp-proj-b"><small>' + p.k + ' · ' + p.mods + '</small><h4>' + p.t + '</h4><p>' + p.d + '</p><ul>' + p.feats.map(function (f) { return '<li>' + ic.check + f + '</li>'; }).join('') + '</ul><div class="cp-tags">' + p.tech.map(tag).join('') + '</div><div class="cp-out">Final deliverable: <b>' + p.out + '</b></div></div></article>';
    }).join('') + '</div>';
    return sec('cp-build', b.title, 'What you’ll build', '<p class="cp-lede">' + b.sub + '</p>' + outs + projs);
  }
  function who() {
    var a = C.audience;
    return sec('cp-who', a.title, 'Who it’s for', '<div class="cp-who">' + a.items.map(function (x) { return '<article><span class="cp-n">' + x.n + '</span><div><h3>' + x.k + '</h3><p>' + x.d + '</p><div class="cp-tags">' + x.tags.map(tag).join('') + '</div></div></article>'; }).join('') + '</div><p class="cp-note">' + a.note + '</p>');
  }
  function path() {
    var w = C.workflow;
    return sec('cp-path', 'Idea থেকে Launch — সাতটি ধাপ', 'Learning path', '<p class="cp-lede"><b>' + w.lead + '</b> ' + w.sub + '</p><ol class="cp-steps">' + w.stages.map(function (s) {
      return '<li><span class="cp-dot">' + s.n + '</span><div class="cp-step"><div class="cp-step-h"><h3>' + s.k + '</h3><small>' + s.mod + '</small></div><p>' + s.d + '</p><ul>' + s.pts.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul><div class="cp-step-f"><span><small>Tools</small>' + s.tools.join(' · ') + '</span><span><small>Responsibility</small>' + s.you + '</span><span><small>Output</small>' + s.out + '</span></div></div></li>';
    }).join('') + '</ol>');
  }
  function syllabus() {
    var c = C.curriculum;
    return sec('cp-syllabus', c.head, 'Syllabus', '<div class="cp-sylbar"><span>' + c.badge + '</span><button type="button" id="cpAll">Expand all</button></div><div class="cp-mods">' + c.modules.map(function (m, i) {
      return '<details class="cp-mod"' + (i === 0 ? ' open' : '') + '><summary><i>' + m.n + '</i><span><b>' + m.t + '</b><small>' + m.o + '</small></span><em>' + m.topics.length + ' topics</em>' + ic.chev + '</summary><ol>' + m.topics.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol><div class="cp-mod-f"><span><small>Tools</small>' + m.tools + '</span><span><small>Expected outcome</small>' + m.out + '</span></div></details>';
    }).join('') + '</div>');
  }
  function tools() {
    var s = C.stack;
    return sec('cp-tools', 'যে tools আর stack-এ কাজ করবেন', 'Tools & stack', '<div class="cp-grid2"><div class="cp-card"><span class="cp-kick2">AI TOOLS</span>' + s.ai.map(function (t) { return '<div class="cp-row"><b>' + t.k + '</b><span>' + t.d + '</span><small>' + t.mod + '</small></div>'; }).join('') + '</div><div class="cp-card"><span class="cp-kick2">DEVELOPMENT STACK</span>' + s.dev.map(function (t) { return '<div class="cp-row"><b>' + t.k + '</b><span>' + t.d + '</span><small>' + t.fit + '</small></div>'; }).join('') + '</div></div><p class="cp-note">' + s.note + '</p>');
  }
  function how() {
    var h = C.how;
    return sec('cp-how', h.title, 'How it works', '<ol class="cp-how">' + h.steps.map(function (s, i) { return '<li><span>' + (i + 1) + '</span><h3>' + s.k + '</h3><p>' + s.d + ' ' + s.more + '</p></li>'; }).join('') + '</ol>');
  }
  function why() {
    return sec('cp-why', C.why.title, 'Why this course', '<div class="cp-why">' + C.why.items.map(function (x) { return '<article><b>' + x.n + '</b><div><h3>' + x.k + '</h3><p>' + x.d + '</p></div></article>'; }).join('') + '</div>');
  }
  function instructor() {
    var n = C.instructor;
    return sec('cp-instructor', 'Meet your instructor', 'Instructor', '<div class="cp-ins"><img src="' + C.img.mentor + '" alt="' + n.name + '" loading="lazy"><div><h3>' + n.name + '</h3><p class="cp-role">' + n.role + '</p><p>' + n.bio + '</p></div></div><div class="cp-vent">' + n.ventures.map(function (v) { return '<article><h4>' + v.k + '</h4><small>' + v.r + '</small><p>' + v.d + '</p></article>'; }).join('') + '</div>');
  }
  function reviews() {
    var r = C.reviews;
    return sec('cp-reviews', r.title, 'Reviews', '<p class="cp-lede">' + r.sub + '</p><div class="cp-revs">' + r.items.map(function (x) { return '<figure><div class="cp-stars" aria-label="5 stars">★★★★★</div><blockquote>' + x.q + '</blockquote><figcaption><i>' + x.n.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2) + '</i><b>' + x.n + '</b> · Student</figcaption></figure>'; }).join('') + '</div>');
  }
  function media() {
    var m = C.media;
    return sec('cp-media', m.title, 'In the news', '<div class="cp-media">' + m.items.map(function (x) { return '<a href="#cp-media"><img src="' + x.img + '" alt="' + x.src + '" loading="lazy"><div><small>' + x.src + ' · ' + x.date + '</small><h3>' + x.h + '</h3></div></a>'; }).join('') + '</div>');
  }
  function value() {
    var p = C.pricing;
    return sec('cp-value', 'কী কী পাচ্ছেন', 'What’s included', '<table class="cp-val"><caption class="sr">' + p.listTitle + '</caption><tbody>' + p.rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '<tr class="tot"><td>' + p.total[0] + '</td><td><s>' + p.total[1] + '</s></td></tr></tbody></table><div class="cp-tags">' + p.chips.map(tag).join('') + '</div>');
  }
  function faq() {
    var f = C.faq;
    return sec('cp-faq', f.title, 'FAQ', '<div class="cp-faq">' + f.items.map(function (x, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + x[0] + ic.chev + '</summary><p>' + x[1] + '</p></details>'; }).join('') + '</div>');
  }
  function rail() {
    var p = C.pricing, k = p.card;
    return '<aside class="cp-rail" aria-label="Enroll"><div class="cp-buy" id="cp-buy"><div class="cp-buy-top"><i>LIFETIME ACCESS</i><span>' + p.badge + '</span></div><div class="cp-buy-b">' +
      '<div class="cp-price"><div><b>Recorded course</b><small>নিজের সময়ে শিখুন · এককালীন পেমেন্ট</small></div><div class="cp-amt"><s>' + C.refPrice + '</s> <b>' + C.price + '</b></div></div>' +
      '<div class="cp-opt"><span></span><div><b>Self-paced · Lifetime access</b><small>' + k.save + '</small></div></div>' +
      '<dl class="cp-stats">' + [['8', 'Modules'], ['40+', 'Lessons'], ['3', 'Real projects'], ['∞', 'Lifetime access']].map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl><p class="cp-inc2">' + ic.check + ' Source code + AI Prompts · Community support + Updates</p>' +
      enroll('cp-rail', 'Enroll · ' + C.price, 'cp-btn-primary cp-btn-block') + '<p class="cp-warn"><b>' + k.warn1 + '</b> ' + k.warn2 + '</p><p class="cp-guar">' + k.guarantee + '</p></div></div>' +
      '<div class="cp-side"><small>FREE PREVIEW</small><p>আগে দেখে নিন — কোনো sign-up ছাড়াই।</p><button type="button" class="cp-btn cp-btn-ghost cp-btn-block js-demo">' + ic.play + ' Demo Class দেখুন</button></div>' +
      '<div class="cp-side"><small>প্রশ্ন আছে?</small><p>WhatsApp: ' + C.footer.phone + '<br>' + C.footer.email + '</p></div></aside>';
  }
  function closing() {
    return '<section class="cp-close"><div class="cp-wrap"><h2>' + C.final.title + '</h2><p>' + C.final.sub + '</p><div class="cp-close-a">' + enroll('cp-final', 'Enroll · ' + C.price, 'cp-btn-lime') + '<button type="button" class="cp-btn cp-btn-outline js-demo">' + ic.play + ' Demo Class দেখুন</button></div></div></section>' +
      '<footer class="cp-foot"><div class="cp-wrap cp-foot-in"><div><a class="cp-brand" href="#cp-top"><img src="' + C.img.mark + '" alt="" width="30" height="30"><b>Afnan Mahmud</b></a><p>' + C.footer.about + '</p></div>' +
      C.footer.cols.map(function (c) { return '<nav aria-label="' + c[0] + '"><b>' + c[0] + '</b>' + c[1].map(function (l) { return '<a href="#cp-top">' + l + '</a>'; }).join('') + '</nav>'; }).join('') + '</div><div class="cp-wrap cp-foot-b"><span>' + C.footer.copy + '</span><span>' + C.footer.made + '</span></div></footer>' +
      '<div class="cp-bar" id="cpBar"><div><b>' + C.price + '</b><small>Lifetime · 7-Day Money Back</small></div>' + enroll('cp-sticky', 'Enroll') + '</div>';
  }

  var root = $('#app-course');
  root.innerHTML = chrome() + '<main>' + hero() + '<div class="cp-wrap cp-main"><article class="cp-article">' + overview() + build() + who() + path() + syllabus() + tools() + how() + why() + instructor() + reviews() + media() + value() + faq() + '</article>' + rail() + '</div></main>' + closing();

  /* interactions: expand-all, scrollspy, sticky mobile bar */
  var all = $('#cpAll');
  all.addEventListener('click', function () { var d = $$('.cp-mod'), open = d.some(function (x) { return !x.open; }); d.forEach(function (x) { x.open = open; }); all.textContent = open ? 'Collapse all' : 'Expand all'; });
  var links = $$('[data-cp]');
  var spy = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('is-active', a.dataset.cp === e.target.id); }); }); }, { rootMargin: '-35% 0px -60% 0px' });
  nav.forEach(function (n) { var el = document.getElementById(n[0]); if (el) spy.observe(el); });
  var bar = $('#cpBar'), buy = $('#cp-buy');
  function sc() { var r = buy.getBoundingClientRect(), vis = r.top < innerHeight * .8 && r.bottom > 0 && innerWidth > 960; bar.classList.toggle('show', scrollY > 600 && !vis); }
  window.addEventListener('scroll', sc, { passive: true }); sc();
})();
