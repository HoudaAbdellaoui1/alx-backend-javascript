import { taskFirst, getLast, taskNext } from './0-constants';

describe('Testing task functions', () => {
  test('taskFirst should return the correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('getLast should return the correct string', () => {
    expect(getLast()).toBe(' is okay');
  });

  test('taskNext should return the correct combined string', () => {
    expect(taskNext()).toBe('But sometimes lets is okay');
  });
});
