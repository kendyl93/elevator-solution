export const isEligible = (direction, floor) => {
  if (direction == 0) {
    return Math.abs(floor - idleFloor);
  } else {
    return -1;
  }
};
