import React, { useContext } from 'react';
import { UserContext } from '../App';

function ComponentF(props) {
  const { name, age, section } = useContext(UserContext);
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <h2>{section}</h2>
    </div>
  );
}

export default ComponentF;
