var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
} 
//Here we have declare variable a with initial value 4 and then in
// condition we put pre-increament condition and the value of a beacome 5.
// and 5 equal to 5 condition is True then the alert will be dispaly

//Output :: given condition for variable is ture

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//it's like (82 === 83)
// Condition False it would'nt be execute beacuse the following condition is False.

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
//it's like (12 === 13)
// Condition False it would'nt be execute beacuse the following condition is False.


if (c === 13){
alert("condition 2 is true");
}
//Output: condition 2 is ture
//it's like (13 === 13)
// Condition Ture it would be execute beacuse the following condition is Ture.
//After the increament in the above condition it's value become 13

if (++c < 14){
alert("condition 3 is true");
}
//it's like (14 < 14)
// Condition False it would'nt be execute beacuse the following condition is False.
//Output: Nothing will be execte Due to False condition.

if(c === 14){
alert("condition 4 is true");
}
//Output: condition 4 is ture
//it's like (14 === 14)
// Condition Ture it would be execute beacuse the following condition is Ture.
//After the pre-increament in the above condition it's value become 14


var materialCost = 20000; // Initial Value is 20000
var laborCost = 2000;  // Initial Value is 2000
var totalCost = materialCost + laborCost; // Initial Value of total cast after arithmetic operation of + is 22,000

if (totalCost === laborCost + materialCost){ // Checking Condition 22000 === 22000 Ture
alert("The cost equals");// Output: The Cost is equal
}
//
if (true){ // Ture indicate that execute the insides
alert("True"); // Output : Ture
}
//
if (false){//  False indicate that don't execute the insides
alert("False");
}
//
if("car" < "cat"){  // It's comparing the Values by Alphabic order and return Ture/False. It's True
alert("car is smaller than cat"); // Output:; car is smaller than Cat.
}