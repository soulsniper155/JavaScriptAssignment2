var first_number = parseInt(prompt("Please Enter First Number"));
var Second_number = parseInt(prompt("Please Enter Second Number"));
var operator = prompt("Please Chose Operatot (+,-,*,/,%)");
var Result;
if(operator === "+"){
    Result = first_number + Second_number;
    document.writeln("Addition of 2 number is :"+Result);
}
else if(operator === "-"){
    Result = first_number - Second_number;
    document.writeln("Subtraction of 2 number is :"+Result);
}
else if(operator === "*"){
    Result = first_number * Second_number;
    document.writeln("Multiplication of 2 number is :"+Result);
}
else if(operator === "/"){
    Result = first_number / Second_number;
    document.writeln("Division of 2 number is :"+Result);
}else if(operator === "%"){
    Result = first_number % Second_number;
    document.writeln("Modulus of 2 number is :"+Result);
}else{
    document.writeln("Wrrong input... Try again");
}