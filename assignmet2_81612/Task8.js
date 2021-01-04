var user_input = parseInt(prompt("Enter any number (Positive or Negitive)"));
if(user_input === 0){
    document.writeln("Number is Zero");
}else if(user_input >= 0){
    document.writeln("Number is Positive");
}else{
    document.writeln("Number is Negitive");
}