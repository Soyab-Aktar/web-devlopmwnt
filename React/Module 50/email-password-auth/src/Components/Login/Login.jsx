import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const emailref = useRef();
  const handleForget = () => {
    console.log("Forgot Email, ", emailref.current.value);
    const email = emailref.current.value;
    if (!email) {
      alert("Please Provide Email . ");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("password Reset Email Link Sent .");
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submited");

    const email = event.target.email.value;
    const password = event.target.password.value;

    setSuccess(false);
    setLoginError("");
    // Create user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setLoginError("Please verify your email adderess");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="lg:w-4/12 md:w-2/3 mx-auto my-6 px-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input w-full"
          required
          ref={emailref}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input w-full"
          required
        />
        <a onClick={handleForget}>Forget Password!</a>
        <button className="btn bg-teal-600">Login</button>
      </form>
      <p>
        New User : <Link to="/signUp">Sign Up</Link>
      </p>
      {success && <p className="text-green-500">User Login Successful</p>}
      {loginError && <p className="text-red-500">{loginError}</p>}
    </div>
  );
};

export default Login;
