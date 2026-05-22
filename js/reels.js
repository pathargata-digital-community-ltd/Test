// ============================================================
// reels.js — রিলস রেন্ডার ও লাইক
// ============================================================

import { REELS, bn } from './data.js';

export function renderReels() {
  const container = document.getElementById('reels-list');
  container.innerHTML = '';

  REELS.forEach((r, i) => {
    const el = document.createElement('div');
    el.className = 'reel-card';
    el.style.animation = 'slideUp .35s ease both';
    el.style.animationDelay = `${i * 0.1}s`;

    el.innerHTML = `
      <img src="${r.thumb}" class="reel-thumb" alt="" loading="lazy">
      <div class="reel-play"><i class="fas fa-play"></i></div>
      <div class="reel-overlay">
        <div class="reel-author">
          <img src="${r.av}" class="reel-av" alt="">
          <span class="reel-name">${r.name}</span>
        </div>
        <div class="reel-caption">${r.caption}</div>
      </div>
      <div class="reel-side-actions">
        <div class="reel-action" onclick="likeReel(this, ${i})">
          <i class="fas fa-heart ${r.liked ? 'liked-reel' : ''}"></i>
          <span id="rl-${i}">${bn(r.likes)}</span>
        </div>
        <div class="reel-action">
          <i class="fas fa-comment"></i>
          <span>${bn(Math.floor(r.likes / 5))}</span>
        </div>
        <div class="reel-action">
          <i class="fas fa-share"></i>
          <span>${bn(Math.floor(r.likes / 10))}</span>
        </div>
      </div>`;

    container.appendChild(el);
  });
}

export function likeReel(el, i) {
  REELS[i].liked = !REELS[i].liked;
  REELS[i].likes += REELS[i].liked ? 1 : -1;

  el.querySelector('i').className = `fas fa-heart ${REELS[i].liked ? 'liked-reel' : ''}`;
  document.getElementById(`rl-${i}`).textContent = bn(REELS[i].likes);
}