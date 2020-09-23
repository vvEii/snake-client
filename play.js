const connect = require('./client');

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

console.log('Connecting ...');
connect();
setupInput();
