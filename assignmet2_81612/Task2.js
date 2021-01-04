var color_of_light = prompt("Enter the color of Trafic Light");
if(color_of_light === "Red"|| color_of_light === "red"){
    alert("Must Stop");
}else if(color_of_light === "Yellow" ||color_of_light === "yellow"){
    alert("Ready to move");
}else if (color_of_light === "Green"||color_of_light === "green"){
    alert("Move now")
}else{
    alert("Enter Something wrrong");
}