var Subject_1 = parseInt(prompt("Please Enter Your First Subject Marks"));
var Subject_2 = parseInt(prompt("Please Enter Your Second Subject Marks"));
var Subject_3 = parseInt(prompt("Please Enter Your Third Subject Marks"));
var Total_Marks = parseInt(prompt("Please Enter Your Total Subject Marks"));
var Obtain_Marks = Subject_1 + Subject_2 + Subject_3;
var Percentage = Math.floor(((Obtain_Marks) * 100) / Total_Marks);

document.writeln("<h1>" + "Marks Sheet" + "<h1>");
document.writeln("<h2>" + "Total Marks :" + Total_Marks + "</h2>");
document.writeln("<h2>" + "Marks Obtained :" + Obtain_Marks + "</h2>");

if (Percentage >= 80) {
    document.writeln("<h2>" + "Percentage :" + Percentage + "%<h2>");
    document.writeln("<h2>" + "Grade : A+" + "</h2>");
    document.writeln("<h2>" + "Remark: Excellent" + "</h2>");

}
else if (Percentage >= 70) {
    document.writeln("<h2>" + "Percentage :" + Percentage + "%<h2>");
    document.writeln("<h2>" + "Grade : A" + "</h2>");
    document.writeln("<h2>" + "Remark: Good" + "</h2>");
}
else if (Percentage >= 60) {
    document.writeln("<h2>" + "Percentage :" + Percentage + "%<h2>");
    document.writeln("<h2>" + "Grade : B" + "</h2>");
    document.writeln("<h2>" + "Remark: You need to improve" + "</h2>");
}
else {
    document.writeln("<h2>" + "Percentage :" + Percentage + "%<h2>");
    document.writeln("<h2>" + "Grade : Fail" + "</h2>");
    document.writeln("<h2>" + "Remark: Sorry" + "</h2>");
}