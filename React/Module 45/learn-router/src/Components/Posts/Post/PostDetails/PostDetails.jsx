import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const handleGoBack = () => {
    navigate(-1);
  };
  console.log(params);
  const { body, id } = postDetails;
  return (
    <div className="text-left w-3/5 p-4 border-2 border-gray-400 rounded-lg bg-gray-800 mx-auto my-12">
      <h2>{id}:</h2>
      <p>{body}</p>
      <button onClick={handleGoBack} className="btn mt-4">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
