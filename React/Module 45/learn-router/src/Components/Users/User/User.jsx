import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-4 border-double border-orange-300 rounded-lg text-left p-4 text-2xl">
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2> Phone: {phone}</h2>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
