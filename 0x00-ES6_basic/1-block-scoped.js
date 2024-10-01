export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = false;
    const newTask2 = true;
    return [newTask, newTask2];
  }

  return [task, task2];
}
