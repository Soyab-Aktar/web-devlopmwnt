import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className="input" />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          className="input"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          className="input"
        />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default StateFullForm;
