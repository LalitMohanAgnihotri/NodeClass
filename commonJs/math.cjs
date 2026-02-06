const add =(a,b)=>{
    return a+b;
  }

const multi=(a,b)=>{
    return a*b;
  }

const sub=(a,b)=>{
    return a-b;
  } 
const div=(a,b)=>{
    if(b===0){
        return "Division by zero is not allowed.";
    }
    return a/b;
  }

  const pow=(a,b)=>{
    return a**b;
  }
module.exports={add,multi,sub,div,pow};