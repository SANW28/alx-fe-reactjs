import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache posts for 5 minutes
    staleTime: 1000 * 60, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: false, // Do not refetch when window is focused
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts {isFetching ? ' (Refreshing...)' : ''}</h2>
      <button onClick={refetch} className="bg-blue-500 text-white py-2 px-4 rounded">
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
