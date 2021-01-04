var guess_num = Math.floor(Math.random() * 10 + 1);
var User_Input = parseInt(prompt("Guess the secrate number.."));

if (guess_num === User_Input) {
    document.writeln("Bingo! Correct answer.");
}else if (guess_num === ++User_Input) {
    document.writeln("Close enough to the correct answer");
}else{
    document.writeln("Please Try Again");
}
