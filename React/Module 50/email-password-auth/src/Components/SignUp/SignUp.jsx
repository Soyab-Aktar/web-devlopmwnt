import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaRegEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submited");

    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    console.log(name, photo);

    setErrorMsg("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorMsg("Password should me 6 or more charectors");
      return;
    }
    if (!terms) {
      setErrorMsg("Please Accect our terms and conditions");
      return;
    }
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$"
    );

    if (!regex.test(password)) {
      setErrorMsg(
        "At least one uppercase, lowercase, number, and special character."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password, terms)
      .then((result) => {
        console.log(result);
        setSuccess(true);

        //Send verification
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification email sent");
        });

        //Update Profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("User Profle Updated");
          })
          .catch((error) => {
            console.log("User Profile Update Error", error);
          });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMsg(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="lg:w-4/12 md:w-2/3 mx-auto my-6 px-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input w-full"
          required
        />
        <input
          name="photo"
          type="text"
          placeholder="Photo URL"
          className="input w-full"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input w-full"
          required
        />
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="input w-full"
          required
        />
        <button
          type="button"
          className="btn btn-xs right-10 top-16 text-xl"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEye /> : <GoEyeClosed />}
        </button>
        <div className="flex gap-4">
          <input type="checkbox" name="terms" className="checkbox" />
          <p>Accept Terms and Condition.</p>
        </div>
        <button className="btn bg-emerald-600">Sign Up</button>
      </form>
      <p>
        Already have account: <Link to="/login">Login</Link>
      </p>
      {errorMsg && <p className="text-3xl text-red-500">{errorMsg}</p>}
      {success && <p className="text-3xl text-green-500">Sign Up Completed</p>}
    </div>
  );
};

export default SignUp;
