import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfnUN34qkcA-IF2CU-rCSBKnZVKOpjl2Q",
  authDomain: "tirebase-ca938.firebaseapp.com",
  projectId: "tirebase-ca938",
  storageBucket: "tirebase-ca938.appspot.com",
  messagingSenderId: "992220737544",
  appId: "1:992220737544:web:216dd91bf39267a6a3e1bd",
  measurementId: "G-1SL5719YDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  
  // Get a reference to the authentication service
  var auth = firebase.auth();
  
  // Add an event listener to the sign in form
  var signinForm = document.getElementById("signin-form");
  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    var email = signinForm["signin-email"].value;
    var password = signinForm["signin-password"].value;
  
    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Signed in successfully");
        window.location.href = "dashboard.html";
      })
      .catch(function (error) {
        console.error("Sign in error:", error);
        alert("Incorrect email or password. Please try again.");
      });
  });
  
  // Add an event listener to the sign up form
  var signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    var email = signupForm["signup-email"].value;
    var password = signupForm["signup-password"].value;
  
    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Signed up successfully");
        window.location.href = "dashboard.html";
      })
      .catch(function (error) {
        console.error("Sign up error:", error);
        alert("An error occurred while signing up. Please try again.");
      });
  });
  