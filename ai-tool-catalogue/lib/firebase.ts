// lib/firebase.ts

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
// import other Firebase services you use, e.g., getFirestore, getAuth

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "ai-tool-catalogue", // This matches your project ID!
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // If you have one for Analytics
};

// Initialize Firebase App
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Function to initialize and return Analytics
// Call this function where you actually need analytics, e.g., in _app.tsx or a useEffect hook
export const getFirebaseAnalytics = async () => {
  if (typeof window !== 'undefined' && (await isSupported())) {
    return getAnalytics(app);
  }
  return null; // or undefined, if analytics is not supported/initialized
};

// Export other Firebase services (add as needed)
// export const getFirebaseAuth = () => { /* ... */ };
// export const getFirestoreDb = () => { /* ... */ };
