import React, { useEffect, useState } from 'react';
import { getUsers } from './services/usersApiService';
import { IUser } from './interfaces';
import User from './components/User';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

const Users: React.FC = () => {
  const { t } = useTranslation();
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
      <h1 className="title">{t(messages.queryTitle())}</h1>

      <div className="container">
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Users;
