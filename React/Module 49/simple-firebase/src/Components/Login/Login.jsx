import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out done");
        setUser(null);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div>
      {/* <button onClick={handleGoogleSignin} className="btn">
        Login With Google
      </button> */}
      {/* <button onClick={handleSignOut}>SignOUT</button> */}

      {user ? (
        <button onClick={handleSignOut}>SignOUT</button>
      ) : (
        <button onClick={handleGoogleSignin} className="btn">
          Login With Google
        </button>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
