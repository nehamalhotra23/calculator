var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));



var bmi = function(number1, number2) {
 return (703 * number1 ) / (number2 * number2);
};
var number1 = parseInt(prompt("What is your weight in pounds:"));
var number2 = parseInt(prompt("What is your height in inches:"));

alert(bmi(number1,number2));





var convert = function(number3) {
	return (number3 * 9/5) + 32;
};
var number3 = parseInt(prompt("What is the temperature in Celsius?"));

alert(convert(number3));




var cooking = function(number4) {

return (number4 * 0.264);
};
var number4 = parseFloat(prompt("How many litres do you have?"));

alert(cooking(number4));
