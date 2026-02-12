const Lname=()=>{
  Mname();
  console.log("Agnihotri")

} 
const Mname=()=>{
  Fname();
  console.log("Mohan")
}

const Fname=()=>{
  console.log("Lalit");
}
Lname();

// stack is empty
// function Lname() is pushed in stack
// function Mname() is pushed in stack
// functtion Fname() is pushed in stack
// now fname() is done and it will be poped from stak 
//  same for rest of all process will contine like that till stack is empty
