
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed

//Manipulate Arrays

shift()
unshift()
pop()
push()

//return a value from Function
 there are two kinds of Var: Local and Global


function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8


// Example
function minusSeven(num) {
  return num - 7;
}

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
   return num*5;
  
}

var answer= timesFive(5);


//In Computer Science a queue is an abstract Data Structure where items are kept in order. 
 //-New items can be added at the back of the queue and old items are taken off from the front of the queue.
 
 
var a=15;
var b=20;

if (a+b===12) {
    console.log("Gotveren");}
else {
        console.log("Sehvdir");
    }
    
// While Loop:

var a=1;

while (a<=5) {
    
console.log(a);
a+=2;
}  //1 3 5

//Do While Loop

var a=1;
do {
console.log(a);
a+=2;
}
while (a<=5);//1 3 5

//FOR Loop



//Function 

function gotVeren(cindir, got){
    
var  ejdaha=cindir+got;
if (ejdaha===10) {
    console.log("Ay Seni Gotveren");
}
else {
    console.log("Olmadi");
}
}

gotVeren(4,6);
var xortdan=gotVeren(4,6);
//
//STRING Methods


var phase="Ay seni decel necesen?";

var segment=phase.slice(6,11);

console.log(segment);

slice(start, end), substring(start, end)
////////////////////////////////////////////////
var got=new Date();
console.log(got);

if (got>2017) {

  console.log ("Bogun");
} 

else {

  console.log( "Elive Verim");
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference///Check for referances


///////////////CREATING OBJECTS//////////

var player={name:"rufat",lastName:"kamalov", rank: 2};

console.log(player.name, player.lastName)

//DOM(Document Objected Model)
--node
document.getElementById(someId);

//Create new elements 

var newHeading=document.createElement("h1");
var newParagraph=document.createElement("p");

//to add content to, either use innerHTML
newHeading.innerHTML="Your Text";
newParagraph.innerHTML="Your Text";

//and we still need to attach them to the document!
document.getElementById("Id name").appendChild(newHeading);
document.getElementById("Id name").appendChild(newParagraph);

///Switch Statement:

function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
      
    case 1:
    return "alpha";   
    break;
         case 2:
    return "beta";   
    break;
         case 3:
    return "gamma";   
    break;
         case 4:
    return "delta";   
    break;
      
      
     
  }
   ////Returning Boolean Values from Functions
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
myTest(1);

function isLess(a, b) {
  // Fix this code
  return a<b; 
}

// Change these values to test
isLess(10, 15);

//Use ObJECT
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock


//OBJECTS with Array

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
