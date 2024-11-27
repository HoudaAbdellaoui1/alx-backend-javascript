process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  const name = process.stdin.read(); // Trim whitespace or newlines from the input
  if(name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handle program exit
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
