export const updateStatus = elevator => {
  if (elevator.direction == 0) {
    return `floor: ${elevator.idleFloor}`;
  } else {
    return `Moving in: ${elevator.direction === 1 ? 'up' : 'down'} direction`;
  }
};
