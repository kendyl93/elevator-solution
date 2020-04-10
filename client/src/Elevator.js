import React from 'react';
import PropTypes from 'prop-types';

const Elevator = ({ id, direction, idleFloor }) => {
  return (
    <div>
      <h2>
        Elevator
        {id}
      </h2>
      <p>
        floor:
        {idleFloor}
      </p>
      <p>
        direction:
        {direction}
      </p>
    </div>
  );
};

Elevator.propTypes = {
  id: PropTypes.string,
  direction: PropTypes.string,
  idleFloor: PropTypes.number
};

export default Elevator;
