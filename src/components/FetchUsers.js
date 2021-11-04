import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchUsers;
