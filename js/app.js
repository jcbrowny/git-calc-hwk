// alert("I am a calculator")
// var addv_choice = prompt("(1)Simple (2)Advance");

  // if (addv_choice == 1);

    var math_choice = prompt("Choose a function: (1)Addition (2) subtraction (3)Multiplication (4)Dividing (5)Quit");

    if (math_choice == 1 || math_choice == ""){
      var a = +prompt("Enter first number");
      var b = +prompt("Enter second number");
      alert (a + b);
    }else if (math_choice == 2){
      var a = +prompt("Enter first number");
      var b = +prompt("Enter second number");
      alert (a - b);
    }else if (math_choice == 3){
      var a = +prompt("Enter first number");
      var b = +prompt("Enter second number");
      alert (a * b);
    }else if (math_choice == 4){
      var a = +prompt("Enter first number");
      var b = +prompt("Enter second number");
      alert (a / b);
    }
    else if (math_choice == 5) {
      alert("closing calculator");
    }

  // else if (addv_choice == 2);
  //
  //   var advmath_choice = prompt("Choose a function: (1)Power (2)Square Root")

  // if (advmath_choice == 1){
  //   var a = parsefloat(prompt("Enter first number"));
  //   var b = parsefloat(prompt("Enter second number"));
  //   alert (Math.pow("a, b")
  // }
// var restart = 0
// while (restart < 5) {
//   console.log("this has ran" + restart + " times");
//   restart++
// }
