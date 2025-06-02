import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase.init";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submited");

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
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
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input w-full"
        />
        <button className="btn bg-teal-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
