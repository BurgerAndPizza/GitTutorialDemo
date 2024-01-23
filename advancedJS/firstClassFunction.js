//function statement
function a(){
    console.log("a called");
}
a();
//function expression: assignining the function to a variable. function acts like a vaue
var b = function(){
    console.log("b called");
}
b();
// the main diffrence between them is hoisting. During the first function is assigns the memory to the variable and i the 
// second function the memory is allocated when the code is reached to line. It cannot be executed before assing the memory
// Function Declaration: function declaration and function statement are same.
// Anonymous Function : Function without any name is called anonymous function
function (){
    //it gives an error. It is used to assign as value to the variable. they are used as value.
}
//Named function Expresion: giving name to the anonymous function while assigning function(value) to the variable
var b = function xyz(){
    console.log("b called");
}
b();   // cannot use xyz to call or it will throw an error. it is a local variable
//Difference between parameters and arguement
var b = function(/* here parameters are there. they are local variable defined in the function: identifiers*/ param1, param2){
    console.log("b called");
}
b(1, 2 /* these are arguemenets. vaalue inside the function */);

//First class function: Passing a function inside a function. we can get function as output by passing a function.
// The ability to use functions as values is known as first class function
var b = funtion(param1){
    return (xyz)
}
console.log(b())

