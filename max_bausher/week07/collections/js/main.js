// Collections!
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//
var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];
//
var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// Random words from here... http://www.catb.org/jargon/html/go01.html
// Exercises
//
// Sort the people by 'uid'

    var uidPeople = _.sortBy(people, 'uid');

    console.log(uidPeople);

// Group the random words by the lower case version of their first letter

    var groupByFirstLetter = _.groupBy(words, function(word){
        return word[0].toLowerCase();
    });

    console.log(groupByFirstLetter);

// Check to see if all the words have more than 3 characters

    var allThreeOrMoreChar = _.every(words, function(word) {
        return word.length < 3;
    });

    console.log(allThreeOrMoreChar);

// Check if some words are over twenty characters long

    var someGreaterThanTwenty = _.some(words, function(word){
        return word.length > 20;
    });

    console.log(someGreaterThanTwenty);

// Get an array of all of the uids in people

    var allUIDS = _.pluck(people, 'uid');

    console.log(allUIDS);

// Find the person with the highest uid

    var highestUID = _.max(people, function(person){
        return person.uid;
    });

    console.log(highestUID);

// Return an object that says how many even numbers and how many odd numbers there are in numbers

    var countEvenOdd = _.countBy(numbers, function(num){
        return num % 2 == 0 ? 'even': 'odd';
    });

    console.log(countEvenOdd);

// Get three random numbers out of numbers
//
    var sampleOfThree = _.sample(numbers, 3);

    console.log(sampleOfThree);

// ============================================================
    // Arrays!
// ============================================================
    // Log out the answers to all of the following questions!
    //
    // Here is some data that you can work with.
    //
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
    var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
    //
    var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
    // Create an array of every five numbers between 30 and 101



    // Turn bumpyArr into one flat array (no nested arrays)

        var flattenArray = _.flatten(bumpyArr);

        console.log(flattenArray);

    // Remove all of the falsey elements in the uncompactedArr

        var onlyTruthy = _.compact(uncompactedArr);

        console.log(onlyTruthy);

    // Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

        var allUnique = _.uniq([ 1, 25, 100 ]);
        var allUnique2 = _.uniq([ 1, 14, 25 ]);
        var allUnique3 = _.uniq([24]);
        var allUnique4 = _.uniq([Infinity]);
        var allUnique5 = _.uniq([-0]);

        console.log(allUnique, allUnique2, allUnique3, allUnique4, allUnique5);

    // Find the index of the first element in numbers that is over 7 and is even

        var firstElem = _.findIndex(numbers, function(num){
            return num > 7 && num % 2 === 0;
        });

        console.log('first index: ', firstElem);

    // Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

        var peopleObject = _.object(['age', 'location'],[ NaN, undefined ]);

        console.log(peopleObject);




    // Objects!
    // Log out the answers to all of the following questions!
    //
    // Here is some data that you can work with.
    //
    var objectToMap = {
      start:  100,
      middle: 853,
      end:    912
    }
    // Multiply each value in objectToMap by a random number and return an object with the changed values

        var multiplyVal = _.mapObject({start: 100, middle: 852, end: 912}, function(val, key) {
            return val * 5;
        });

        console.log(multiplyVal);


    // Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

    var objToArray = _.pairs(objectToMap);

    console.log(objToArray);


    // Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

    var reverseKeyValue = _.invert(objectToMap)

    console.log(reverseKeyValue);

    // Remove the "start" key from objectToMap in two different ways

    var removeOne = _.pick(objectToMap, 'middle', 'end');
    console.log(removeOne);

    var removeTwo = _.omit(objectToMap, 'start');
    console.log(removeTwo);



//     Utilities, Functions and Chaining!
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];
//
var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// Log out 30 random numbers between 20 and 100
// Create a function that can only ever be called once



// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>




// The Final Exercise
//
// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!

//
// Eventually we want five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// You'll need to rearrange the data firstly, then alter the data, then print it out.
//
// A few hints
//
// Have a think before you read these!
//
// The following functions could be helpful
//
// _.chain();
// _.map();
// _.unzip();
// _.object();
// _.invert();
// _.mapObject();
// _.isNaN();
// _.template();
// The steps you could take...
//
// First step is restructuring each one of the nested arrays (_.unzip will help). For example:
// // This...
// [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
//
// // Needs to become this...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
// You then need to turn them into an object (_.object will help). For example:
// // This...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
//
// // Needs to become this...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
// You then need to flip that object around (_.invert will help). For example:
// // This...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
//
// // Needs to become this...
// { born: "1990", firstName: "groucho", lastName: "marx" }
// You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
// // This...
// { born: "1990", firstName: "groucho", lastName: "marx" }
//
// // Needs to become this...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
// After that, for each object in the startingData, you need to create a template (_.template will help) that receives an object, and console.log a string that looks something like this:
// // This...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
//
// // Needs to be used to create a string that looks like this...
// "Groucho Marx was born in 1890."
