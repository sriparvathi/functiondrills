/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
  // function sayHello(){
  //   console.log("Hello World");
  // }
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// function print(message){
//   console.log(message);
// }


/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 *  ', followed by the message passed in as a parameter.
//   const printMessage=(message)=>{
//   console.log("Today's message is:" + message);
//  }


/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function exponentiation (a) {
//     return a ** 2;
//   }
  
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
// const reverseMessage = (message)=>{
    
//   let splitMessage = message.split(""); //["h", "e", "l", "l", "o"]
//   let reverseArray = splitMessage.reverse(); // ["o", "l", "l", "e", "h"]
//   let joinArray = reverseArray.join(""); // "olleh"
//   return joinArray; // "olleh"
// }

//   reverseMessage("hello"); // "olleh"
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
  
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  // function makePerson(firstname, lastname) {
  //   firstname: firstname,
  //     lastname: lastname
  // }
  
  // const zakk = makePerson('Zakk', 'F')
  // const jimmy = makePerson('Jimmy', 'B')
  
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
  //  function getInfo(){
  //   return customer={
  //     Name:
  //     Age  : 
  //     Email : 
  //     Id : 

  //   }
  // }
  
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */ 
  //  function friendsListOfFive(){
  //   return arr['a', 'b', 'c', 'd', 'e'];
  // }
  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
   //let sum = 0
  // function addToSum(){
  //   sum += Number;
  // }
  // addToSum(5);
  // addToSum(34);
  // addToSum(75);
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
    // function sum(arr[]){
    //   for (let i= 0; i< arr.length; i++) {
    //    sum += arr[i];
    // }
    // sum(arr[9, 20, 15]);
    //  console.log(sum);
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
//      function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");
  
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
  /** Starter Code */
  //testFunc()()
  
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  //  function add(a, b) {
  //    return a + b
  //  }
  // const total= add(2, 4);

  
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
  //  function sayHello(){
  //   alert("hello world");
  //  }
  //  sayHello();