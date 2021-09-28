import { IUser } from '../interfaces';
import { request } from '../../../utils/request';

export const getUsers = async (): Promise<IUser[]> => {
  return (await request('https://jsonplaceholder.typicode.com/users')) as Promise<IUser[]>;
};
