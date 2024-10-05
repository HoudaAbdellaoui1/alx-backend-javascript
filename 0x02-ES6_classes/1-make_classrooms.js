import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const result = [];
  for (const s of sizes) {
    result.push(new ClassRoom(s));
  }
  return result;
}
