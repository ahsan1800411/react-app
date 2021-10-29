import React, { useState } from 'react';

const Message = () => {
  const msg = 'Welcome Guest';
  const [message, setMessage] = useState(msg);

  const changeMessage = () => {
    setMessage('Welcome Ahsan');
  };

  return (
    <div>
      <h1 style={{ color: 'tomato' }}>{message}</h1>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
};

export default Message;
