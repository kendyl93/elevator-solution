import React from 'react';
import PropTypes from 'prop-types';

const Floor = ({ id, elevator, setElevator }) => {
  const handleUpPressed = () => {
    setElevator({
      ...elevator,
      idleFloor: id,
      direction:
        id - elevator.idleFloor === 0
          ? '-'
          : id - elevator.idleFloor > 0
          ? 'UP'
          : 'DOWN'
    });
  };

  return (
    <div>
      <h2>Floor {id}</h2>
      <button type="button" onClick={handleUpPressed}>
        CALL elevator
      </button>
    </div>
  );
};

Floor.propTypes = {
  id: PropTypes.number,
  elevator: PropTypes.object,
  setElevator: PropTypes.func
};

export default Floor;
