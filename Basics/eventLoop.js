const a=()=>{
  setTimeout(()=>{
    console.log("Ji")
  },1000);
  setTimeout(()=>{
    console.log("Sir");
  },0);
  b();
  console.log("kya hall hai");
}
const b=()=>{
  console.log("hello")
}
a();

// stack is empty

// a() is called → a pushed onto stack
// first setTimeout registered in runtime environment (Ji, delay 1000ms)
// second setTimeout registered in runtime environment (Sir, delay 0ms)
// b() is called → b pushed onto stack
// console.log("hello") runs
// b is done → b popped from stack
// console.log("kya hall hai") runs
// a is done → a popped from stack

// stack is now empty
// event loop checks timer callbacks
// "Sir" callback (0ms) is ready first → pushed → runs → prints Sir
// after ~1000ms, "Ji" callback is ready → pushed → runs → prints Ji

