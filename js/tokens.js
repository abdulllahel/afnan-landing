/* Design-system tokens for the five Afnan landing-page directions.
   Colors come from the Figma "Design system" frames (lattice.com, superhuman.com,
   monospace.io, folk.app). Maven has no design-system frame, so its tokens are
   derived from the captured Maven screenshots (navy / lavender / lime). */
window.THEMES = {
  lattice: {
    label: 'Lattice', vibe: 'Warm, friendly, pastel cards, green primary',
    source: 'lattice.com — Figma design-system frame',
    vars: {
      bg:'#FAF8F8', surface:'#FFFFFF', surface2:'#F4EFFE', ink:'#1A1F2E', muted:'#50565D', line:'rgba(26,26,51,.10)',
      primary:'#027653', primaryInk:'#FFFFFF', primarySoft:'#C4F7CA', accent:'#6F47B4', accentSoft:'#E9DFFE',
      dark:'#1A1F2E', darkInk:'#FFFFFF', danger:'#AE2941',
      t1:'#FCF6D9', t2:'#E4FDE7', t3:'#F4EFFE', t4:'#FEECF6', t5:'#E2F5FE', t6:'#F3FAD5', t7:'#FFEFE3',
      rCard:'28px', rBtn:'16px', rChip:'999px', shadow:'none',
      fDisplay:"'Plus Jakarta Sans'", fBody:"'Plus Jakarta Sans'", fMono:"'IBM Plex Mono'", hWeight:'700', hTrack:'-0.03em'
    }
  },
  superhuman: {
    label: 'Superhuman', vibe: 'Calm, premium, warm neutrals with deep violet',
    source: 'superhuman.com — Figma design-system frame',
    vars: {
      bg:'#F2F0EB', surface:'#FFFFFF', surface2:'#F7F5F2', ink:'#292827', muted:'#6B6A66', line:'rgba(41,40,39,.12)',
      primary:'#714CB6', primaryInk:'#FFFFFF', primarySoft:'#E8E0FF', accent:'#3F256F', accentSoft:'#D4C7FF',
      dark:'#281647', darkInk:'#FFFFFF', danger:'#421D24',
      t1:'#E8E0FF', t2:'#DEDBD5', t3:'#D4C7FF', t4:'#F7F5F2', t5:'#DDEBF1', t6:'#E6EFE9', t7:'#EFE6E3',
      rCard:'20px', rBtn:'12px', rChip:'8px', shadow:'none',
      fDisplay:"'Instrument Sans'", fBody:"'Instrument Sans'", fMono:"'IBM Plex Mono'", hWeight:'500', hTrack:'-0.035em'
    }
  },
  monospace: {
    label: 'Monospace', vibe: 'Technical, crisp, mono labels, electric blue',
    source: 'monospace.io — Figma design-system frame',
    vars: {
      bg:'#FFFFFF', surface:'#FFFFFF', surface2:'#F9F9F9', ink:'#262626', muted:'#737373', line:'#E5E5E5',
      primary:'#2663EB', primaryInk:'#FFFFFF', primarySoft:'#DEE8FC', accent:'#FF8733', accentSoft:'#FFF4CC',
      dark:'#032F62', darkInk:'#FFFFFF', danger:'#DC2626',
      t1:'#F6F9FE', t2:'#DAF4F9', t3:'#DEE8FC', t4:'#FFF4CC', t5:'#DFF7F0', t6:'#F4F4F4', t7:'#FFE8D6',
      rCard:'10px', rBtn:'6px', rChip:'4px', shadow:'none',
      fDisplay:"'Inter'", fBody:"'Inter'", fMono:"'IBM Plex Mono'", hWeight:'600', hTrack:'-0.035em'
    }
  },
  folk: {
    label: 'Folk', vibe: 'Editorial, near-black, hairlines, olive and lilac panels',
    source: 'folk.app — Figma design-system frame',
    vars: {
      bg:'#FFFFFF', surface:'#FFFFFF', surface2:'#F1F1F1', ink:'#1C1B19', muted:'#626262', line:'#E1E1E1',
      primary:'#1C1B19', primaryInk:'#FFFFFF', primarySoft:'#E7E3DF', accent:'#2C4004', accentSoft:'#E5EBD3',
      dark:'#1C1B19', darkInk:'#FFFFFF', danger:'#C1432E',
      t1:'#E5EBD3', t2:'#D9C6E3', t3:'#C9CC8F', t4:'#E7E3DF', t5:'#F3D9C6', t6:'#CFDDE6', t7:'#E9E2C6',
      rCard:'20px', rBtn:'999px', rChip:'999px', shadow:'none',
      fDisplay:"'Inter Tight'", fBody:"'Inter'", fMono:"'IBM Plex Mono'", hWeight:'500', hTrack:'-0.045em'
    }
  },
  maven: {
    label: 'Maven', vibe: 'Course-marketplace, navy and lavender, lime highlights',
    source: 'maven.com — derived from captured screenshots (no design-system frame)',
    vars: {
      bg:'#EBEEF8', surface:'#FFFFFF', surface2:'#F5F6FB', ink:'#0A0B2E', muted:'#5B5F7A', line:'#D8DCEC',
      primary:'#0A0B2E', primaryInk:'#FFFFFF', primarySoft:'#D8DCEC', accent:'#B8F25A', accentSoft:'#EAFBC4',
      dark:'#080A2C', darkInk:'#FFFFFF', danger:'#D6455D',
      t1:'#EAFBC4', t2:'#DDE3FA', t3:'#F5F6FB', t4:'#FFF3C7', t5:'#E3F3FA', t6:'#EFE6FA', t7:'#FFE5E0',
      rCard:'14px', rBtn:'10px', rChip:'999px', shadow:'none',
      fDisplay:"'DM Sans'", fBody:"'DM Sans'", fMono:"'IBM Plex Mono'", hWeight:'600', hTrack:'-0.03em'
    }
  }
,
  course: {
    label: 'Course Page', layout: 'page',
    vibe: 'Editorial course page: serif headlines, navy chrome, forest green action, sticky enroll card',
    source: 'Original system ("Scholar Green"), layout inspired by a Maven course page',
    vars: {
      bg:'#FFFFFF', surface:'#FFFFFF', surface2:'#F6F4EF', ink:'#14172B', muted:'#5E6275', line:'#E4E2DA',
      primary:'#2F6B3F', primaryInk:'#FFFFFF', primarySoft:'#E3EEDF', accent:'#E8A33D', accentSoft:'#FCEFD6',
      dark:'#0B1230', darkInk:'#FFFFFF', danger:'#B3402E',
      t1:'#E3EEDF', t2:'#E8ECF7', t3:'#FCEFD6', t4:'#F6F4EF', t5:'#E1EFEF', t6:'#EFE6F4', t7:'#F5E4DE',
      rCard:'12px', rBtn:'8px', rChip:'6px', shadow:'none',
      fDisplay:"'Inter Tight','Akhand Bengali'", fBody:"'Inter'", fMono:"'IBM Plex Mono'", hWeight:'500', hTrack:'-0.01em'
    }
  }
};
window.THEME_ORDER = ['lattice', 'superhuman', 'monospace', 'folk', 'maven', 'course'];

/* Inject tokens as CSS custom properties: html[data-theme="x"] { --bg: ... } */
(function () {
  var css = '';
  Object.keys(THEMES).forEach(function (k) {
    css += 'html[data-theme="' + k + '"]{';
    Object.entries(THEMES[k].vars).forEach(function (e) {
      css += '--' + e[0].replace(/[A-Z]/g, function (m) { return '-' + m.toLowerCase(); }) + ':' + e[1] + ';';
    });
    css += '}\n';
  });
  var s = document.createElement('style'); s.id = 'theme-tokens'; s.textContent = css; document.head.appendChild(s);
})();
