import React from 'react';
import PropTypes from 'prop-types';

export default function Props({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

Props.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
