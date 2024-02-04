import axios from "axios";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data, error, isLoading } = usePosts();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading..</p>;

  return (
    <ul className="list-group">
      {data?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
