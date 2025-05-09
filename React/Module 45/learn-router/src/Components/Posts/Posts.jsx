import { useLoaderData } from "react-router";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length} </h2>
      <div className="grid grid-cols-3 gap-4 text-left">
        {posts.map((postData) => (
          <Post postData={postData} key={postData.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
