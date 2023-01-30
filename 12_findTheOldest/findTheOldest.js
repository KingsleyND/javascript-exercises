const findTheOldest = function(peopleArray) {
    
        return peopleArray.reduce((a,b)=>{
          const oldestAge = getAge(a.yearOfDeath, a.yearOfBirth)
          const currentAge = getAge(b.yearOfDeath, b.yearOfBirth)
    
          return oldestAge > currentAge ? a:b;
        })
     };
     
     function getAge(death,birth){
        if(!death){
            death = new Date().getFullYear()
        }
       return death-birth;

     } ;   


 

// Do not edit below this line
module.exports = findTheOldest;
