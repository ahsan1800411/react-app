import React, { useRef, useEffect } from 'react';

function Input() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Search' />
    </div>
  );
}

export default Input;
