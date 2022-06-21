import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../Components/sign-up-form/signup-form.component";

import SignInForm from "../../Components/sign-in-form/sign-in-form.component";





const Authentication = () => {

    const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
   }
   

    return(
        <div className="py-32 flex justify-center items-center gap-4 container mx-auto flex-col md:flex-row">
           <SignInForm />
           <span>OR</span>
           <SignUpForm />
        </div>
    )
}

export default Authentication