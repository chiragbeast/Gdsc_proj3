// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVPd5_wltOG4APiymVqxavWJyXNqTg9Wc",
    authDomain: "event-management-33e8b.firebaseapp.com",
    projectId: "event-management-33e8b",
    storageBucket: "event-management-33e8b.appspot.com",
    messagingSenderId: "412021266672",
    appId: "1:412021266672:web:2ea4eb8bb4ef79bbf30a35",
    measurementId: "G-1NSK1Y7VH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Selecting form elements
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// Handle sign-in form submission
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signed in successfully!");
        window.location.href = "student_dash.html"; // Redirect to dashboard
      })
      .catch((error) => {
        alert(error.message); // Display error message
      });
});
