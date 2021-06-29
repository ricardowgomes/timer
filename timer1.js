const args = process.argv;

const timer = (input) => {
  if (input.length < 3) {
    return console.log("No input were provided");
  }

  let arrayOfInput = input.splice(2);
  let char = 0;

  arrayOfInput = arrayOfInput.map(el => Number(el)).filter(el => !isNaN(el) && el > 0).sort((a, b) => a - b);

  let delay = arrayOfInput[char] * 1000;

  (function clockTicking() {
    process.stdout.write('\x07');

    if (char < arrayOfInput.length) {
      setTimeout(clockTicking, delay);

      delay = ((arrayOfInput[char + 1] - arrayOfInput[char]) * 1000) || delay;

      char++;

    } else {
      console.log("\n");
    }
  })();
};

timer(args);

