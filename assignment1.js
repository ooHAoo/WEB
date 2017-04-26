
/***** grader(mark) *****/
var grader = function(mark){
 
  var finalMark;
 
  if(mark >= 80 && mark <= 100)
    finalMark ='A';
  else if(mark >= 70 && mark <= 79)
    finalMark ='B';
  else if(mark >= 60 && mark <= 69)
    finalMark ='C';
  else if(mark >= 50 && mark <= 59)
    finalMark ='D';
  else if (mark >= 0 && mark <= 49)
    finalMark = 'F'
  return finalMark;
}

/***** showMultiples(num, numMultiples) *****/
function showMultiples(num, numMultiples){
 
  var stringMultiples = " ";
  var multiples;
 
  for (var i = 1; i <= numMultiples; i++){
    
    multiples = num * i;
    stringMultiples += (num+" x "+i+" = "+ multiples + "\n");
           
  }
  return stringMultiples;
}

/**** largeNum(num1, num2) *******/
var largerNum = function(num1, num2){
 
  var returnValue;
 
  if (isNaN(num1) || isNaN(num2))
    returnValue = NaN;
 
  else if(num1 > num2)
    returnValue = num1;
 
   else
     returnValue = num2;
 
  return returnValue;
}


/****** temComvert(temperature, convert) ******/
function tempConvert (temperature, convert){
 
  var temConvert;
 
  if (convert === "CF")
    temConvert = temperature * (9/5) +32;
 
    
  else if (convert === "FC")
     temConvert = (temperature - 32) * (5/9);

 
    return temConvert.toFixed(1);
}


/********** evenNumbers(minNumber, maxNumber) *****************/

var evenNumbers = function (minNumber, maxNumber){
 
  var retEven = " ";
  var retEvenArray = [];

 
  for (var i = minNumber; i <= maxNumber; i++){
    if(i %2 !=0)
      continue;
    retEven += i;
    if (i != maxNumber - 1){
      
      retEven += ", ";
    }

  }

  return retEven;

}


/***********  passingAverage( ) ***********/
var passingAverage = function (){
 
var returnValue;
 
  var total = 0;
 
  for (var i = 0; i < arguments.length; i++){
    
    total += arguments[i];
  }
  var avg = total / arguments.length;
    
    if  (avg >= 49) {
    
    returnValue = true;
  } else {
    returnValue = false;
  }
 
  return returnValue;

}


/******* counter( ) *********/
function counter() {
  
  var x = 0;
  
  function count (){    
 
    x += 1;
    
    return x;
  }
  
return count;
}



/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/


// Function 1 (grader)   

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");


// Function 2 (showMultiples)

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");


// Function 3 (largerNum)
 
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");


// Function 4 (tempConvert)

console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");


// Function 5 (evenNumbers)

console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");


// Function 6 (passingAverage)

console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");


// Functinon 7 (counter)

var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
