import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "ТВОЙ_AUTH_DOMAIN",
  projectId: "ТВОЙ_PROJECT_ID",
  storageBucket: "ТВОЙ_STORAGE_BUCKET",
  messagingSenderId: "ТВОЙ_MESSAGING_SENDER_ID",
  appId: "ТВОЙ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
