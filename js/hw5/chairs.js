function meeting(room, need) {
  let takenChairs = [];
  if (!need) return "Game On";
  for (let [used, chairs] of room) {
    chairs = Math.min(need, Math.max(0, chairs - used.length));
    takenChairs.push(chairs);
    need -= chairs;
    if (!need) return takenChairs;
  }
  return "Not enough!";
}
