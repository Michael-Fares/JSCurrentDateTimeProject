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
const numberToString = () => {
  const num = document.getElementById('number').value
  const s = num.toString();
  console.log(s, typeof s);
  document.getElementById("display-element").innerHTML = s;
  return s;
  }
  
  
  
  
  // Write a JavaScript program to convert a string to the number.
  //does not parse ints in middle of string
  const stringToNumber = () => {
  const str = document.getElementById('string').value
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
  
    const checkDataType = () => {
    const value = document.getElementById('data').value
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
  
  
   
  // Need to figure out how to get DOM to take in the store input value in the actual arguments.
    // Write a JavaScript program that adds 2 numbers together.
    const addTwoNumbers = (x,y) => {
     return x + y;
    }
  
  // Write a JavaScript program that runs when 1 of 2 things are true. - check if someone is either 20 or younger or 40 or older
  
  const checkValue = (x) => {
    if (x <=20 || x >= 40) {
      return (true, 'The number is either less than or equal to 20, or greater than or equal to 40');
    } else {
      return (false, 'The number is between 20 and 40');
    }
  }
  
  // // Write a JavaScript program that runs when both things are not true. - Check that the age range is 20-40 inclusive. 
  // Why can't I get this one to work?
  const checkNumbers = (x,y) => {
   if (!x===10 && !y===10) {
     return 'neither # is 10';
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
