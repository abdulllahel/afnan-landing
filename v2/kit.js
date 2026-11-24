(function () {
  var C = window.C, $ = function (id) { return document.getElementById(id); };
  var set = function (id, html) { var n = $(id); if (n) n.innerHTML = html; };
  var li = function (arr) { return arr.map(function (x) { return '<li>' + x + '</li>'; }).join(''); };
  var chips = function (arr) { return '<ul class="chips">' + li(arr) + '</ul>'; };

  set('h1', C.hero.title);
  set('lede', C.hero.sub);
  set('facts', C.facts.slice(0, 4).map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>'; }).join(''));
  set('intro-p', C.hero.side2);

  var a = C.approach;
  set('approach', '<div class="old"><h3>সাধারণত যা হয়</h3><ul class="dash">' + li(a.old) + '</ul></div><div class="neu"><h3>এই কোর্সে</h3><ul class="tick">' + li(a.neu) + '</ul><p class="note">' + a.caveat + '</p></div>');

  set('build-h', C.build.title);
  set('build-sub', C.build.sub);
  set('outcomes', C.build.outcomes.map(function (o, i) { return '<div class="card c' + (i % 4) + '"><h3>' + o.k + '</h3><p>' + o.d + '</p>' + chips(o.tags) + '</div>'; }).join(''));
  set('projects', C.build.projects.map(function (p, i) {
    return '<div class="card"><span class="tag">' + p.plat + '</span><h3>' + p.t + '</h3><p>' + p.feats.join(', ') + '</p><p class="meta"><b>Stack</b> ' + p.tech.join(', ') + '<br><b>Module</b> ' + p.mods.replace('Module ', '') + '</p></div>';
  }).join(''));

  set('aud-h', C.audience.title);
  set('audience-list', C.audience.items.map(function (x, i) { return '<div class="card c' + (i % 4) + '"><h3>' + x.k + '</h3><p>' + x.d + '</p></div>'; }).join(''));
  set('aud-note', C.audience.note);

  set('path-sub', C.workflow.sub);
  set('stages', C.workflow.stages.map(function (s) {
    return '<li class="card"><span class="n">' + s.n + '</span><h3>' + s.k + '</h3><p>' + s.d + '</p><p class="meta"><b>Tools</b> ' + s.tools.join(', ') + '<br><b>Output</b> ' + s.out + '</p></li>';
  }).join(''));

  set('syl-h', C.curriculum.head);
  set('modules', C.curriculum.modules.map(function (m, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary><span class="m-n">' + m.n + '</span><span class="m-t">' + m.t + '<small>' + m.o + '</small></span><span class="m-c">' + m.topics.length + ' topic</span></summary><ol>' + li(m.topics) + '</ol><p class="m-meta"><b>Tools:</b> ' + m.tools + '</p></details>';
  }).join(''));

  set('tools-list', '<dl class="card"><dt class="g">AI tools</dt>' + C.stack.ai.map(function (t) { return '<div><dt>' + t.k + '</dt><dd>' + t.d + '</dd></div>'; }).join('') + '</dl><dl class="card"><dt class="g">Development stack</dt>' + C.stack.dev.map(function (t) { return '<div><dt>' + t.k + '</dt><dd>' + t.d + '</dd></div>'; }).join('') + '</dl>');
  set('tools-note', C.stack.note);

  set('how-h', C.how.title);
  set('how-list', C.how.steps.map(function (s, i) { return '<li class="card"><span class="n">' + (i + 1) + '</span><h3>' + s.k + '</h3><p>' + s.d + ' ' + s.more + '</p></li>'; }).join(''));

  var n = C.instructor;
  set('ins-name', n.name); set('ins-role', n.role); set('ins-bio', n.bio);
  set('ventures', n.ventures.map(function (v) { return '<div class="card"><dt>' + v.k + '<small>' + v.r + '</small></dt><dd>' + v.d + '</dd></div>'; }).join(''));

  set('rev-h', C.reviews.title);
  set('quotes', C.reviews.items.map(function (r) { return '<figure class="card"><blockquote>' + r.q + '</blockquote><figcaption>' + r.n + ', student</figcaption></figure>'; }).join(''));

  set('news-h', C.media.title);
  set('clips', C.media.items.map(function (m) { return '<div class="clip card"><img src="../' + m.img + '" alt="' + m.src + '-এর প্রতিবেদন" loading="lazy"><div><p class="src">' + m.src + ', ' + m.date + '</p><h3>' + m.h + '</h3></div></div>'; }).join(''));

  var p = C.pricing;
  set('bill', '<tbody>' + p.rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '<tr class="total"><td>' + p.total[0] + '</td><td><s>' + p.total[1] + '</s></td></tr></tbody><tfoot><tr><td colspan="2">আজ আপনার জন্য <b>৳990</b> — ' + p.card.save + '</td></tr></tfoot>');

  set('faq-h', C.faq.title);
  set('faq-list', C.faq.items.map(function (q, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join(''));

  set('ticket-note', '<b>' + p.card.warn1 + '</b> ' + p.card.warn2 + ' ' + p.card.guarantee);
  set('closing-h', C.final.title);
  set('foot-about', C.footer.about);
  set('foot-contact', C.footer.email + '<br>' + C.footer.phone);
  set('copy', C.footer.copy);

  var bar = $('bar'), buy = document.querySelector('.buy');
  function sync() { var r = buy.getBoundingClientRect(); bar.classList.toggle('show', r.bottom < 0); }
  window.addEventListener('scroll', sync, { passive: true }); sync();
  var top = $('top'); window.addEventListener('scroll', function () { top.classList.toggle('scrolled', scrollY > 8); }, { passive: true });
})();
