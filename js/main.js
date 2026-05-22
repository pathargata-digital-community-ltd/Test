// ============================================================
// main.js — এন্ট্রি পয়েন্ট
// HTML-এ onclick ব্যবহার করা হয় বলে ফাংশনগুলো window-এ রাখতে হয়
// ============================================================

import { renderPosts, toggleLike, toggleComments, addComment, doShare } from './posts.js';
import { renderReels, likeReel } from './reels.js';
import { viewStory, nextStory, closeStoryViewer } from './stories.js';
import { switchPage, openNotif } from './router.js';
import { openPostSheet, closePostSheet, publishPost, toggleFollow } from './ui.js';

// ── window-এ expose করা (HTML onclick-এর জন্য প্রয়োজন) ──
Object.assign(window, {
  // Posts
  toggleLike,
  toggleComments,
  addComment,
  doShare,
  // Reels
  likeReel,
  // Stories
  viewStory,
  nextStory,
  closeStoryViewer,
  // Router
  switchPage,
  openNotif,
  // UI
  openPostSheet,
  closePostSheet,
  publishPost,
  toggleFollow,
});

// ── অ্যাপ ইনিশিয়ালাইজ ──
renderPosts();
renderReels();