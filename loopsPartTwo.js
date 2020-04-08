/*
    Loops Practice - Part Two

    Exercises Continued
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: compareArray is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Add exercises to your routine, using a for loop!

    Refactor your code from part one, but use the for loop instead of a while loop.
*/

function addExerciseToRoutineForLoop(routine, exercise, numRepetitions) {
  for (let i = 0; i < numRepetitions; i++) {
    routine.push(exercise);
  }
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One--For-Loop---");
let routineOne = [];
console.log("* Add Situps");
addExerciseToRoutineForLoop(routineOne, "situp", 4);
console.log(compareArray(routineOne, ["situp", "situp", "situp", "situp"]));
console.log("* Add single pushup");
addExerciseToRoutineForLoop(routineOne, "pushup", 1);
console.log(
  compareArray(routineOne, ["situp", "situp", "situp", "situp", "pushup"])
);
console.log("* Add zero pullups");
addExerciseToRoutineForLoop(routineOne, "pullup", 0);
console.log(
  compareArray(routineOne, ["situp", "situp", "situp", "situp", "pushup"])
);

/* ------------------------------------------------
    Exercise Two

    Your trainer has given you a schedule of how many situps to do every day for the next two week.

    The schedule might look like this:
    let schedule = [5, 5, 8, 10, 3, 12, 15, 20, 10, 22, 25, 30, 15, 40];

    Given a schedule like this, you want to determine both the minimum and maximum number of situps
    you have to do on any given day.

    Complete the findMinimumAndMaximum() function below.

    For example, with the schedule above the min would be 3 and the max would be 40.
    The function should return those two values in an array.
*/

function findMinimumAndMaximum(schedule) {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  let max = schedule[0];
  const forloopMinMax = () =>
  for (let i = 1; i < schedule.length; i++) {
      let value = schedule[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
  }
  return [min, max];
}

/* 
   -------TESTS----------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
console.log("* Find min and max");
let schedule = [5, 5, 8, 10, 3, 12, 15, 20, 10, 22, 25, 30, 15, 40];
let result = findMinimumAndMaximum(schedule);
console.log(result[0] == 3 && result[1] == 40);

console.log("* Find min and max same number");
schedule = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
result = findMinimumAndMaximum(schedule);
console.log(result[0] == 5 && result[1] == 5);

console.log("* Find min and max one number");
schedule = [8];
result = findMinimumAndMaximum(schedule);
console.log(result[0] == 8 && result[1] == 8);

console.log("* Find min and max with zero");
schedule = [8, 0, 3, 10];
result = findMinimumAndMaximum(schedule);
console.log(result[0] == 0 && result[1] == 10);

/* ------------------------------------------------
    Exercise Three

    A shorter routine format.

    Your trainer got tired of writing out repeated strings for your routines, so
    they devised a shorthand.

    Now they have started writing routines as a string like this:
    let routineString = "20:situp|5:pushup|10:legraise|2:pullup";
    
    Each exercise is separate by a veritcal bar character |

    An exercise looks like this
    20:situp
    Within each exercise, there is a coloon character : separating the number of reps and the exercise.

    Create the convertRoutineFromNewFormat function, which converts the new routine format
    into the old one.
    
    So this
    "3:pushup|2:situp"
    becomes this
    ["pushup", "pushup", "pushup", "situp", "situp"]
    
    Create a new array for the converted routine, and return it from the function.

    Hint: you can use the .split() function on  a string to break it up into parts.
    https://www.w3schools.com/jsref/jsref_split.asp
    
    let parts = "a|b|c".split('|');
    now parts = ["a", "b", "c"]
    Then you can access the individual parts by doing parts[0], etc...

    Hint2: This may require a two dimensional loop!
*/

function convertRoutineFromNewFormat(routineString) {
  let routine = [];
  // Your Code Here!
  return routine;
}

/* 
   -------TESTS----------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Three-----");
console.log("* Perform Routine");
let routineThreeString = "5:situp|4:pushup|3:legraise|2:pullup";
let routineThree = convertRoutineFromNewFormat(routineThreeString);
console.log(
  compareArray(routineThree, [
    "situp",
    "situp",
    "situp",
    "situp",
    "situp",
    "pushup",
    "pushup",
    "pushup",
    "pushup",
    "legraise",
    "legraise",
    "legraise",
    "pullup",
    "pullup",
  ])
);

console.log("* Perform Routine with empty exercise");
routineThreeString = "3:situp|0:pushup|1:legraise";
routineThree = convertRoutineFromNewFormat(routineThreeString);
console.log(
  compareArray(routineThree, ["situp", "situp", "situp", "legraise"])
);

console.log("* Perform single exercise");
routineThreeString = "3:situp";
routineThree = convertRoutineFromNewFormat(routineThreeString);
console.log(compareArray(routineThree, ["situp", "situp", "situp"]));

/* ---------------------------------------------------------------------------
    Exercise Four

    Create a difficulty rating for a routine.

    Your trainer want to label a routine as Easy, Hard, or Intense.  
    So they came up with this grading scale.

    Every exercise is worth a number of points.

    situp = 1 point
    legraise = 2 points
    pushup = 4 points
    pullup = 10 points

    Given a routine, count up sum of points to create a score.

    So the routine
    ["situp", "situp", "legraise", "pushup", "pushup", "pullup"]
    1 + 1 + 2 + 4 + 4 + 10
    is worth 22 points.

    Then assign a difficulty based on this scale:

    If the routine is less than 30 points, it is Easy
    If the routine is between 30 and 60 points, it is Hard
    If the routine is greater than or equal to 60 points, then it is Insane

    Return the Difficulty Rating of the routine as a string.
    "Easy", "Hard", or "Insane"
*/

function calculateRoutineDifficulty(routine) {
  let difficulty = "";
  // Your Code Here!
  return difficulty;
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Four-----");
console.log("* Calculate Easy Routine");
let routineFour = [
  "situp",
  "situp",
  "situp",
  "situp",
  "legraise",
  "legraise",
  "legraise",
  "legraise",
];
console.log(calculateRoutineDifficulty(routineFour) == "Easy");

console.log("* Calculate Hard Routine");
routineFour = [
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
];
console.log(calculateRoutineDifficulty(routineFour) == "Hard");

console.log("* Calculate Exactly 30");
routineFour = [
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "legraise",
  "legraise",
];
console.log(calculateRoutineDifficulty(routineFour) == "Hard");

console.log("* Calculate Insane Routine");
routineFour = [
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
  "legraise",
  "legraise",
  "pullup",
  "pullup",
  "pullup",
  "pullup",
];
console.log(calculateRoutineDifficulty(routineFour) == "Insane");

/*
   -------TEST UTILITIES------------------------------------------------------
   These are utilities for the tests.

   Do not modify anything below this line.

   But read through these and try to understand what they  do.
*/
function copyArray(arr) {
  let copy = [];

  if (arr && arr.length > 0) {
    for (let index in arr) {
      copy[index] = arr[index];
    }
  }

  return copy;
}

function compareArray(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length != arr2.length) {
    return false;
  }

  for (let index in arr1) {
    if (arr1[index] != arr2[index]) {
      return false;
    }
  }

  return true;
}
