// import welcome from "./task.js"
// console.log(welcome("anji"))


import greet from "./task.js"
console.log(greet("anji"))


import {add,sub} from "./task.js"
console.log(add(6,7))
console.log(sub(6,7))

import {name, age} from "./task.js"

console.log(name)
console.log(age)

// local storage 
localStorage.setItem("place","horsley hills")
localStorage.getItem("place")
// localStorage.removeItem('place')
// localStorage.clear()

const users={
    name:"anjii",
    age:25
}
localStorage.setItem("users",JSON.stringify(users))

const data=localStorage.getItem("users")
const userr=JSON.parse(data)
console.log(userr.name)

function save() {
    const name = document.getElementById("name").value
    localStorage.setItem("name", name)
}

function show() {
    const name = localStorage.getItem("name")
    document.getElementById("result").textContent = name
}
window.save = save
window.show = show

// session storage 


sessionStorage.setItem("word","world")
sessionStorage.getItem('world')
 const namme=sessionStorage.getItem("word")
 console.log(namme)
 sessionStorage.removeItem("word")

function savee(){
    let name=document.getElementById("work").value
sessionStorage.setItem("username",name)
}
function showw(){
    let user=sessionStorage.getItem("username")
    document.getElementById('resultt').textContent=user
}
window.savee = savee
window.showw = showw

try{
    console.log("start")
    console.log(a)
}catch (error){
console.log("something is wrong")
}

console.log("one")
try{
    console.log(a)
    
}catch(error){
    console.log("hey catch please handle the second error")
}
console.log("three")

console.log("one");

try {
    throw "an throw error occurred"
} catch (error) {
    console.log(error);
}

console.log("three")

// age cal 
 function checkAge(){
    if(age<18){
        throw new error("age must be 18 or above")
    }
    return "eligible";
 }

 try{
    console.log(checkAge(20))
 }catch(error){
    console.log(error.message)
 }
