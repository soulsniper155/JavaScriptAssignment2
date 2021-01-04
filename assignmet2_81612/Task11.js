var time = parseInt(prompt("Please Enter Time in 24hr Formate like:1900 = 7Pm "));

if ((time >= 0000) && (time < 1200)) {
    document.writeln("Good Morning");
} else if ((time >= 1200) && (time < 1700)) {
    document.writeln("Good afternoon");
} else if ((time >= 1700) && (time < 2100)) {
    document.writeln("Good evening");
} else if ((time >= 2100) && (time < 2359)) {
    document.writeln("Good night");
} else {
    document.writeln("Sorry! Your are from another Planet....Yeah i found an alien");
}