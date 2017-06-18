$(document).ready(function() {
  run();
});

function run() {
  var dispNum = '';
  var operands = [];
  var operator = '';
  var operationToPerform = '';
  var pressEquals = false;

  //create event listener for clear button
  var clear = $('#clear');
  clear.click(function(e) {
    $('#display').text('');
    operands = [];
  });

  //create event listener for number buttons
  $('.number').click(function(e) {
    var num = $(this).attr("id");
    dispNum = $('#display').text() + num;
    $('#display').text(dispNum);

  });

  //create event listeners for operations
  $('.operator').click(function(e) {
    operator = $(this).attr("id");
    operands.push(parseInt(dispNum));


    if (operator !== 'equals') {
      operationToPerform = $(this).attr("id");
      $('#display').text('');

    } else if (operator === 'equals') {
      var result = 0;

      switch (operationToPerform) {
        case 'divide':
          result = operands[0] / operands[1];
          break;
        case 'multiply':
          result = operands[0] * operands[1];
          $('#display').text(result);

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
