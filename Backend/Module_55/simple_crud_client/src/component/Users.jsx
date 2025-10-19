import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    console.log("Delete Processing...", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Specific User Deleted..");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <br />
      <h2>Users:{users.length}</h2>
      <br />
      {users.map((user) => (
        <p key={user._id}>
          <strong>{user.name}</strong> : {user.email}{" "}
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
