(function () {
  var C = window.C, $ = function (id) { return document.getElementById(id); };
  var set = function (id, html) { var n = $(id); if (n) n.innerHTML = html; };
  var li = function (arr) { return arr.map(function (x) { return '<li>' + x + '</li>'; }).join(''); };

  set('h1', C.hero.title);
  set('lede', C.hero.sub);

    set('pipe-h', C.workflow.title.replace('Workflow-', 'Workflow‑'));
  set('pipe-sub', '<b>' + C.workflow.lead + '</b> ' + C.workflow.sub);
  var stages = C.workflow.stages, count = stages.length;
  set('pipe', stages.map(function (s, i) {
    return '<button type="button" role="tab" id="t' + i + '" aria-controls="stage" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '"><span class="dot"></span><span class="nm">' + s.k + '</span><span class="no">' + s.n + '</span></button>';
  }).join(''));
  var pipe = $('pipe'), tabs = [].slice.call(pipe.querySelectorAll('[role=tab]'));
  tabs.forEach(function (b, k) { b.style.setProperty('--k', k); });

    var track = document.createElement('div');
  track.className = 'track'; track.setAttribute('aria-hidden', 'true');
  for (var k = 0; k < count - 1; k++) track.appendChild(document.createElement('i'));
  pipe.appendChild(track);
  var segs = [].slice.call(track.children), cur = 0, prog = 0;

  function paint() {
    segs.forEach(function (s, k) { s.style.setProperty('--f', k < cur ? 1 : k === cur ? prog : 0); });
    tabs.forEach(function (b, j) { b.classList.toggle('done', j < cur); });
  }
  function show(i) {
    var s = stages[i]; cur = i; prog = 0; paint();
    tabs.forEach(function (b, j) { b.setAttribute('aria-selected', j === i); b.tabIndex = j === i ? 0 : -1; });
    $('stage').setAttribute('aria-labelledby', 't' + i);
    $('stage').innerHTML = '<div class="st-main"><h3>' + s.k + '</h3><p class="st-d">' + s.d + '</p><ul>' + li(s.pts) + '</ul></div>' +
      '<dl class="st-side"><div><dt>Tools</dt><dd class="mono">' + s.tools.join('  ·  ') + '</dd></div><div><dt>আপনার কাজ</dt><dd>' + s.you + '</dd></div><div><dt>শেষে পাবেন</dt><dd>' + s.out + '</dd></div><div><dt>কারিকুলামে</dt><dd class="mono">' + s.mod + '</dd></div></dl>';
    $('stage').classList.remove('swap'); void $('stage').offsetWidth; $('stage').classList.add('swap');
  }
  show(0);
  pipe.addEventListener('click', function (e) { var b = e.target.closest('[role=tab]'); if (b) show(+b.id.slice(1)); });
  pipe.addEventListener('keydown', function (e) {
    var to = null;
    if (e.key === 'ArrowRight') to = (cur + 1) % count;
    if (e.key === 'ArrowLeft') to = (cur + count - 1) % count;
    if (to !== null) { e.preventDefault(); show(to); tabs[to].focus(); }
  });

    var DWELL = 4000, hold = { hover: false, focus: false, view: false };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, canHover = window.matchMedia('(hover: hover)').matches;
  if (!reduce) {
    new IntersectionObserver(function (e) { hold.view = e[0].isIntersecting; }, { threshold: 0.35 }).observe($('pipeline'));
    if (canHover) [pipe, $('stage')].forEach(function (n) { n.addEventListener('mouseenter', function () { hold.hover = true; }); n.addEventListener('mouseleave', function () { hold.hover = false; }); });
    pipe.addEventListener('focusin', function () { hold.focus = true; });
    pipe.addEventListener('focusout', function () { hold.focus = false; });
    var last = 0;
    (function frame(t) {
      var dt = Math.min(t - (last || t), 1000); last = t;
      if (!document.hidden && !hold.hover && !hold.focus && hold.view && pipe.classList.contains('in')) {
        prog += dt / DWELL;
        if (prog >= 1) {
          var next = (cur + 1) % count;
          if (next === 0) { track.classList.add('retract'); setTimeout(function () { track.classList.remove('retract'); }, 800); }
          show(next);
          var b = tabs[next];
          if (pipe.scrollWidth > pipe.clientWidth) pipe.scrollTo({ left: b.offsetLeft - (pipe.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' });
        } else paint();
      }
      requestAnimationFrame(frame);
    })(0);
  }

    function stagesFor(n) {
    var k = +n, out = [];
    stages.forEach(function (s) { var m = s.mod.match(/(\d+)(?:–(\d+))?/), a = +m[1], b = m[2] ? +m[2] : a; if (k >= a && k <= b) out.push(s.k); });
    return out.join(', ');
  }
  set('mod-h', C.curriculum.head);
  set('mods', C.curriculum.modules.map(function (m, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary><span class="mn mono">' + m.n + '</span><span class="mt">' + m.t + '<small>' + m.o + '</small></span><span class="ms">' + stagesFor(m.n) + '</span><span class="mc">' + m.topics.length + '</span></summary><div class="mb"><ol>' + li(m.topics) + '</ol><p class="mm"><b>Tools</b> ' + m.tools + '</p></div></details>';
  }).join(''));

    set('build-h', C.build.title);
  set('build-sub', C.build.sub);
  var wire = [
    '<div class="wf wf-web"><i></i><i></i><i></i><b></b><u></u><u></u><s></s></div>',
    '<div class="wf wf-dash"><aside></aside><div><b></b><em></em><em></em><em></em></div></div>',
    '<div class="wf wf-phone"><b></b><u></u><u></u><s></s></div>'
  ];
  set('outs', C.build.projects.map(function (p, i) {
    return '<article class="out">' + wire[i] + '<h3>' + p.t + '</h3><p>' + p.d + '</p><p class="mono small">' + p.tech.join('  ·  ') + '</p><p class="small">' + p.mods + '</p></article>';
  }).join('') + '<ul class="outs-more">' + C.build.outcomes.map(function (o) { return '<li><b>' + o.k + '</b> ' + o.d + '</li>'; }).join('') + '</ul>');

    set('aud-h', C.audience.title);
  set('who-list', C.audience.items.map(function (x) { return '<div><h3>' + x.k + '</h3><p>' + x.d + '</p></div>'; }).join('') + '<p class="small wide">' + C.audience.note + '</p>');

    var n = C.instructor;
  set('ins-name', n.name); set('ins-role', n.role); set('ins-bio', n.bio);
  set('vent', n.ventures.map(function (v) { return '<div><dt>' + v.k + '<small>' + v.r + '</small></dt><dd>' + v.d + '</dd></div>'; }).join(''));

    set('rev-h', C.reviews.title);
  set('quotes', C.reviews.items.map(function (r) { return '<figure><blockquote>' + r.q + '</blockquote><figcaption>' + r.n + '</figcaption></figure>'; }).join(''));
  set('press', '<h3>' + C.media.title + '</h3>' + C.media.items.map(function (m) { return '<div class="clip"><img src="../' + m.img + '" alt="' + m.src + '-এর প্রতিবেদন" loading="lazy"><p><span>' + m.src + ', ' + m.date + '</span>' + m.h + '</p></div>'; }).join(''));

    var p = C.pricing;
  set('inv', '<tbody>' + p.rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '<tr class="total"><td>' + p.total[0] + '</td><td><s>' + p.total[1] + '</s></td></tr></tbody>');
  set('stack-note', C.stack.note);
  set('bc-warn', '<b>' + p.card.warn1 + '</b> ' + p.card.warn2);

    set('faq-h', C.faq.title);
  set('faq-list', C.faq.items.map(function (q, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join(''));
  set('contact', 'WhatsApp ' + C.footer.phone + '<br>' + C.footer.email);

  set('closing-h', C.final.title);
  set('foot-about', C.footer.about);
  set('foot-contact', C.footer.email + '<br>' + C.footer.phone);
  set('copy', C.footer.copy);

  var bar = $('bar'), act = document.querySelector('.hero-act');
  function sync() { bar.classList.toggle('show', act.getBoundingClientRect().bottom < 0); }
  window.addEventListener('scroll', sync, { passive: true }); sync();
  var top = $('top'); window.addEventListener('scroll', function () { top.classList.toggle('scrolled', scrollY > 8); }, { passive: true });
})();
