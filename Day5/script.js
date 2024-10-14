/*
var a = 12;
let b = 22/7;
let c = "Hello";
let d = [1,2,3,4]
let e ={
    id:12
};
let f = true
let x = "12"/"6"

let bool = true;
let str = String(bool);
console.log(str.charAt(1));

let str = "abb";
let num = Number(str)
console.log(num)
function display(){
    let x = prompt("Are you sure");
    alert('User Selects',x);
}
  function display(){
    let x = prompt("Enter your name","Shreyansh");
    alert(x);
  }
let a = '12';
let b = '12.0';
console.log(a==b);
*/

function validate(){
    let login = document.getElementById("login").value;
    let pass = document.getElementById("pass").value; 
    let p1 = document.getElementById("result");
if (login == "admin" && pass == "admin"){
    p1.innertext = "Login Success"
}
    else{
        p1.innertext = "Login Failed"
        return false;


    } 
}

