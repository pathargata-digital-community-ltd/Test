import { auth } from './config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { switchPage, hideSplash } from './ui.js';

// গ্লোবাল ফাংশন হিসেবে সেট করা (যাতে HTML থেকে কাজ করে)
window.switchPage = switchPage;

onAuthStateChanged(auth, (user) => {
    hideSplash();
    if (user) {
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('auth-screen').classList.add('hidden');
    } else {
        document.getElementById('auth-screen').classList.remove('hidden');
        document.getElementById('main-app').classList.add('hidden');
    }
});
