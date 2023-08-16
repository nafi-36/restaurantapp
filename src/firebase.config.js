import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzBgOyCyRmTqzGkaYzgEEL-gq2uu8ESOY",
    authDomain: "restaurantapp-b9b71.firebaseapp.com",
    databaseURL: "https://restaurantapp-b9b71-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-b9b71",
    storageBucket: "restaurantapp-b9b71.appspot.com",
    messagingSenderId: "12396679346",
    appId: "1:12396679346:web:9f7c283c6fb865a309f9ab"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

// we need to initialize the app only if there is no app otherwise it will re initialize every single time whenever your page gets refreshed
// to avoid that we will get the apps list get apps
// if you get apps length if there is a length and that length is greater than 0 then get the app information 
// if there is no app initialize the new app initialize the new app with our firebase config details