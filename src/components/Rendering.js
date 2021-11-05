import React, { useState } from 'react';

function Rendering() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {/* {!loading && <h1>Hello World</h1>} */}
      {/* {!loading ? <h1>Loading...</h1> : <h1>Hello World</h1>} */}
    </div>
  );
}

export default Rendering;
