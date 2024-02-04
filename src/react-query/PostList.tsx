import axios from "axios";
import usePosts from "./hooks/usePosts";
import { useState } from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading..</p>;

  return (
    <>
      <select
        className="form-select"
        value={userId}
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
