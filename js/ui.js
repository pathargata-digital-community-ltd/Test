export function switchPage(pageId) {
    // সব পেজ হাইড করো
    ['home', 'profile'].forEach(id => {
        document.getElementById('page-' + id).classList.add('hidden');
    });
    // টার্গেট পেজ দেখাও
    document.getElementById('page-' + pageId).classList.remove('hidden');
    window.scrollTo(0,0);
}

export function hideSplash() {
    document.getElementById('splash-screen').style.display = 'none';
}
