// ============================================================
// stories.js — স্টোরি ভিউয়ার লজিক
// ============================================================

import { STORIES } from './data.js';

let storyIdx = 0;
let storyTimer = null;

export function viewStory(idx) {
  storyIdx = idx;
  const sv = document.getElementById('storyViewer');
  sv.classList.add('open');
  showStory(idx);
}

export function showStory(idx) {
  if (idx >= STORIES.length) {
    closeStoryViewer();
    return;
  }

  const s = STORIES[idx];
  document.getElementById('svImg').src = s.img;
  document.getElementById('svAuthor').innerHTML = `
    <img src="${s.av}" class="sv-av" alt="">
    <div>
      <div class="sv-name">${s.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,.5)">${s.time}</div>
    </div>`;

  // Progress bars
  const bars = document.getElementById('svBars');
  bars.innerHTML = STORIES.map((_, i) => `
    <div class="sv-prog">
      <div class="sv-prog-fill ${i < idx ? 'done' : i === idx ? 'active' : ''}"></div>
    </div>`).join('');

  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(nextStory, 5000);
}

export function nextStory() {
  storyIdx++;
  showStory(storyIdx);
}

export function closeStoryViewer() {
  document.getElementById('storyViewer').classList.remove('open');
  if (storyTimer) clearTimeout(storyTimer);
}