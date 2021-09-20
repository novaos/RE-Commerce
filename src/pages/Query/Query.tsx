import React from 'react';
import { getPosts } from './services/postsApiService';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import Post from './components/Post';

const Query: React.FC = () => {
  const { isLoading, data } = useQuery('key-for-getPosts-request', getPosts);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="title">React Query</h1>
      {data && data.map(s => <Post key={s.id} post={s}></Post>)}
    </>
  );
};

export default Query;
