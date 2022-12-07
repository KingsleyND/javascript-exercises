const sumAll = function(num1,num2) {
    final_sum = 0
    if (typeof(num1) != "number" ||typeof(num2) != "number"|| num1<1 || num2<1 ){
    return "ERROR"
  }
    for(i = num1; i<=num2; i++){
      final_sum +=i;
    }
    return final_sum
  };
  
  
  console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
