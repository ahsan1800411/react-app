import React, { useState, useMemo } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0 ? 'even' : 'odd';
  }, [counterOne]);

  return (
    <>
      <h1>Counter One: {counterOne}</h1>
      {isEven}
      <h1> Counter Two: {counterTwo}</h1>
      <div>
        <button onClick={incrementOne}>IncrementCounter One</button>
      </div>
      <div>
        <button onClick={incrementTwo}>IncrementCounter Two</button>
      </div>
    </>
  );
}

export default Counter;
