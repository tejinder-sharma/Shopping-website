import { useState } from "react";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('Email not exist');
          break;
        default:
          console.log(error)
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="mt-4">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-base-300">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Already have an account
        </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <FormInput
              label="Email Address"
              id="signInEmailAddress"
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />

            <FormInput
              label="Password"
              id="signInPassword"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />

            <div className="flex gap-4">
              <Button type="submit" buttonType="outline">
                Sign In
              </Button>
              <Button type='button' onClick={signInWithGoogle} buttonType="outline">
                Sign In With Google
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
export default SignInForm;
