// lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics'; // Assuming you're importing isSupported from 'firebase/analytics'

// Your Firebase configuration (from your FIREBASE_WEBAPP_CONFIG environment variable)
const firebaseConfig = {
  apiKey: "AIzaSyA8rXxi_FBLroitIvnRmpSn4cM2SGy12Ng",
  appId: "1:764613209987:web:554082dde14e29e8ad50b6",
  authDomain: "ai-tool-catalogue.firebaseapp.com",
  databaseURL: "", // Or your Realtime Database URL if you use it
  messagingSenderId: "764613209987",
  projectId: "ai-tool-catalogue",
  storageBucket: "ai-tool-catalogue.firebasestorage.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;

// Create an async function to initialize Analytics conditionally
async function initializeFirebaseAnalytics() {
  if (typeof window !== 'undefined' && (await isSupported())) { // <-- THE CRUCIAL CHANGE HERE
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized!"); // Optional: for debugging
  } else {
    console.log("Firebase Analytics not supported or not in browser environment."); // Optional: for debugging
  }
}

// Call the async function somewhere in your app's initialization logic
// For example, if this is a module, you might export a function that calls this,
// or call it directly if it's part of a top-level component.
initializeFirebaseAnalytics();

// You'd also likely export 'app' and 'analytics' for use in other parts of your app
export { app, analytics };