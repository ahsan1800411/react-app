import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchingOne = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      setPost(data);
    };
    fetchPosts();
  }, []);

  return <div>{post.title}</div>;
};

export default FetchingOne;
