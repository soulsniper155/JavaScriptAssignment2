var Password = "BlockChain";
var User_Password = prompt("Enter Your Password Please");

if (!User_Password) {
    document.writeln("Please Enter Your Password");
} else if (Password === User_Password) {
    document.writeln("Correct! The password you entered matches the original password");
} else {
    document.writeln("Incorrect Password.");
}