// url
// https: ->Protocal
// gla.in ->Domain
//  /uplodAttendance.apx -> path parm
// ?acess_key==abc ->Query Pram
// #key -> Hash

// https: ->protocal
//www.flipkart.com ->domain
// /puma-caven-2-0-res-sneakers-men/p/itm8219cd088588d->path parm

// ?pid=SHOHBA9C3MPHH6EW&lid=LSTSHOHBA9C3MPHH6EWN9ES0Q&marketplace=FLIPKART&q=shoes+puma+caven&store=osp%2Fcil%2Fe1f&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_13CnqYaU23S3Ys7JsqM_wU5TT4Y0yPGV7XB0Ry4tVJ8TcC2EuC2tquMDY93JHUePWX2OyWivL5iXTKlep2ddgvUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&ssid=gul7exhg000000001771319051674&qH=dc73b40f44c99c85&ov_redirect=true - >Query pram

[
  "node",
  "app.js",
  "add",
  "1",
  "5",
]

// const fuctionName=process.argv[2];
// const v1=process.argv[3];
// const v2=process.argv[4];

const [,,fuctionName,v1, v2]=process.argv;

// console.log(`functionName ${fuctionName}\nv1 ${v1}\nv2 ${v2}`);
if(fuctionName=="add"){
  console.log(Number(v1)+Number(v2));
}
 
