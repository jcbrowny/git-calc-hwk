// alert("I am a calculator")
// var addv_choice = prompt("(1)Simple (2)Advance");

  // if (addv_choice == 1);

    var math_choice = prompt("Choose a function: (1)Addition (2) subtraction (3)Multiplication (4)Dividing (5)Power (6) Square Root (7)Quit");

    if (math_choice == 1 || math_choice == ""){
      var a = Number(prompt("Enter first number"));
      var b = Number(prompt("Enter second number"));
      alert (a + b);
    }else if (math_choice == 2){
      var a = Number(prompt("Enter first number"));
      var b = Number(prompt("Enter second number"));
      alert (a - b);
    }else if (math_choice == 3){
      var a = Number(prompt("Enter first number"));
      var b = Number(prompt("Enter second number"));
      alert (a * b);
    }else if (math_choice == 4){
      var a = Number(prompt("Enter first number"));
      var b = Number(prompt("Enter second number"));
      alert (a / b);
    }else if (math_choice == 5){
      var a = Number(prompt("Enter first number"));
      var b = Number(prompt("Enter second number"));
      alert (Math.pow(a,b));
    }else if (math_choice == 6){
      var a = Number(prompt("Enter first number"));
      alert (Math.sqrt(a));
    }
    else if (math_choice >= 7) {
      alert("closing calculator");
    }

  // else if (addv_choice == 2);
  //
  //   var advmath_choice = prompt("Choose a function: (1)Power (2)Square Root")

// var restart = 0
// while (restart < 5) {
//   console.log("this has ran" + restart + " times");
//   restart++
// }
