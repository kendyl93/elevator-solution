import React from 'react';
import PropTypes from 'prop-types';
import { updateStatus } from './helpers';

const isEligible = (direction, idleFloor, floor) => {
  if (direction === 0) {
    // eligible, and return distance
    return Math.abs(floor - idleFloor);
  } else {
    return -1;
  }
};

const assignJob = (elevator, elevators, setElevators, floor) => {
  if (floor == elevator.idleFloor) {
    setElevators(
      [
        ...elevators.filter(({ id }) => id !== elevator.id),
        { ...elevator, status: updateStatus(elevator) }
      ].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  } else {
    elevator.direction = floor - elevator.idleFloor > 0 ? 1 : -1;
    setElevators(
      [
        ...elevators.filter(({ id }) => id !== elevator.id),
        { ...elevator, status: updateStatus(elevator) }
      ].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
    setTimeout(() => {
      elevator.idleFloor = floor;
      elevator.direction = 0;
      setElevators(
        [
          ...elevators.filter(({ id }) => id !== elevator.id),
          { ...elevator, status: updateStatus(elevator) }
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      );
    }, 1000 * Math.abs(floor - elevator.idleFloor));
  }
};

const handleRequest = (elevators, setElevators, floor) => {
  var i,
    minIndex = -1,
    minDistance = Infinity;

  for (i = 0; i < elevators.length; i++) {
    var distanceIndex = isEligible(
      elevators[i].direction,
      elevators[i].idleFloor,
      floor
    );
    if (distanceIndex >= 0 && distanceIndex < minDistance) {
      minIndex = i;
      minDistance = distanceIndex;
    }
  }
  if (minIndex != -1) {
    console.log({ ELEV: elevators[minIndex] });
    assignJob(elevators[minIndex], elevators, setElevators, floor);
  } else {
    alert('no eligible elevators');
  }
};

const calculateDirection = (idleFloor, destinatedFloor) => {
  const destinationAndIdleFloorDifference = idleFloor - destinatedFloor;

  if (destinationAndIdleFloorDifference === 0) {
    return 0;
  }

  if (destinationAndIdleFloorDifference < 0) {
    return 1;
  }

  return -1;
};

const Floor = ({ id, elevators, setElevators }) => {
  const handleUpPressed = () => {
    handleRequest(elevators, setElevators, id);
  };

  return (
    <div>
      <h2>
        Floor
        {id}
      </h2>
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
