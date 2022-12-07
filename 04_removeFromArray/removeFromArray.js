const removeFromArray = function() {
    array = arguments[0]
    x = 1
    
    for(i = 0; i < (arguments.length); i++){
      removeArray = arguments[x]
      x++
      removeElement = array.indexOf(removeArray);
      if(removeElement == -1){continue;}
      array.splice(removeElement,1) ;
      }
     return array;                                                                   
  };
  
  console.log(removeFromArray([2,9,3,6,7],2,7));
  

// Do not edit below this line
module.exports = removeFromArray;
