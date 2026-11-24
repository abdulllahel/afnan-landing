(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.22,1,.36,1)';

    if (!reduce) {
    document.querySelectorAll('details').forEach(function (d) {
      var s = d.querySelector('summary'), anim = null;
      function done() { d.style.height = ''; d.style.overflow = ''; anim = null; }
      s.addEventListener('click', function (e) {
        e.preventDefault();
        var from = d.getBoundingClientRect().height, opening = !d.open;
        if (anim) anim.cancel();
        d.style.overflow = 'hidden';
        if (opening) d.open = true;
        var to = opening ? d.scrollHeight : s.getBoundingClientRect().height;
        anim = d.animate({ height: [from + 'px', to + 'px'] }, { duration: opening ? 520 : 380, easing: EASE });
        anim.onfinish = function () { if (!opening) d.open = false; done(); };
        anim.oncancel = done;
      });
    });
  }

  if (!root.classList.contains('motion')) return;

    var top = document.querySelector('.top'), lastY = window.scrollY;
  if (top) addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 160 && y > lastY + 6) top.classList.add('hide');
    else if (y < lastY - 6 || y < 160) top.classList.remove('hide');
    lastY = y;
  }, { passive: true });

    var heads = [];
  document.querySelectorAll('h1,h2').forEach(function (h) {
    if (h.closest('.dlg')) return;
    var text = h.textContent.trim().replace(/\s+/g, ' ');
    if (!text) return;
    var words = text.split(' '), frag = document.createDocumentFragment();
    h.setAttribute('aria-label', text);
    words.forEach(function (w, i) {
      var o = document.createElement('span'), inn = document.createElement('span');
      o.className = 'w'; o.setAttribute('aria-hidden', 'true'); inn.className = 'wi'; inn.style.setProperty('--i', i); inn.textContent = w;
      o.appendChild(inn); frag.appendChild(o);
      if (i < words.length - 1) frag.appendChild(document.createTextNode(' '));
    });
    h.textContent = ''; h.appendChild(frag); h.classList.add('sp');
    heads.push(h);
  });

    var ROW = '.rows>div,.table .tr,.steps>li,.syl details,.faq details,.mods details,.bill tr,.inv tr,.ventures>div,.vent>div,.two-col>div,.who>div,.flow li,.split>div,.out,.quotes figure';
  var BLOCK = '.sec-head>p,.prose,.plain,.sub-h,.person>div,.tools dl,.bill tfoot,.faq-side>p,.outs-more,.ins-grid>div:not(.ins-photo)>*:not(h2),.press>h3,.clip>div,.clip>p,.buycard,.stage,.closing p,.closing-act,.note,' + ROW;
  var MEDIA = '.person img,.ins-photo img,.clip img';

  var seen = new Set(), list = [];
  document.querySelectorAll(BLOCK).forEach(function (el) {
    if (el.closest('.hero') || seen.has(el)) return;
    for (var p = el.parentElement; p; p = p.parentElement) if (seen.has(p)) return;
    seen.add(el); list.push(el);
  });
  list.forEach(function (el) { el.setAttribute('data-rv', el.matches(ROW) ? 'row' : 'block'); });
  var media = [].slice.call(document.querySelectorAll(MEDIA));
  media.forEach(function (el) { el.setAttribute('data-media', ''); });

  var io = new IntersectionObserver(function (entries) {
    var vis = entries.filter(function (e) { return e.isIntersecting; }).sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
    vis.forEach(function (e, i) {
      e.target.style.setProperty('--d', Math.min(i, 5) * 90 + 'ms');
      e.target.classList.add('in'); io.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  heads.filter(function (h) { return !h.closest('.hero'); }).concat(list, media).forEach(function (el) { io.observe(el); });

    var hh = document.querySelector('.hero h1');
  if (hh) (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(function () { hh.classList.add('in'); }, 60); });

    var settle;
  addEventListener('scroll', function () {
    clearTimeout(settle);
    settle = setTimeout(function () {
      heads.concat(list, media).forEach(function (el) {
        if (el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if (r.top < innerHeight * 0.92 && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
      });
    }, 200);
  }, { passive: true });

    var par = document.querySelector('.hero-media .video, .hero-fig .marks'), ticking = false;
  if (par) addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { par.style.transform = 'translate3d(0,' + Math.min(window.scrollY, 700) * 0.07 + 'px,0)'; ticking = false; });
  }, { passive: true });

    var pipe = document.querySelector('.pipe');
  if (pipe) {
    var po = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { pipe.classList.add('in'); po.disconnect(); } }, { threshold: 0.4 });
    po.observe(pipe);
  }
})();
