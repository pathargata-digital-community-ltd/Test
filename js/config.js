import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfI-THOXOvhyL7LumZVKixtTVwF94CjsI",
    authDomain: "pathargata-digital-comnity-ltd.firebasestorage.app",
    databaseURL: "https://pathargata-digital-comnity-ltd-default-rtdb.firebaseio.com",
    projectId: "pathargata-digital-comnity-ltd",
    storageBucket: "pathargata-digital-comnity-ltd.firebasestorage.app",
    messagingSenderId: "991014085926",
    appId: "1:991014085926:android:b249e489d8424433ed4de7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
