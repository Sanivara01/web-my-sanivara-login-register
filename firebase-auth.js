import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = { /* Kode SDK Firebase Anda */ };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Login
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => window.location.href = "dashboard.html")
            .catch(error => alert(error.message));
    });
}

// Google Login
if (document.getElementById("googleLogin")) {
    document.getElementById("googleLogin").addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then(() => window.location.href = "dashboard.html")
            .catch(error => alert(error.message));
    });
}

// Register
if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => window.location.href = "index.html")
            .catch(error => alert(error.message));
    });
}

// Reset Password
if (document.getElementById("resetForm")) {
    document.getElementById("resetForm").addEventListener("submit", (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, resetEmail.value)
            .then(() => alert("Cek email Anda untuk reset password."))
            .catch(error => alert(error.message));
    });
}

// Logout
if (document.getElementById("logout")) {
    document.getElementById("logout").addEventListener("click", () => {
        signOut(auth).then(() => window.location.href = "index.html");
    });
}