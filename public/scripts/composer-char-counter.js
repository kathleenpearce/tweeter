$(document).ready(function() {
 let elem = document.getElementById('tweet');
 elem.addEventListener('keyup', countCharacters, false);
 function countCharacters(event) {
   input = document.getElementById('tweet').value;
   counter = (140 - (input.length));
   countRemaining = document.getElementById('counter');
   if (counter >= 0){
    countRemaining.textContent = counter;
   } else {
    countRemaining.textContent = counter;
    countRemaining.style.color = "red"
   }

 };

});