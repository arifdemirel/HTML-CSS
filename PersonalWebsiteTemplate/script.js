var myGlobal=10;


    var ourArray = [15,16,23,42];
    ourArray[3] =69;
    console.log(ourArray[3]);

/*Nested Arrays aka 2d arrays and also 3d arrays */

var myArray = [[1,2,3], [4,5,6],[7,8,9], [[10,11,12], 13,14]] 
var myData = myArray[2][1];
console.log(myData);
/* it will print 8 */

/* shift removes first element while pop removes the last element*/

/*unshift adds an element to the 0 index while push add an element to the end of the array */

var myList= [["cereal",3],["milk",2], ["bananas",3],["juice",2],["eggs",5]];


function ourReusableFunction()
{
    console.log("Yello World");
    
}
// ``  backtick is created with alt-gr and comma button
function reusableFunction()
{
    console.log("ham girllll!");
    
}

function ourFunctionWithParameters(a,b)
{
    console.log(a-b);
}

function functionWithParameters(a,b)
{
    console.log(a+b);
}

ourReusableFunction();
reusableFunction();
ourFunctionWithParameters(1001,1);
functionWithParameters(999,1);


function trueOrFalse(wasThatTrue)
{
    if(wasThatTrue)
    {
        return "Yes, that was true";
    }
    return "No, that was not true";
}

console.log(trueOrFalse(true));