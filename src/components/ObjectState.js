import { useState } from 'react';

function ObjectState() {
  const myObj = {
    firstName: '',
    lastName: '',
  };

  const [name, setName] = useState(myObj);

  return (
    <div>
      <input
        type='text'
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type='text'
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>Your first name is {name.firstName}</h1>
      <h1> Your last name is {name.lastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default ObjectState;
