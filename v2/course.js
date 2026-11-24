(function () {
  var C = window.C, $ = function (id) { return document.getElementById(id); };
  var set = function (id, html) { var n = $(id); if (n) n.innerHTML = html; };
  var li = function (arr) { return arr.map(function (x) { return '<li>' + x + '</li>'; }).join(''); };

  set('h1', C.hero.title);
  set('lede', C.hero.sub);
  set('intro-p', C.hero.side2);
  set('intro-list', li(['Recorded lesson, lifetime access, নিজের সময়ে শিখুন', 'আটকে গেলে WhatsApp ও Facebook community-তে জিজ্ঞেস করতে পারবেন', 'Real project-এর source code আর AI Prompts library', 'Course update আর community support']));

    var a = C.approach;
  set('approach', '<div><h3>সাধারণত যা হয়</h3><ul class="dash">' + li(a.old) + '</ul></div><div><h3>এই কোর্সে</h3><ul class="tick">' + li(a.neu) + '</ul><p class="note">' + a.caveat + '</p></div>');

    set('build-h', C.build.title);
  set('build-sub', C.build.sub);
  set('outcomes', C.build.outcomes.map(function (o) { return '<div><dt>' + o.k + '</dt><dd><p>' + o.d + '</p><p class="muted">' + o.tags.join(', ') + '</p></dd></div>'; }).join(''));
  set('projects', '<div class="tr th" role="row"><span>Project</span><span>কী থাকবে</span><span>Stack</span><span>Module</span></div>' + C.build.projects.map(function (p) {
    return '<div class="tr" role="row"><span class="td-t" role="cell"><b>' + p.t + '</b><small>' + p.plat + '</small></span><span role="cell">' + p.feats.join(', ') + '</span><span role="cell">' + p.tech.join(', ') + '</span><span role="cell">' + p.mods.replace('Module ', '') + '</span></div>';
  }).join(''));

    set('aud-h', C.audience.title);
  set('audience-list', C.audience.items.map(function (x) { return '<div><h3>' + x.k + '</h3><p>' + x.d + '</p></div>'; }).join('') + '<p class="note wide">' + C.audience.note + '</p>');

    set('path-sub', C.workflow.sub);
  set('stages', C.workflow.stages.map(function (s) {
    return '<li><span class="n">' + s.n + '</span><div><h3>' + s.k + '</h3><p>' + s.d + '</p><ul class="pts">' + li(s.pts) + '</ul><p class="meta">Tools: ' + s.tools.join(', ') + '<br>Output: ' + s.out + '<br>' + s.mod + '</p></div></li>';
  }).join(''));

    set('syl-h', C.curriculum.head);
  set('modules', C.curriculum.modules.map(function (m, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary><span class="m-n">' + m.n + '</span><span class="m-t">' + m.t + '<small>' + m.o + '</small></span><span class="m-c">' + m.topics.length + ' topic</span></summary><ol>' + li(m.topics) + '</ol><p class="m-meta"><b>Tools:</b> ' + m.tools + '</p></details>';
  }).join(''));

    set('tools-list', '<dl><dt class="g">AI tools</dt>' + C.stack.ai.map(function (t) { return '<div><dt>' + t.k + '</dt><dd>' + t.d + '</dd></div>'; }).join('') + '</dl><dl><dt class="g">Development stack</dt>' + C.stack.dev.map(function (t) { return '<div><dt>' + t.k + '</dt><dd>' + t.d + '</dd></div>'; }).join('') + '</dl>');
  set('tools-note', C.stack.note);

    set('how-h', C.how.title);
  set('how-list', C.how.steps.map(function (s) { return '<li><h3>' + s.k + '</h3><p>' + s.d + ' ' + s.more + '</p></li>'; }).join(''));

    var n = C.instructor;
  set('ins-name', n.name); set('ins-role', n.role); set('ins-bio', n.bio);
  set('ventures', n.ventures.map(function (v) { return '<div><dt>' + v.k + '<small>' + v.r + '</small></dt><dd>' + v.d + '</dd></div>'; }).join(''));

    set('rev-h', C.reviews.title);
  set('quotes', C.reviews.items.map(function (r) { return '<figure><blockquote>' + r.q + '</blockquote><figcaption>' + r.n + ', student</figcaption></figure>'; }).join(''));

    set('news-h', C.media.title);
  set('clips', C.media.items.map(function (m) { return '<div class="clip"><img src="../' + m.img + '" alt="' + m.src + '-এর প্রতিবেদন" loading="lazy"><div><p class="src">' + m.src + ', ' + m.date + '</p><h3>' + m.h + '</h3></div></div>'; }).join(''));

    var p = C.pricing;
  set('bill', '<tbody>' + p.rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '<tr class="total"><td>' + p.total[0] + '</td><td><s>' + p.total[1] + '</s></td></tr></tbody><tfoot><tr><td colspan="2">আজ আপনার জন্য <b>৳990</b> — ' + p.card.save + '</td></tr></tfoot>');

    set('faq-h', C.faq.title);
  set('faq-list', C.faq.items.map(function (q, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join(''));

    set('ticket-note', '<b>' + p.card.warn1 + '</b> ' + p.card.warn2 + ' ' + p.card.guarantee);
  set('phone', C.footer.phone);
  set('closing-h', C.final.title);
  set('foot-about', C.footer.about);
  set('foot-contact', C.footer.email + '<br>' + C.footer.phone);
  set('copy', C.footer.copy);

    var bar = $('bar'), buy = document.querySelector('.buy');
  function sync() { var r = buy.getBoundingClientRect(); bar.classList.toggle('show', r.bottom < 0); }
  window.addEventListener('scroll', sync, { passive: true }); sync();
    var top = $('top'); window.addEventListener('scroll', function () { top.classList.toggle('scrolled', scrollY > 8); }, { passive: true });
})();

