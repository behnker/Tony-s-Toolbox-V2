// lib/firebase.ts (THIS IS THE ABSOLUTELY FINA v2, VERIFIED CORRECT CODE YOU NEED ON GITHUB)

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyA8rXxi_FBLroitIvnRmpSn4cM2SGy12Ng",
  authDomain: "ai-tool-catalogue.firebaseapp.com",
  projectId: "ai-tool-catalogue",
  storageBucket: "ai-tool-catalogue.firebasestorage.app",
  messagingSenderId: "764613209987",
  appId: "1:764613209987:web:554082dde14e29e8ad50b6",
  measurementId: "G-6KDRP38110",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics; // Declare analytics here so it can be assigned later

// Define an async function to handle Analytics initialization.
// This function MUST be async to use 'await'.
async function initializeFirebaseAnalytics() {
  // Check if window is defined (for browser environment) AND
  // AWAIT the result of isSupported() to get its actual boolean value.
  if (typeof window !== 'undefined' && (await isSupported())) { // <--- THE CRITICAL CHANGE IS HERE
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully!"); // Optional: for debugging
  } else {
    console.log("Firebase Analytics not supported or not running in a browser environment."); // Optional: for debugging
  }
}

// Call the async function to execute the Analytics initialization logic.
// This call will run asynchronously in the background.
initializeFirebaseAnalytics();

// Export 'app' and 'analytics'. Note: 'analytics' might be undefined
// until initializeFirebaseAnalytics() has completed its async operations.
export { app, analytics };

