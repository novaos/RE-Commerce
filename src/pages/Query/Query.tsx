import React from 'react';
import { getPosts } from './services/postsApiService';
import { useQuery } from 'react-query';
import Post from './components/Post';
import Loader from '../../components/Loader';
import { IPost } from './interfaces';

const Query: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<IPost[], Error>('key-for-getPosts-request', getPosts);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error && error.message}</span>;
  }

  return (
    <>
      <h1 className="title">React Query</h1>
      {data && data.map(s => <Post key={s.id} post={s}></Post>)}
    </>
  );
};

export default Query;
