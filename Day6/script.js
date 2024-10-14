/*
let a = () => {
    console.log("arrow function");
    };
    let b = () => console.log("Arrow function 2");
    a();
    b();
    
    let c = (x,y)=>
    {
        return x+y;
    }
    let result = c("Rahul","Ravi");
    let result1 = c(12,32);
    console.log(result);
    console.log(result1);
    
function display(){
     let p1 = document.querySelectorAll("p");
     p1[0].innerHTML="I am in para";
     p1[0].style.backgroundColor="red";
     p1[1].innerHTML="I am in para 2";
     p1[1].style.backgroundColor="green";
 }
*/
let chanageHeader=()=>{
    let h1=document.querySelector("h1");
    h1.textContent="hann Ji Good Morning";
}

let changeHeader1= ()=>{
    let a1 = document.querySelectorAll("a");
    a1.setAttribute("href","https://aktu.ac.in");
    a1.innerHTML = "AKTU Website"
}

