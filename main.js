// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
//I had to remove the parameter num and instead accese the value of the input to get it to work
const numberToString = (num) => {
  num = document.getElementById('number').value
  const s = num.toString();
  console.log(typeof s);
  document.getElementById("display-element").innerHTML = s;
  return s;
  }
  
  
  
  
  // Write a JavaScript program to convert a string to the number.
  //does not parse ints in middle of string
  const stringToNumber = (str) => {
  str = document.getElementById('string').value
  const num = parseInt(str);
  console.log(num, typeof num);
  document.getElementById("display-element").innerHTML = num;
  return num;
  }
  
  
  
  // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
    // * Boolean
    // * Null
    // * Undefined
    // * Number
    // * NaN
    // * String
  
    const checkDataType = (value) => {
    value = document.getElementById('data').value
    if(value === "") {
    document.getElementById("display-element").innerHTML = "null";
    return "null";
    }
else if(value === "true" || value === "false") {
  document.getElementById("display-element").innerHTML = "boolean";
    return "boolean";
}
else if(!Number.isNaN(Number(value))) {
  document.getElementById("display-element").innerHTML = "number";  
  return "number";
}
else {
  document.getElementById("display-element").innerHTML = "string";
    return "string";
    }
  }
  
  
   
    // Write a JavaScript program that adds 2 numbers together.
    const addTwoNumbers = (x,y) => {
      x = parseFloat(document.getElementById('num1').value)
      y = parseFloat(document.getElementById('num2').value)
      console.log(typeof x)
      const sum = (x + y);
      document.getElementById("display-element").innerHTML = sum;
      return sum;
    }
  
// Write a JavaScript program that runs when 1 of 2 things are true. - check if a word starts with the letter a or the letter b

const checkFirstLetter = (word) => {
  word = document.getElementById('word').value
  if (word.charAt(0) === 'a' || word.charAt(0) === 'b' || word.charAt(0) === 'A' ||word.charAt(0) === 'B') {
    document.getElementById("display-element").innerHTML = 'The word begins with a or b';  
    return (true, 'The word starts with a or starts with b');
  } else {
    document.getElementById("display-element").innerHTML = 'The word does NOT begin with a or b';  
    return (false, 'The word does not begin with a or b');
  }
}
  
  // // Write a JavaScript program that runs when both things are not true. - Check that the word does not contain both the letter a and the letter s at the same time
const checkNotAS = (word) => {
  word = document.getElementById('word').value
  if (!(word.includes('a') && word.includes('s'))) {
    document.getElementById("display-element").innerHTML = "the word does not contain both a and s";
    return true;
  } else {
    document.getElementById("display-element").innerHTML = "the word contains both a and s";
    return false;
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
