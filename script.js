/*stInterval(()=>{
    console.log("hi Mohamed");
},5000);*/

console.log("promise");

let myPromise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve("hi resolved");
        reject("it is rejected");
        //console.log("hi resolve promise");
    }, 2000);
});

console.log(myPromise);
//try catch
myPromise.then((response)=>{
    console.log("data>>" , response);
}).catch((response)=>{
    console.log("data>>",response);
})

setTimeout(() => {
    console.log(myPromise);
}, 2000);