const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const text = "Type b to hear a sound right now, or a number from 1 to 9 to set a timer, or q to exit the program: ";

const getKey = (question) => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  rl.question(question, (key) => {
    if (key.toLowerCase() === 'q') {
      console.log("Thanks for using me, ciao!");
      rl.close();

    } else if (nums.includes(Number(key))) {
      console.log(`setting timer for ${key} seconds...`);

      setTimeout(() => {
        process.stdout.write('\x07');
        rl.close();
      }, key * 1000);

    } else if (key.toLowerCase() === 'b') {
      process.stdout.write('\x07');
      rl.close();

    } rl.close();
  });
};

getKey(text);