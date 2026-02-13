// const featchData=new Promise((resolve,reject)=>{
//   const sucess=false;
//   if(sucess){
//     resolve("Data featched");
//     console.log("done");
//   }else{
//     reject("Data not found")
//   }
// })

// featchData.catch((error)=>{
//   console.log("not found",error);
// })


const featchData=async()=>{
  console.log("Started");
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      console.log("ended");
}

console.log("s1");
featchData();
console.log("s2")