//let num = [1,2,3,4,5,6];
//let newnum = num.map(x=>x*2)
//console.log(newnum);

//let evennum = num.filter(x=>x%2==0);
//console.log(evennum);

//let sum = num.reduce((x,y)=>x+y,0);
//console.log(sum);

//let product = num.reduce((x,y)=>x*y,1);
//console.log(product);

//const students = [

  //  {name: "peter", score: 50},
    //{name:"alex", score: 90 },
    //{name:"bob", score: 70 },
    //{name:"john", score: 40 },
//];
//let sc = students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
//console.log(sc)

//let num = [1,2,3,3,5,6,7];
//num.forEach(x=>console.log(x*3));

//sayhello = () =>{
//};
//console.log("start");
//setTimeout(sayhello,3000);
//console.log("end");
//setTimeout(sayhello,6000);

console.log("start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed")}, 3000);
        },2000);
    },1000);
    console.log("end");
        




