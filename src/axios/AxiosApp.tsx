import axios from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const AxiosApp = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p className="text-danger">{error}</p>
    </>
  );
};
export default AxiosApp;
