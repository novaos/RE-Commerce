import { useEffect, useState } from 'react';
import { getUsers } from '../services/usersApiService';
import { IUser } from '../interfaces';

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const users: IUser[] = await getUsers();

      setUsers(users);
    })();
  }, []);

  return users;
};
