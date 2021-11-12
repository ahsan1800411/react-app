import React, { useContext } from 'react';
import { CountContext } from '../App';

const CounterContext = () => {
  const { state, dispatch } = useContext(CountContext);
  return (
    <div>
      <div>Count1- {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default CounterContext;
