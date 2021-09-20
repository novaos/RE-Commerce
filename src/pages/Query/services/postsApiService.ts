import { IPost } from '../interfaces';

export const getPosts = async (): Promise<IPost[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => new Error('An error occurred' + error));
};
