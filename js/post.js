// ============================================================
// posts.js — পোস্ট রেন্ডার, লাইক, কমেন্ট, শেয়ার
// ============================================================

import { POSTS, bn } from './data.js';

export function renderPosts() {
  const container = document.getElementById('home-posts');
  container.innerHTML = '';

  POSTS.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.style.animationDelay = `${i * 0.08}s`;

    el.innerHTML = `
      <div class="post-header">
        <img src="${p.avatar}" class="post-av" alt="">
        <div class="post-info">
          <div class="post-name">
            ${p.author}
            ${p.verified ? '<span class="vc"><i class="fas fa-circle-check"></i></span>' : ''}
          </div>
          <div class="post-meta-row">
            <i class="fas fa-clock" style="margin-right:3px"></i>${p.time}
            ${p.loc ? ` · <i class="fas fa-map-marker-alt" style="color:var(--teal);margin:0 3px"></i>${p.loc}` : ''}
          </div>
        </div>
        <button class="post-more-btn"><i class="fas fa-ellipsis-h"></i></button>
      </div>

      <div class="post-body">${p.text}</div>

      ${p.tags.length
        ? `<div class="post-tags">${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}</div>`
        : ''}

      ${p.img
        ? `<img src="${p.img}" class="post-img" style="margin-top:10px" alt="" loading="lazy">`
        : ''}

      <div class="post-stats">
        <div class="react-emojis"><span>❤️</span><span>😍</span><span>😮</span></div>
        <span id="lc-${p.id}">${bn(p.likes)} জন</span>
        <span class="stat-sep">·</span>
        <span id="cc-${p.id}" style="cursor:pointer" onclick="toggleComments(${p.id})">${bn(p.comments)} মন্তব্য</span>
        <span>·</span>
        <span>${bn(p.shares)} শেয়ার</span>
      </div>

      <div class="post-actions">
        <button class="pa ${p.liked ? 'liked' : ''}" id="lb-${p.id}" onclick="toggleLike(${p.id})">
          <i class="${p.liked ? 'fas' : 'far'} fa-heart"></i>
          ${p.liked ? 'লাইক করেছেন' : 'লাইক'}
        </button>
        <button class="pa" onclick="toggleComments(${p.id})">
          <i class="far fa-comment"></i>মন্তব্য
        </button>
        <button class="pa" onclick="doShare(this)">
          <i class="fas fa-share"></i>শেয়ার
        </button>
      </div>

      <div class="comment-box" id="cb-${p.id}">
        <div class="comment-input-row">
          <img src="https://i.pravatar.cc/100?img=12" class="c-av" alt="">
          <input
            class="comment-input"
            id="ci-${p.id}"
            placeholder="মন্তব্য করুন..."
            onkeydown="if(event.key==='Enter') addComment(${p.id})"
          >
          <button class="send-btn" onclick="addComment(${p.id})">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
        <div id="cl-${p.id}">
          ${p.clist.map(c => `
            <div class="comment-item">
              <img src="${c.av}" class="c-av" alt="">
              <div class="c-bubble">
                <div class="c-author">${c.author}</div>
                <div class="c-text">${c.text}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;

    container.appendChild(el);
  });
}

export function toggleLike(id) {
  const p = POSTS.find(x => x.id === id);
  if (!p) return;
  p.liked = !p.liked;
  p.likes += p.liked ? 1 : -1;

  const btn = document.getElementById(`lb-${id}`);
  btn.className = `pa ${p.liked ? 'liked' : ''}`;
  btn.innerHTML = `<i class="${p.liked ? 'fas' : 'far'} fa-heart"></i>${p.liked ? 'লাইক করেছেন' : 'লাইক'}`;
  document.getElementById(`lc-${id}`).textContent = `${bn(p.likes)} জন`;
}

export function toggleComments(id) {
  const cb = document.getElementById(`cb-${id}`);
  cb.classList.toggle('open');
  if (cb.classList.contains('open')) {
    document.getElementById(`ci-${id}`).focus();
  }
}

export function addComment(id) {
  const inp = document.getElementById(`ci-${id}`);
  const text = inp.value.trim();
  if (!text) return;

  const cl = document.getElementById(`cl-${id}`);
  const div = document.createElement('div');
  div.className = 'comment-item';
  div.innerHTML = `
    <img src="https://i.pravatar.cc/100?img=12" class="c-av" alt="">
    <div class="c-bubble">
      <div class="c-author">আমি</div>
      <div class="c-text">${text}</div>
    </div>`;
  cl.appendChild(div);
  inp.value = '';

  const p = POSTS.find(x => x.id === id);
  if (p) {
    p.comments++;
    document.getElementById(`cc-${id}`).textContent = `${bn(p.comments)} মন্তব্য`;
  }
}

export function doShare(btn) {
  btn.innerHTML = '<i class="fas fa-check"></i>শেয়ার হয়েছে';
  btn.style.color = '#a78bfa';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-share"></i>শেয়ার';
    btn.style.color = '';
  }, 2000);
}