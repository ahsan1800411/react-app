import { Navigate } from 'react-router-dom';
function Success() {
  const user = 'null';
  return (
    <div>
      <h1>success</h1>
      {user ? <Navigate to='/learn' /> : <Navigate to='/Home' />}
    </div>
  );
}

export default Success;
