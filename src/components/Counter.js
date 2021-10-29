import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  //   const increaseCount = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
