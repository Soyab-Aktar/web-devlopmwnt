import { Link, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User Added on DB");
          form.reset();
        }
      });
  };
  return (
    <>
      <h2>Simple CRUD Client</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br />
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <br />
      <Link to={`/users`}>Users List</Link>
    </>
  );
}

export default App;
