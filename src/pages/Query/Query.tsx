import React from 'react';
import { getPosts } from './services/postsApiService';
import { useQuery } from 'react-query';
import Post from './components/Post';
import Loader from '../../components/Loader';
import { IPost } from './interfaces';

const Query: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<IPost[], Error>('key-for-getPosts-request', getPosts, {
    retry: 3 // Will retry failed requests 3 times before displaying an error
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error && error.message}</span>;
  }

  return (
    <>
      <h1 className="title">React Query</h1>
      {!data?.length
        ? 'No items yet...'
        : data.map(s => (
            <React.Fragment key={s.id}>
              {' '}
              <Post post={s}></Post>
            </React.Fragment>
          ))}
    </>
  );
};

export default Query;
