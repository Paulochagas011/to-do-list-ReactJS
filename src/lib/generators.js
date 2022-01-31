const generators = {
    randomId(MaxNumber){
       return Math.round(Math.random(MaxNumber) * MaxNumber);  
    },
};

export default generators;