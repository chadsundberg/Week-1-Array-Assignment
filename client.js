var mySillyArray = ["yoga", "does not", "corn on the cob", "dental floss", "huge", "dry-cleaning"];
// my array has a .length of 5

var mySillierArray = ["people", "fleeing", "or sleeping", "apples", "public speaking"]

function coolFunction(mySillyArray, i) {
  if (i > mySillyArray.length -1) {
    return console.warn("That won't work!");
  } else { for (i; i < mySillyArray.length; i++) {
  // console.log(mySillyArray[i] + " " + mySillyArray[i += 1] + " " + mySillyArray[i += 1]);  //this can't be correct because the message is too static.  It needs to be more flexible with lists of different lengths.
  // for(i; i < mySillyArray.length; i++) {
  //   var sentence = mySillyArray[i] + " " + mySillyArray[i]
  console.log(mySillyArray[i]);
    }
  }
};

coolFunction(mySillyArray, 3);
coolFunction(mySillyArray, 2);
coolFunction(mySillierArray, 1);
coolFunction(mySillyArray, 6);
coolFunction(mySillierArray, 5);
coolFunction(mySillyArray, 5);
coolFunction(mySillyArray, 4);


// I'm getting the correct output, but not in the correct format.
// I need help figuring out how to get this to console log the remaining array values one string.
