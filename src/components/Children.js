import React from 'react';

const Children = (props) => {
  return (
    <>
      {props.name}
      {props.children}
    </>
  );
};

export default Children;
