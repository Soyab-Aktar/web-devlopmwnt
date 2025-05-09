import { Link } from "react-router-dom";

const Post = ({ postData }) => {
  const { userId, id, title, body } = postData;
  return (
    <div className="flex flex-col gap-3 border-3 border-gray-400 p-6 rounded-lg bg-gray-800 text-lg">
      <span>UserId: {userId}</span>
      <span>Title: {title}</span>
      <span>Body: {body}</span>
      <Link to={`/posts/${id}`}>
        <button className="btn">Info</button>
      </Link>
    </div>
  );
};

export default Post;
