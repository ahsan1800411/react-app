import { NavLink } from 'react-router-dom';

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? 'red' : 'black',
          };
        }}
        to='/courses/:react'
      >
        {' '}
        React
      </NavLink>
      <NavLink to='/courses/:react'> Angular</NavLink>
      <NavLink to='/courses/:react'> Vue</NavLink>
    </div>
  );
}

export default Courses;
