$(document).ready(function() {
  let elem = document.getElementById('tweet');
  let button = document.getElementById('button');
  elem.addEventListener('keyup', countCharacters, false);
  button.addEventListener('click', countCharacters);

  button.addEventListener('click', function(){
    let value = document.getElementById('tweet').value;
      if (value.length === 0){
      event.preventDefault();
      $("#empty-tweet").slideDown("slow", function(){
    });
  };
});

// counts the number of characters being inputted into textarea and displays error messages + count font red when 140 characters exceeded
function countCharacters(event) {
  let input = document.getElementById('tweet').value;
  let counter = (140 - (input.length));
    countRemaining = document.getElementById('counter');
      if (counter >= 0){
        countRemaining.textContent = counter;
        $("#empty-tweet").slideUp("slow", function(){
      });
        $("#long-tweet").slideUp("slow", function(){
      });
        countRemaining.style.color = '#244751';
      } else {
        event.preventDefault();
        event.stopPropagation();
        countRemaining.textContent = counter;
        countRemaining.style.color = "red"
        $("#long-tweet").slideDown("slow", function(){
      });
    };
  };
});