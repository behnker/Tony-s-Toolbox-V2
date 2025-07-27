// lib/firebase.ts (CORRECTED VERSION)

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

let analytics;

// Define an async function to initialize Analytics conditionally
async function initializeFirebaseAnalytics() {
  if (typeof window !== 'undefined' && (await isSupported())) {
    analytics = getAnalytics(app);
    // console.log("Firebase Analytics initialized!"); // Optional: for debugging
  } else {
    // console.log("Firebase Analytics not supported or not in browser environment."); // Optional: for debugging
  }
}

// Call the async function to execute the Analytics initialization logic
// This ensures the promise from isSupported() is properly handled.
initializeFirebaseAnalytics();

export { app, analytics };