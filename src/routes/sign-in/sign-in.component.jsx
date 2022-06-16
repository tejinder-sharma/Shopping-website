import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
   }

    return(
        <div className="min-h-screen flex justify-center items-center">
           <button className="btn btn-wide" onClick={logGoogleUser}>Sign In with google</button>
        </div>
    )
}

export default SignIn