import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((req) => req.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };
  return (
    <>
      <h1>User Manegement</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" />
      </form>
      <h3>Total Users: {users.length}</h3>
      {users.map((user) => (
        <p key={user.id}>
          {user.id} : {user.name} : {user.email}
        </p>
      ))}
    </>
  );
}

export default App;
