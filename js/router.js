// ============================================================
// router.js — পেজ নেভিগেশন
// ============================================================

export function switchPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(`page-${name}`).classList.add('active');

  const nb = document.getElementById(`nav-${name}`);
  if (nb) nb.classList.add('active');
}

export function openNotif() {
  switchPage('notif');
}