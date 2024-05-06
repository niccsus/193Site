// script.js
//alert("Hello, world!");

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button element
    var biggerButton = document.getElementById("biggerButton");
    var mooButton = document.getElementById("mooButton");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");
    var textInput = document.getElementById("textInput");
  
    // event listener for 'bigger' button
    biggerButton.addEventListener("click", function() {
      // Alert message will only pop up when the button is clicked
      alert("Hello, world!");
      textInput.style.fontSize = "24px";

    });
    //event listern for 'moo' button
    mooButton.addEventListener("click", function() {
      // Alert message will only pop up when the button is clicked
      textInput.value = textInput.value.toUpperCase(); // Convert text to uppercase
      var str = textInput.value; 
      var parts = str.split(".");
      str = parts.join(".Moo");
      textInput.value = str; 

    });


      // Fancy radio button
      fancyRadio.addEventListener("change", function() {
        if (fancyRadio.checked) {
          // Apply styles when FancyShmancy is selected
          textInput.style.fontWeight = "bold";
          textInput.style.color = "blue";
          //object.style.textDecoration="underline"
          textInput.style.textDecoration="underline";
        }
      });
    
      // Boring radio button
      boringRadio.addEventListener("change", function() {
        if (boringRadio.checked) {
          // Remove styles when BoringBetty is selected
          textInput.style.fontWeight = "normal";
          textInput.style.color = "black";
          //object.style.textDecoration="underline"
          textInput.style.textDecoration="none";
          textInput.style.fontSize = "";
        }
      });

});



  