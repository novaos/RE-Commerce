import React, { useEffect, useState } from 'react';
import { getUsers } from './services/usersApiService';
import { User } from './interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // fetch a user from a fake backend API
  useEffect(() => {
    (async () => {
      const users: User[] = await getUsers();

      setUsers(users);
    })();
  }, []);

  return (
    <>
      <h1 className="title">Users</h1>

      {users.map((user: any) => (
        <div className="card mt-2" key={user.id}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://picsum.photos/200" alt="" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{user.name}</p>
                <p className="subtitle is-6">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
