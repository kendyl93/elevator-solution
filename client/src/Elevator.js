import React from 'react';
import PropTypes from 'prop-types';

const Elevator = ({ id, direction, idleFloor, busy }) => {
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
      <p>
        busy:
        {busy ? 'YES' : 'NO'}
      </p>
    </div>
  );
};

Elevator.propTypes = {
  id: PropTypes.number,
  direction: PropTypes.string,
  idleFloor: PropTypes.number,
  busy: PropTypes.bool
};

export default Elevator;
