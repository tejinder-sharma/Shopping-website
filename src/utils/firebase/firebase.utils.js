import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAnzlEtL8k_fhyQRK1vzVQlcopPGo7IFYQ",
  
    authDomain: "shopping-website-db-20542.firebaseapp.com",
  
    projectId: "shopping-website-db-20542",
  
    storageBucket: "shopping-website-db-20542.appspot.com",
  
    messagingSenderId: "542729806930",
  
    appId: "1:542729806930:web:6f61b89a5c0373fc2b2b8b"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef)

    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc( userDocRef,
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation,
                }
            )
        }
        catch(error){
            console.log('Error meassage is ', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}