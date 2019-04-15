// alert("I am a calculator")
var math_choice = prompt("Choose a function: (1)addition (2) subtraction (3)multiplication (4)Dividing");

if (math_choice == 1){
  var a = +prompt("Enter first number");
  var b = +prompt("Enter second number");
  alert (a + b);
}else if (math_choice == 2){
  var a = +prompt("Enter first number");
  var b = +prompt("Enter second number");
  alert (a - b);
// }else if (math_choice == 3){
//   var a = +prompt("Enter first number");
//   var b = +prompt("Enter second number");
//   alert (a * b)
// }else if (math_choice == 4){
//   var a = +prompt("Enter first number");
//   var b = +prompt("Enter second number");
//   alert (a / b)
// }
