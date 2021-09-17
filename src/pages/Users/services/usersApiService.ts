import { User } from '../interfaces';

export const getUsers = async (): Promise<User[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .catch(error => console.log('An error occurred' + error));
};
