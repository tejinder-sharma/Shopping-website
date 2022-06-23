import { useState } from "react";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event)
    if (password !== confirmPassword) {
      alert("password not matched");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use");
      } else {
        console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="mt-4">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-base-300">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Please sign up
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <FormInput
              label="Name"
              id="name"
              type="text"
              onChange={handleChange}
              name="displayName"
              value={displayName}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />

            <FormInput
              label="Email Address"
              id="emailAddress"
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />

            <FormInput
              label="Password"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />

            <FormInput
              label="Confirm Password"
              id="passwordConfirmation"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            <Button type="submit" buttonType="outline">Submit</Button>
   
        </div>
        </form>
  
      </section>
    </div>
  );
};

export default SignUpForm;
