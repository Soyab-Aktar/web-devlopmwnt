import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };
  return (
    <div>
      <h1>Update User of : {loadedUser.name}</h1>
      <br />
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          defaultValue={loadedUser.name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          defaultValue={loadedUser.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
