const palindromes = function (word) {
  const processedWord = word.toLowerCase().replace(/[,!$-. ]/g, "");
    let wordLength = processedWord.length
    
    reverseWord = ""
    for (i = 0; i < word.length; i++){
      wordLength -=1
 
     reverseWord += processedWord.charAt(wordLength)
    };
  
  return (processedWord === reverseWord)?true:false;
  
};



// Do not edit below this line
module.exports = palindromes;
