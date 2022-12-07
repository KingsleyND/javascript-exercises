const reverseString = function(string) {
    let reversed = "";
    let stringLength = string.length;
    for (i=stringLength; i >=0; i--){
        reversed += string.charAt(i);
    };
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
