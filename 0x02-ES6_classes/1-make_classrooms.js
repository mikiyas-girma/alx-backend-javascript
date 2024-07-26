import ClassRoom from './0-classroom';

const initializeRooms = () => [19, 20, 34].map((size) => new ClassRoom(size));

export default initializeRooms;
