import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h3>Name : {phone.name}</h3>
      <h4>Brand : {phone.brand}</h4>
    </div>
  );
};

export default Phone;
