import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnWJxV_GTDmG9OMpuPvr8Zz9Lt3kRtlG0",
  authDomain: "video-ad25e.firebaseapp.com",
  projectId: "video-ad25e",
  storageBucket: "video-ad25e.appspot.com",
  messagingSenderId: "632134259113",
  appId: "1:632134259113:web:9d21a1438eeb91f55e34b8"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;