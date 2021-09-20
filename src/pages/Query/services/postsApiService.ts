import { IPost } from '../interfaces';

export const getPosts = async (): Promise<IPost[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(error => console.log('An error occurred' + error));
};
