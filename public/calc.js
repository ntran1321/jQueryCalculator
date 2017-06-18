$(document).ready(function() {
  run();
});

function run() {
  var dispNum = '';
  var operands = [];
  var operator = '';
  var operationToPerform = '';
  var clearDisplay = false;

  //create event listener for clear button
  var clear = $('#clear');
  clear.click(function(e) {
    $('#display').text('');
    operands = [];
  });

  //create event listener for number buttons
  $('.number').click(function(e) {
    var num = $(this).attr("id");
    if (num === 'decimal') {
      num = '.';
    }

    if (clearDisplay === false) {
      dispNum = $('#display').text() + num;
      $('#display').text(dispNum);
    } else if (clearDisplay === true) {
      $('#display').text('');
      dispNum = $('#display').text() + num;
      $('#display').text(dispNum);
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
      $('#display').text(result);
    }
  });
}
