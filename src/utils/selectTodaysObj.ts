export const selectTodaysObject = (obj: { x: Date; y: number }) =>
  obj.x.toDateString() === new Date().toDateString();
