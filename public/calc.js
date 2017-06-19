$(document).ready(function() {
  run();

});

function run() {
  var num = '';
  var dispNum = '';
  var operands = [];
  var operator = '';
  var operationToPerform = '';
  var clearDisplay = false;

  //create event listener for clear button
  var clear = $('#clear');
  clear.click(function(e) {
    displayToScreen('');
    operands = [];
  });

  /* Kris Note
    This is still an event listener (it's a JavaScript event listener), which
    is totally fine, but you will usually want to keep things consistent...

    e.g. if you are using jQuery, keep using jQuery.
  */
  $(document).on('keydown', function(e){
    if (e.keyCode === 190) {
      num = '.';
    }
    /* Kris Note:
      This should fix the backspace functionality
    */
    if (e.keyCode === 8) {
      dispNum = $('#display').text()      // "987"
                             .split("")   //["9","8","7"]
                             .slice(0,-1) // ["9","8"]
                             .join("");   // "98"
      displayToScreen(dispNum);
    }
    /* Kris Note:
      I nested this conditional because you had a weird bug where as long as
      'clearDisplay === false' ANY key pressed would add the last number to
      your display, this way it will only happen if it is a number key.

      This also fixes part of the issue with backspace.
    */
    if(e.keyCode >= 48 && e.keyCode <= 57){
      num = e.key;
      /* Kris Note:
        This works totally fine, it just needs to be nested.

        (NOTE: I moved this logic into a reusable named function 'updateDisplay'
        to keep things DRY)
      */
      updateDisplay()
    }
  });

  function updateDisplay() {
    if (clearDisplay === false) {
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
    } else if (clearDisplay === true) {
      $('#display').text('');
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
      clearDisplay = false;
    }
  }

  /* Kris Note:
    I moved this here for 2 reasons:
    a.) I can
    b.) It encapsulates ALL of your functionality into the 'run' functions
    scope, now you have no global variables! (how awesome is that?) :)
  */
  function displayToScreen(numbers){
    $('#display').text(numbers);
  }

  //create event listener for number buttons
  $('.number').click(function(e) {
    num = $(this).attr("id");
    if (num === 'decimal') {
      num = '.';
    }

    updateDisplay()
  });


  //create event listeners for operations
  $('.operator').click(function(e) {
    operator = $(this).attr("id");
    operands.push(parseFloat(dispNum));
    dispNum = 0;
    clearDisplay = true;

    if (operator !== 'equals') {
      operationToPerform = $(this).attr("id");
    } else if (operator === 'equals') {
      var result = 0;

      switch (operationToPerform) {
        case 'divide':
          result = operands[0] / operands[1];
          break;
        case 'multiply':
          result = operands[0] * operands[1];
          break;
        case 'subtract':
          result = operands[0] - operands[1];
          break;
        case 'add':
          result = operands[0] + operands[1];
          break;
      }
      displayToScreen(result);
    }
  });
}
