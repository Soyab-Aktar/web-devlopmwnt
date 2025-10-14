import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>This a About Component</h2>
      <h2>You can check the about page</h2>
      <Link to="/">
        <button>Go To Home</button>
      </Link>
    </div>
  );
};

export default About;
