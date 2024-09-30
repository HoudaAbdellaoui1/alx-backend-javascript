export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    var combination = 'But sometimes lets';
    combination += getLast();
  
    return combination;
  }
