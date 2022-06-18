import { useState } from "react";

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

  console.log(formFields);

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
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-32">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h2>I already have an account</h2>
          <p>Sign in with your email and password</p>
        </div>

        <form className="grid grid-cols-1 gap-3">
          <div>
            <label for="username" className="block text-xl font-semibold mb-2">
              Sign in
            </label>
            <input
              id="username"
              type="email"
              placeholder="johndoe@email.com"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label
              for="user-password"
              className="block text-xl font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="user-password"
              type="password"
              placeholder="*******"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input type="submit" className="btn btn-active" />
            <button class="btn btn-primary ml-2">Sign In With Google</button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h2>I do not have an account</h2>
          <p>Sign up with your email and password</p>
        </div>
        <form className="grid grid-cols-1 gap-3">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input type="submit" className="btn btn-active" />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
