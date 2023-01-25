const fibonacci = function(position) {
    if(position<0){return "OOPS"}
    sequence = [1,1]
    for(let i = 0; i < position; i++){
      fibonacciNumber = sequence[sequence.length -1]+sequence[sequence.length -2]
      sequence.push(fibonacciNumber)
    }
   return sequence[position-1];
};




// Do not edit below this line
module.exports = fibonacci;
