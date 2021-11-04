import { useEffect, useState } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect');
    document.title = `You clicked ${count} times`;
  }, [count, name]);

  return (
    <div>
      <h1>{count}</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default EffectHook;
