import React, { useEffect, useState } from 'react';
import { getUsers } from './services/usersApiService';
import { IUser } from './interfaces';
import User from './components/User';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  // fetch a user from a fake backend API
  useEffect(() => {
    (async () => {
      const users: IUser[] = await getUsers();

      setUsers(users);
    })();
  }, []);

  return (
    <>
      <h1 className="title">Users</h1>

      <div className="container">
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Users;
