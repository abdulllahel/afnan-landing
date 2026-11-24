(function () {
  var C = window.C;

  var dlg = document.createElement('div');
  dlg.className = 'dlg'; dlg.hidden = true; dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true'); dlg.setAttribute('aria-label', 'Demo class');
  dlg.innerHTML = '<div class="dlg-in"><button type="button" class="dlg-x" aria-label="Close">Close</button><video controls playsinline preload="none" poster="../' + C.img.poster + '"></video><p class="dlg-err" hidden>ভিডিওটি লোড হয়নি, একটু পরে আবার চেষ্টা করুন।</p></div>';
  document.body.appendChild(dlg);
  var vid = dlg.querySelector('video'), err = dlg.querySelector('.dlg-err'), last = null;

  function open(b) { last = b; dlg.hidden = false; document.body.classList.add('no-scroll'); err.hidden = true; vid.src = C.img.video; dlg.querySelector('.dlg-x').focus(); }
  function close() { vid.pause(); vid.removeAttribute('src'); vid.load(); dlg.hidden = true; document.body.classList.remove('no-scroll'); if (last) last.focus(); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.js-demo');
    if (t) { open(t); return; }
    if (e.target === dlg || (e.target.closest && e.target.closest('.dlg-x'))) close();
  });
  vid.addEventListener('error', function () { err.hidden = false; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dlg.hidden) close(); });

  document.querySelectorAll('[data-enroll]').forEach(function (a) { a.href = window.ENROLL_URL; a.target = '_blank'; a.rel = 'noopener'; });
})();
