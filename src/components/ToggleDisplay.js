import React, { useState } from 'react';
import HookComponent from './HookComponent';

function ToggleDisplay() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <div>{display && <HookComponent />}</div>
    </div>
  );
}

export default ToggleDisplay;
