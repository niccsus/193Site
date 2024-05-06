/*
 * Starter file 
 */
(function() {
  "use strict";
  var encryptItButton, resetButton, textInput;

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    textInput = document.getElementById("input-text");
    encryptItButton = document.getElementById("encrypt-it");
    encryptItButton.addEventListener("click", function() {
      // Alert message will only pop up when the button is clicked
      printToConsole();
      shiftText()
    });
    resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function() {
      // Alert message will only pop up when the button is clicked
      handleReset();
    });

  }

  

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function printToConsole() {
    console.log("Window loaded!");
  }

  function shiftText(){
    var inputText = textInput.value.toLowerCase();
    var outputText = [];
    var result = ""
    for (var i = 0; i < inputText.length; i++) {
      console.log(inputText.charAt(i));

      if (inputText.charCodeAt(i) == 122) {
        outputText = outputText.concat(97);
      } else if (inputText.charCodeAt(i) > 96 && inputText.charCodeAt(i) < 122) {
        outputText = outputText.concat(inputText.charCodeAt(i) + 1);
      } else {
        outputText = outputText.concat(inputText.charCodeAt(i));
      }
      //var charCode = inputText.charCodeAt(i); // The argument is the index of the character in the string
    }
    outputText.forEach(function(element) {
      result = result.concat(String.fromCharCode(element)) // Output each element of the array
    });
    textInput.value = result; 
  }

  function handleReset(){
    textInput.value = ""; 
    
  }

})();
