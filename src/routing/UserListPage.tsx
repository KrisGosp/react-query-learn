import { useState } from "react";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [user, setUser] = useState(1);
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <div className="flex">
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {/* <Link to={`/users/${user.id}`}>{user.name}</Link> */}
            <button onClick={() => setUser(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
      <div>User {user}</div>
    </div>
  );
};

export default UserListPage;
