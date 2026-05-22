// ============================================================
// ui.js — পোস্ট শিট, পাবলিশ, ফলো
// ============================================================

import { POSTS } from './data.js';
import { renderPosts } from './posts.js';
import { switchPage } from './router.js';

export function openPostSheet() {
  document.getElementById('postSheet').classList.add('open');
  setTimeout(() => document.getElementById('postText').focus(), 300);
}

export function closePostSheet(e) {
  const sheet = document.getElementById('postSheet');
  if (!e || e.target === sheet) {
    sheet.classList.remove('open');
  }
}

export function publishPost() {
  const textarea = document.getElementById('postText');
  const text = textarea.value.trim();
  if (!text) return;

  POSTS.unshift({
    id: Date.now(),
    author: 'আমি',
    verified: false,
    avatar: 'https://i.pravatar.cc/100?img=12',
    time: 'এইমাত্র',
    loc: '',
    text,
    tags: [],
    img: null,
    likes: 0,
    comments: 0,
    shares: 0,
    liked: false,
    clist: []
  });

  textarea.value = '';
  document.getElementById('postSheet').classList.remove('open');
  switchPage('home');
  renderPosts();
}

export function toggleFollow(btn) {
  const isFollowing = btn.classList.toggle('following');
  btn.textContent = isFollowing ? '✓ ফলোয়িং' : 'ফলো';
}