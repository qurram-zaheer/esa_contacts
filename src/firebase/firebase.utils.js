import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBiPMdqsVnzvH4A3QmAE6xa-LXVjjV5mI",
  authDomain: "se-esa.firebaseapp.com",
  databaseURL: "https://se-esa.firebaseio.com",
  projectId: "se-esa",
  storageBucket: "se-esa.appspot.com",
  messagingSenderId: "250628917541",
  appId: "1:250628917541:web:2229c4a4ded61e0022b2cc",
  measurementId: "G-QHJG8EDF3E",
};

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        id: userAuth.uid,
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
