import SignUpForm from "../../Components/sign-up-form/signup-form.component";

import SignInForm from "../../Components/sign-in-form/sign-in-form.component";


const Authentication = () => {
    return(
        <div className="py-32 flex justify-center items-center gap-4 container mx-auto flex-col md:flex-row">
           <SignInForm />
           <span>OR</span>
           <SignUpForm />
        </div>
    )
}

export default Authentication