import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Hi!, Not Page Found</h1>
      <h1 className="text-4xl">404</h1>
      <Link to="/">
        <button className="btn mt-5">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
