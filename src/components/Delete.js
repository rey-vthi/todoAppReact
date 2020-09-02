import React from 'react';

const Delete = function(props) {
  return (
    <div className="remove" onClick={props.remove}>
      X
    </div>
  );
};

export default Delete;
