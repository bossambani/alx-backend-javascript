import ClassRoom from './0-classroom';

function initializeRooms() {
  const classes = [19, 20, 34];
  const roomsCreated = [];

  for (let i = 0; i < classes.length; i += 1) {
    const room = new ClassRoom(classes[i]);
    roomsCreated.push(room);
  }
  return roomsCreated;
}
export default initializeRooms;
