$(document).ready(function() {
  console.log("ready");
  run();
});

function run() {
  var dispNum = '';
  var operands = [];
  var operator = '';
  var operationToPerform = '';
  var pressEquals = false;
  // var num1 = 0;
  // var num2 = 0;
  //create event listener for clear button
  var clear = $('#clear');
  clear.click(function(e) {
    console.log("clear clicked");
    $('#display').text('');
    operands = [];
    console.log("operands length " + operands.length);
  });

  //create event listener for number buttons
  $('.number').click(function(e) {
    var num = $(this).attr("id");
    dispNum = $('#display').text() + num;
    $('#display').text(dispNum);
    console.log("operands length " + operands.length);

  });

  //create event listeners for operations
  $('.operator').click(function(e) {
    operator = $(this).attr("id");
    console.log("operator clicked");
    operands.push(parseInt(dispNum));
    console.log("operands length " + operands.length);

    if (operator !== 'equals') {
      operationToPerform = $(this).attr("id");
      console.log("operationToPerform is " + operationToPerform);

      $('#display').text('');
      console.log("operands length " + operands.length);

    } else if (operator === 'equals') {
      var result = 0;
      console.log("in calc equals");
      console.log(operator);

      switch (operationToPerform) {
        case 'divide':
          console.log("divide stuff!");
          console.log("num1 = " + operands[0]);
          console.log("num2 = " + operands[1]);
          result = operands[0] / operands[1];
          break;
        case 'multiply':
          console.log("multiply");
          console.log("num1 = " + operands[0]);
          console.log("num2 = " + operands[1]);
          result = operands[0] * operands[1];
          $('#display').text(result);

          break;
        case 'subtract':
          console.log("subtract!");
          console.log("num1 = " + operands[0]);
          console.log("num2 = " + operands[1]);
          result = operands[0] - operands[1];
          break;
        case 'add':
          console.log("add stuff!");
          console.log("num1 = " + operands[0]);
          console.log("num2 = " + operands[1]);
          result = operands[0] + operands[1];
          break;
      }
      $('#display').text(result);
    }
  });
}
