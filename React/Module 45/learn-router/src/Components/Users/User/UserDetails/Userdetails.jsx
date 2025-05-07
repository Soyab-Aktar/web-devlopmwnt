import { useLoaderData } from "react-router";

const Userdetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <h1>User Name : {name}</h1>
    </div>
  );
};

export default Userdetails;
