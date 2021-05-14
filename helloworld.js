// var str=`ada`;
// var char="";
// char=str[0];
// console.log(char);
/*var myname=5;
myname=myname/2;
console.log(myname);

var ourarray=[1,2,3];
ourarray.push(4);
console.log(ourarray);
ourarray.pop();
console.log(ourarray);
ourarray.shift();
console.log(ourarray);
function fun()
{
    console.log("my fun");
}
function fun2()
{
    myvar=5;
}
fun();
fun();
fun();
console.log(myvar);

function compareneq(a,b)
{
    if(a!=b)
    {return true;}
    return false;
}
if(compareneq(10,"10") && true)
{
    console.log("Not Equal");
}
else
{
    console.log("Equal"); 
}

var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    }
};
console.log(recordCollection[2548].albumTitle);

"use strict";
let hello;
//hello="my";
console.log(hello);

var hell=5;
console.log(hell + " songs");

var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);
  */
  // Setup
  
  //console.log(rangeOfNumbers(3,9));
  function fun(...args)
  {
    for(var i=0;i<args.length;i++)
    {console.log(args[i]);
    }
  }
//fun(1,2,3,4,5,6,7,8,9);
var arr=[1,2,3,4,5];
fun(...arr);
