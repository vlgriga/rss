module.exports =
 function solveEquation(equation) {
  var splArray = equation.split(' ');
  var sign1 = splArray[3];
  var sign2 = splArray[7];
  

  var arr =[];
  var numbers = splArray.filter( index => { 
    if(!isNaN(+index))  return +index  
  }) ; 

  let [a,b,c] = numbers;
  if(sign1 == '-' ) {
    b = 0-b;
  }
  if(sign2 == '-' ) {
    c = 0-c;
  }

  var d =  b * b - (4 * a * c);
  let x1 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
  let x2 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );


  
  if( x2 > x1) {
    arr.push(Math.round( x1));
    arr.push(Math.round( x2));
  } else {
    arr.push(Math.round( x2));
    arr.push(Math.round( x1));
  }
 
  return arr;
}

//solveEquation('-175 * x^2 - 397148325 * x + 709028410683600');