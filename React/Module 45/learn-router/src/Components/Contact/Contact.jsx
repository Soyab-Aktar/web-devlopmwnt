import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>This a Contact component</h2>
      <p>Lets do this</p>
      <NavLink to="/">
        <button>Go to Home</button>
      </NavLink>
    </div>
  );
};

export default Contact;
