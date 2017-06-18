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

  document.addEventListener('keydown', function(e){
    if (e.keyCode === 190) {
      num = '.';
    }
    if (e.keyCode === 8) {
      console.log("backspace clickd")
      console.log("dispNum" + dispNum);
      dispNum = $('#display').text().slice(0,-1);
      displayToScreen(dispNum.slice(0,-1));
    }
    if(e.keyCode >= 48 && e.keyCode <= 57){
      num = e.key;
    }
    if (clearDisplay === false) {
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
    } else if (clearDisplay === true) {
      $('#display').text('');
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
      clearDisplay = false;
    }
  });

  //create event listener for number buttons
  $('.number').click(function(e) {
    num = $(this).attr("id");
    if (num === 'decimal') {
      num = '.';
    }

    if (clearDisplay === false) {
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
    } else if (clearDisplay === true) {
      $('#display').text('');
      dispNum = $('#display').text() + num;
      displayToScreen(dispNum);
      clearDisplay = false;
    }
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

function displayToScreen(numbers){
  $('#display').text(numbers);
}
