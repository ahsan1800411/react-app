import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  post: {},
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        post: action.payload,
        error: '',
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        post: {},
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};

const FetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      };
      fetchPosts();
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE' });
    }
  }, []);

  return <div>{state.post.title}</div>;
};

export default FetchingTwo;
