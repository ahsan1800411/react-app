import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ArrayState() {
  const [items, setItems] = useState([]);

  const newObj = {
    id: uuidv4(),
    value: Math.floor(Math.random() * 10) + 1,
  };

  const addItem = () => {
    setItems([...items, newObj]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <div key={item.id}>
            <li>{item.value}</li>
            <li>{item.id}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ArrayState;
