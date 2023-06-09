// Exercise 08



// Standard role-playing dice, ranging from 4 faces to 20,
// specified in terms of minimum and maximum face value.
const d4  = {min: 1, max: 4};
const d6  = {min: 1, max: 6};
const d8  = {min: 1, max: 8};
const d10 = {min: 0, max: 9};
const d12 = {min: 1, max: 12};
const d20 = {min: 1, max: 20};

function roll({max, min}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Toss one or more dice and sum up their face values.
function toss(...args) {
  const dice = Array.prototype.slice.call(args);

  return dice.map(roll).reduce((sum, value) => sum + value);
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue, bonus = {min: 0, max: 0}, penalty = {min: 0, max: 0}) {
  let result = toss(d20, bonus, penalty);
  // Normalize in case bonus or penalty push result out of the D20 range.
  result = Math.max(1, result);
  result = Math.min(20, result);

  console.log(`--> ${result}`);

  switch (result) {
    case 1:
      automaticFail();
      break;
    case 20:
      automaticSuccess();
      break;
    default: result >= characterValue ? success() : fail();
  }
}

function success() {
  console.log('Your character succeeds.');
}

function fail() {
  console.log('Your character fails.');
}

function automaticSuccess() {
  console.log('Your character succeeds without effort. Glory!');
}

function automaticFail() {
  console.log('Meagre attempt. Your character fails miserably.');
}

// Example character.
const myCharacter = {
  name: 'Jenkins',
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins is challenged to a drinking contest.
// In order to determine how much he can take, he rolls against his
// constitution. Since he just ate a huge portion of pork roast, he
// gets a D4 bonus die.
targetRoll(myCharacter.constitution, {min: 0, max: 4});

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);