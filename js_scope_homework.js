// Episode 1

//Variable name created/assigned to the name Keith.
//Function printName created. This function will print the string 'My name is ' plus the value of the variable name.
//Result: My name is Keith

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();




// Episode 2

// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());




// Episode 3

// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();




// Episode 4
//
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
//



// Episode 5

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());




// Episode 6

// var murderer = 'rick';
//
// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);




// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
