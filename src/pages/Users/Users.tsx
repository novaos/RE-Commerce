import React from 'react';
import { IUser } from './interfaces';
import User from './components/User';
import { useTranslation } from 'react-i18next';
import { useUsers } from './hooks/useUsers';

const Users: React.FC = () => {
  const { t } = useTranslation();
  const users = useUsers();

  return (
    <>
      <h1 className="title">{t('Users.title')}</h1>

      <div className="container">
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Users;
