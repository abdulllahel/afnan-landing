# Afnan — AI for Developers · 5 design directions

Static HTML/CSS/JS, no build step.

    cd /Users/abdullahel/Documents/Afnan-Landing
    python3 -m http.server 5173      # then open http://localhost:5173

- Tab bar (top): Lattice · Superhuman · Monospace · Folk · Maven · Course Page (keys 1–6; `#v=course` deep-links). "Course Page" has its own layout (js/app-course.js + css/course-page.css) and its own "Scholar Green" design system.
- `design-system.html`: palette, type, radius, buttons, cards for each direction.
- `js/tokens.js` = design tokens (edit colors/fonts here). `js/content.js` = all copy (one source for all 5). `css/theme-*.css` = layout + vibe per direction.
- Assets are pulled from afnanmahmud.com/ai-for-developers. The demo video is streamed from that site (not copied, 37 MB).
