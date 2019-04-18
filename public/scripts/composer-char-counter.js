$(document).ready(function() {
 let elem = document.getElementById('tweet');
 let button = document.getElementById('button');
 elem.addEventListener('keyup', countCharacters, false);

  button.addEventListener('click', function(){
  let value = document.getElementById('tweet').value;
  if (value.length === 0){
    event.preventDefault();
    alert("Please enter a tweet!");
  }
})


 function countCharacters(event) {
   let input = document.getElementById('tweet').value;
   let counter = (140 - (input.length));
   countRemaining = document.getElementById('counter');
   if (counter >= 0){
    countRemaining.textContent = counter;
   } else {
    countRemaining.textContent = counter;
    countRemaining.style.color = "red"
    alert("Tweet too long!")
   }

 };

});