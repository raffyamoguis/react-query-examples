import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../lib/post-api';

const Post: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery('todos', getPosts);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    console.log(error);
  }

  return data.map((items: any) => <div key={items.id}>{items.title}</div>);
};

export default Post;
