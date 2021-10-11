import React from 'react';
import { getPosts } from './services/postsApiService';
import { useQuery } from 'react-query';
import Post from './components/Post';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { IPost } from './interfaces';
import { useTranslation } from 'react-i18next';

const Query: React.FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading, isError } = useQuery<IPost[], Error>('key-for-getPosts-request', getPosts, {
    retry: 3 // Will retry failed requests 3 times before displaying an error
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <h1 className="title">{t('Query.title')}</h1>
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
