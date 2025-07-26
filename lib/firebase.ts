// lib/firebase.ts
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

// Initialize Analytics only in the browser
let analytics;
if (typeof window !== 'undefined' && isSupported()) {
  analytics = getAnalytics(app);
}

export { app, analytics };