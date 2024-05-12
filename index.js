// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }


  
console.log(saturdayFun());
console.log(saturdayFun("bike riding"));

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}!`;
  };
  

const MondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}!`;
  };



console.log(mondayWork()); // Output: "This Monday, I will go to the office!"
console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home!"

function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  // index.js
function wrapAdjective(flair = "*") {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}




  
  