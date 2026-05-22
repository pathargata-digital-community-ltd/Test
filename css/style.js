/* ===================== RESET & ROOT ===================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --bg: #07090f;
  --bg2: #0e1220;
  --bg3: #141926;
  --bg4: #1a2235;
  --teal: #00d4aa;
  --teal2: #00b892;
  --purple: #7c3aed;
  --amber: #f59e0b;
  --red: #ef4444;
  --pink: #ec4899;
  --green: #22c55e;
  --text1: #eef2ff;
  --text2: #8b9ec9;
  --text3: #4a5a7a;
  --border: rgba(255,255,255,0.07);
  --glow: rgba(0,212,170,0.2);
  --nav-h: 64px;
  --top-h: 56px;
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --radius: 16px;
}

html, body {
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  font-family: 'Hind Siliguri', sans-serif;
  color: var(--text1);
  -webkit-font-smoothing: antialiased;
}

/* ===================== TOPBAR ===================== */
.topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--top-h);
  background: rgba(7,9,15,0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 10px;
  z-index: 50;
}

.logo-mark {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--teal), var(--purple));
  border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  font-size: 17px;
  flex-shrink: 0;
  box-shadow: 0 0 14px var(--glow);
}

.logo-name {
  font-size: 19px;
  font-weight: 700;
  background: linear-gradient(90deg, var(--teal), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.3px;
}

.top-spacer { flex: 1; }

.icon-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--bg4);
  border: 1px solid var(--border);
  color: var(--text2);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  transition: background .2s, color .2s;
  flex-shrink: 0;
}
.icon-btn:active { background: var(--teal); color: #000; }

.notif-dot {
  position: absolute;
  top: 3px; right: 3px;
  width: 8px; height: 8px;
  background: var(--red);
  border-radius: 50%;
  border: 2px solid var(--bg);
  box-shadow: 0 0 6px var(--red);
}

.my-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 2px solid var(--teal);
  object-fit: cover;
  box-shadow: 0 0 8px var(--glow);
}

/* ===================== PAGES CONTAINER ===================== */
.pages {
  position: fixed;
  top: var(--top-h);
  left: 0; right: 0;
  bottom: calc(var(--nav-h) + var(--safe-bottom));
  overflow: hidden;
}

.page {
  position: absolute;
  inset: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  padding: 12px 12px 16px;
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity .25s ease, transform .25s ease;
  scrollbar-width: none;
}
.page::-webkit-scrollbar { display: none; }
.page.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

/* ===================== BOTTOM NAVBAR ===================== */
.bottom-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: calc(var(--nav-h) + var(--safe-bottom));
  background: rgba(7,9,15,0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  padding-top: 6px;
  z-index: 50;
}

.nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  cursor: pointer;
  border: none;
  background: none;
  color: var(--text3);
  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  transition: color .2s;
  position: relative;
}
.nav-btn i {
  font-size: 20px;
  transition: transform .25s cubic-bezier(.34,1.56,.64,1), color .2s;
}
.nav-btn.active { color: var(--teal); }
.nav-btn.active i { transform: scale(1.2); }

.nav-btn .nav-badge {
  position: absolute;
  top: 4px;
  left: calc(50% + 6px);
  background: var(--red);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  width: 15px; height: 15px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--bg);
}

.nav-post-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 2px 0 6px;
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  color: var(--text3);
}
.nav-post-btn .post-circle {
  width: 44px; height: 44px;
  background: linear-gradient(135deg, var(--teal), var(--purple));
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 4px 18px var(--glow), 0 0 0 3px rgba(0,212,170,0.15);
  transition: transform .2s cubic-bezier(.34,1.56,.64,1), box-shadow .2s;
}
.nav-post-btn:active .post-circle { transform: scale(0.9); }

/* ===================== CARDS ===================== */
.card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 12px;
  overflow: hidden;
  animation: slideUp .35s ease both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===================== STORIES ===================== */
.stories-scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 0 0 8px;
  margin-bottom: 12px;
  scrollbar-width: none;
}
.stories-scroll::-webkit-scrollbar { display: none; }

.story-bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  cursor: pointer;
}

.story-ring {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--teal), var(--purple), var(--amber));
  padding: 2.5px;
  position: relative;
  transition: transform .2s cubic-bezier(.34,1.56,.64,1);
}
.story-ring:active { transform: scale(0.92); }
.story-ring.seen { background: var(--bg4); }
.story-ring img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid var(--bg2);
}

.story-add-ring {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: var(--bg3);
  border: 2px dashed rgba(0,212,170,0.4);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  color: var(--teal);
  cursor: pointer;
  transition: transform .2s;
}
.story-add-ring:active { transform: scale(0.92); }

.story-label {
  font-size: 11px;
  color: var(--text2);
  text-align: center;
  width: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===================== CREATE POST INLINE ===================== */
.create-bar {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: border-color .2s;
}
.create-bar:active { border-color: var(--teal); }

.create-placeholder {
  flex: 1;
  background: var(--bg4);
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 14px;
  color: var(--text3);
}

.create-icons { display: flex; gap: 6px; }
.create-icon {
  width: 34px; height: 34px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}

/* ===================== POST CARD ===================== */
.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 13px 8px;
}
.post-av {
  width: 42px; height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(0,212,170,0.35);
  flex-shrink: 0;
}
.post-info { flex: 1; min-width: 0; }
.post-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text1);
  display: flex; align-items: center; gap: 5px;
}
.post-name .vc { color: var(--teal); font-size: 12px; }
.post-meta-row { font-size: 11.5px; color: var(--text3); margin-top: 1px; }

.post-more-btn {
  background: none; border: none;
  color: var(--text3); font-size: 16px;
  cursor: pointer; padding: 6px; border-radius: 8px;
}

.post-body {
  padding: 0 13px 10px;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--text1);
}

.post-img {
  width: 100%;
  display: block;
  max-height: 340px;
  object-fit: cover;
}

.post-tags {
  padding: 8px 13px 0;
  display: flex; flex-wrap: wrap; gap: 6px;
}
.tag-pill {
  background: rgba(0,212,170,0.1);
  color: var(--teal);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
}

.post-stats {
  display: flex;
  align-items: center;
  padding: 10px 13px 6px;
  font-size: 12.5px;
  color: var(--text3);
  gap: 6px;
  border-bottom: 1px solid var(--border);
}
.react-emojis { display: flex; gap: 1px; }
.react-emojis span { font-size: 14px; }
.stat-sep { margin: 0 2px; }

.post-actions { display: flex; padding: 2px 6px; }
.pa {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: none; border: none;
  color: var(--text2);
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  transition: background .15s, color .15s;
}
.pa:active { background: rgba(255,255,255,0.06); }
.pa.liked { color: var(--red); }
.pa i { font-size: 16px; }

/* ===================== COMMENT SECTION ===================== */
.comment-box {
  display: none;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
  background: var(--bg3);
}
.comment-box.open { display: block; }

.comment-input-row {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}
.comment-input {
  flex: 1;
  background: var(--bg4);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 9px 14px;
  font-family: inherit;
  font-size: 13.5px;
  color: var(--text1);
  outline: none;
}
.comment-input:focus { border-color: var(--teal); }
.comment-input::placeholder { color: var(--text3); }

.send-btn {
  width: 34px; height: 34px;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  border: none; border-radius: 50%;
  color: #000; font-size: 13px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.comment-item {
  display: flex; gap: 8px; margin-bottom: 10px;
  animation: slideUp .2s ease both;
}
.c-av {
  width: 30px; height: 30px;
  border-radius: 50%; object-fit: cover; flex-shrink: 0;
}
.c-bubble {
  background: var(--bg4);
  border-radius: 12px;
  padding: 7px 12px; flex: 1;
}
.c-author { font-size: 12px; font-weight: 600; color: var(--teal); margin-bottom: 2px; }
.c-text { font-size: 13px; color: var(--text1); line-height: 1.5; }

/* ===================== PAGE: EXPLORE ===================== */
.explore-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.explore-item {
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  aspect-ratio: 1;
  background: var(--bg3);
}
.explore-item:nth-child(3n+1) { grid-column: span 2; aspect-ratio: 2/1; }
.explore-item img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s;
}
.explore-item:active img { transform: scale(1.05); }
.explore-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
  display: flex; align-items: flex-end;
  padding: 10px;
}
.explore-label {
  font-size: 12.5px; font-weight: 600;
  color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}

/* Section header */
.section-head {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 12px;
}
.section-head h2 {
  font-size: 16px; font-weight: 700; color: var(--text1);
  display: flex; align-items: center; gap: 6px;
}
.section-head h2 i { color: var(--teal); font-size: 15px; }
.see-all {
  margin-left: auto;
  font-size: 12.5px; color: var(--teal);
  cursor: pointer; font-weight: 600;
}

/* ===================== PAGE: REELS ===================== */
.reels-container { display: flex; flex-direction: column; gap: 10px; }

.reel-card {
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  background: var(--bg3);
  aspect-ratio: 9/16;
  max-height: 500px;
  cursor: pointer;
}
.reel-thumb {
  width: 100%; height: 100%;
  object-fit: cover; display: block; filter: brightness(.8);
}
.reel-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 14px;
}
.reel-play {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 52px; height: 52px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(6px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; color: #fff;
}
.reel-author {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 6px;
}
.reel-av {
  width: 32px; height: 32px;
  border-radius: 50%; border: 2px solid var(--teal); object-fit: cover;
}
.reel-name { font-size: 13.5px; font-weight: 600; color: #fff; }
.reel-caption { font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5; }

.reel-side-actions {
  position: absolute; right: 12px; bottom: 80px;
  display: flex; flex-direction: column; gap: 18px; align-items: center;
}
.reel-action {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  color: #fff; font-size: 11px; cursor: pointer;
}
.reel-action i { font-size: 24px; }
.reel-action .liked-reel { color: var(--red); }

/* ===================== PAGE: PROFILE ===================== */
.profile-cover {
  border-radius: var(--radius);
  overflow: hidden;
  height: 150px;
  position: relative;
  margin-bottom: 48px;
}
.profile-cover img { width: 100%; height: 100%; object-fit: cover; filter: brightness(.7); }
.profile-cover-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(7,9,15,1) 0%, transparent 60%);
}
.profile-avatar-wrap { position: absolute; bottom: -36px; left: 16px; }
.profile-big-av {
  width: 76px; height: 76px;
  border-radius: 50%; border: 3px solid var(--teal);
  object-fit: cover; box-shadow: 0 0 16px var(--glow);
}
.profile-info { padding: 0 14px 14px; }
.profile-name {
  font-size: 20px; font-weight: 700;
  display: flex; align-items: center; gap: 6px;
}
.profile-name .vc { color: var(--teal); font-size: 16px; }
.profile-handle { font-size: 13px; color: var(--text3); margin-top: 2px; }
.profile-bio { font-size: 14px; color: var(--text2); margin-top: 8px; line-height: 1.6; }

.profile-stats {
  display: flex; gap: 0;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden; margin: 14px 0;
}
.pstat {
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; padding: 12px 8px;
  border-right: 1px solid var(--border);
}
.pstat:last-child { border-right: none; }
.pstat-num { font-size: 18px; font-weight: 700; color: var(--text1); }
.pstat-label { font-size: 11px; color: var(--text3); margin-top: 2px; }

.profile-actions { display: flex; gap: 8px; margin-bottom: 16px; }
.btn-edit {
  flex: 1;
  background: var(--bg4); border: 1px solid var(--border);
  border-radius: 22px; padding: 10px;
  font-family: inherit; font-size: 14px; font-weight: 600;
  color: var(--text1); cursor: pointer;
  transition: border-color .2s;
}
.btn-edit:active { border-color: var(--teal); }
.btn-share-prof {
  width: 40px; height: 40px;
  background: var(--bg4); border: 1px solid var(--border);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text2); font-size: 16px; cursor: pointer;
}

.profile-posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px; border-radius: 12px; overflow: hidden;
}
.pgrid-item { aspect-ratio: 1; overflow: hidden; cursor: pointer; background: var(--bg3); }
.pgrid-item img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform .25s;
}
.pgrid-item:active img { transform: scale(1.08); }

/* ===================== PAGE: NOTIFICATIONS ===================== */
.notif-group-label {
  font-size: 12px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.8px;
  color: var(--text3); padding: 8px 2px 6px;
}
.notif-item {
  display: flex; gap: 10px;
  padding: 11px 10px; border-radius: 14px;
  margin-bottom: 4px; transition: background .15s; cursor: pointer;
}
.notif-item:active { background: var(--bg3); }
.notif-item.unread {
  background: rgba(0,212,170,0.05);
  border: 1px solid rgba(0,212,170,0.1);
}
.n-av { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.n-content { flex: 1; min-width: 0; }
.n-text { font-size: 13.5px; color: var(--text2); line-height: 1.5; }
.n-text strong { color: var(--text1); }
.n-time { font-size: 11.5px; color: var(--teal); margin-top: 3px; }
.n-dot {
  width: 8px; height: 8px; background: var(--teal);
  border-radius: 50%; flex-shrink: 0; margin-top: 8px;
  box-shadow: 0 0 6px var(--teal);
}
.n-thumb { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }

/* ===================== MODALS ===================== */
.sheet-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: none; align-items: flex-end;
}
.sheet-overlay.open { display: flex; }

.bottom-sheet {
  width: 100%;
  background: var(--bg2);
  border-radius: 22px 22px 0 0;
  border-top: 1px solid var(--border);
  padding-bottom: var(--safe-bottom);
  animation: sheetIn .3s cubic-bezier(.32,.72,0,1) both;
  max-height: 90vh; overflow-y: auto;
}

@keyframes sheetIn {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

.sheet-handle {
  width: 36px; height: 4px;
  background: var(--bg4); border-radius: 2px;
  margin: 12px auto 16px;
}
.sheet-title {
  font-size: 16px; font-weight: 700; text-align: center;
  padding: 0 20px 14px; border-bottom: 1px solid var(--border); color: var(--text1);
}
.sheet-body { padding: 16px; }

.post-textarea {
  width: 100%;
  background: var(--bg4); border: 1px solid var(--border);
  border-radius: 14px; padding: 13px;
  font-family: inherit; font-size: 15px; color: var(--text1);
  resize: none; min-height: 110px; outline: none; line-height: 1.7;
}
.post-textarea::placeholder { color: var(--text3); }
.post-textarea:focus { border-color: var(--teal); }

.sheet-media-row {
  display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap;
}
.media-chip {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  background: var(--bg3); border: 1px solid var(--border);
  border-radius: 20px; font-family: inherit;
  font-size: 13px; color: var(--text2);
  cursor: pointer; transition: all .15s;
}
.media-chip:active { border-color: var(--teal); color: var(--teal); }

.btn-publish {
  width: 100%;
  background: linear-gradient(135deg, var(--teal), var(--purple));
  color: #fff; border: none;
  border-radius: 14px; padding: 14px;
  font-family: inherit; font-size: 15px; font-weight: 700;
  cursor: pointer; margin-top: 14px;
  box-shadow: 0 6px 20px rgba(0,212,170,0.3);
  transition: transform .15s;
}
.btn-publish:active { transform: scale(0.97); }

/* ===================== STORY VIEWER ===================== */
.story-viewer {
  position: fixed; inset: 0;
  background: #000;
  z-index: 200;
  display: none; flex-direction: column;
}
.story-viewer.open { display: flex; }

.sv-topbar {
  position: absolute; top: 0; left: 0; right: 0;
  z-index: 10; padding: 12px 14px 0;
}
.sv-prog-bars { display: flex; gap: 4px; margin-bottom: 10px; }
.sv-prog {
  flex: 1; height: 2.5px;
  background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden;
}
.sv-prog-fill {
  height: 100%; background: #fff; width: 0; border-radius: 2px;
}
.sv-prog-fill.done { width: 100%; }
.sv-prog-fill.active { animation: svprog var(--dur, 5s) linear forwards; }
@keyframes svprog { from { width: 0; } to { width: 100%; } }

.sv-author { display: flex; align-items: center; gap: 10px; }
.sv-av {
  width: 36px; height: 36px;
  border-radius: 50%; border: 2px solid var(--teal); object-fit: cover;
}
.sv-name { font-size: 14px; font-weight: 600; color: #fff; }
.sv-close {
  margin-left: auto;
  background: rgba(255,255,255,0.15);
  border: none; width: 34px; height: 34px;
  border-radius: 50%; color: #fff; font-size: 15px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}

.sv-img-wrap { flex: 1; position: relative; overflow: hidden; }
.sv-img { width: 100%; height: 100%; object-fit: cover; }

/* ===================== MISC ===================== */
.search-box {
  background: var(--bg3); border: 1px solid var(--border);
  border-radius: 20px; padding: 10px 16px 10px 40px;
  font-family: inherit; font-size: 14px; color: var(--text1);
  width: 100%; outline: none; margin-bottom: 14px;
}
.search-box::placeholder { color: var(--text3); }
.search-wrap { position: relative; }
.search-wrap i {
  position: absolute; left: 14px; top: 50%;
  transform: translateY(-50%); color: var(--text3); font-size: 14px;
}

.trend-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.trend-pill {
  background: rgba(0,212,170,0.1);
  border: 1px solid rgba(0,212,170,0.2);
  border-radius: 20px; padding: 7px 14px;
  font-size: 13px; font-weight: 600; color: var(--teal);
  cursor: pointer; transition: background .15s;
}
.trend-pill:active { background: rgba(0,212,170,0.2); }

.suggest-row {
  display: flex; gap: 10px; overflow-x: auto;
  scrollbar-width: none; padding-bottom: 4px;
}
.suggest-row::-webkit-scrollbar { display: none; }
.suggest-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 14px; padding: 14px;
  flex-shrink: 0; width: 130px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  text-align: center;
}
.suggest-card img {
  width: 52px; height: 52px;
  border-radius: 50%; object-fit: cover;
  border: 2px solid rgba(0,212,170,0.3);
}
.suggest-card-name { font-size: 13px; font-weight: 600; color: var(--text1); }
.suggest-card-mutual { font-size: 11px; color: var(--text3); }

.btn-follow {
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  color: #000; border: none;
  border-radius: 16px; padding: 6px 14px;
  font-family: inherit; font-size: 12.5px; font-weight: 700;
  cursor: pointer; width: 100%; transition: opacity .15s;
}
.btn-follow.following {
  background: var(--bg4); color: var(--text2);
  border: 1px solid var(--border);
}
.btn-follow:active { opacity: 0.8; }