const repeatString = function(string, num) {
    if(num < 0 ){
        return("ERROR")
    }
    let joinedStrings = ""
    for(i=1; i <=num; i++){
         joinedStrings += string;
    }
    return joinedStrings;
};

// Do not edit below this line
module.exports = repeatString;
