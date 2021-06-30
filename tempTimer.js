const args = process.argv;

const onlyNumbers = (arr) => {
  let arrayOfInput = arr.splice(2);

  if (arrayOfInput.length < 1) {
    return null;
  }

  arrayOfInput = arrayOfInput
    .map(el => Number(el))
    .filter(el => !isNaN(el) && el > 0)
    .sort((a, b) => a - b);

  return arrayOfInput;
};

const onlyNumbersArray = onlyNumbers(args);

const doAction = (duration, doNext = null, next) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, duration);

  if (doNext !== null) {
    return doNext(next);

  } else {
    return console.log("No input were provided");
  }
};

const keeperOfTime = (input) => {
  if (input < 1) {
    return;

  } else {
    let delay = input[0] * 1000;
    let nextDelay = input.splice(1);

    return doAction(delay, keeperOfTime, nextDelay);
  }
};

keeperOfTime(onlyNumbersArray);