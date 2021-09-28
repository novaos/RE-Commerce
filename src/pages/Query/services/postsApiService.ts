import { IPost } from '../interfaces';
import { request } from '../../../utils/request';

export const getPosts = async (): Promise<IPost[]> => {
  return (await request('https://jsonplaceholder.typicode.com/po2sts')) as Promise<IPost[]>;
};
