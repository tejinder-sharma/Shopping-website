import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../Components/sign-up-form/signup-form.component";



const SignIn = () => {

    const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
   }
   

    return(
        <div className="min-h-screen flex justify-center items-center flex-col">
           <SignUpForm />
        </div>
    )
}

export default SignIn