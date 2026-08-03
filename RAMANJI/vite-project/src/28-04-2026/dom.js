let b= document.getElementsByClassName("class")
console.log(b)

function changetext(){
let c=document.getElementById("title");
c.innerText="ramanjaneyulu REDDY";
c.style.color="red"
}

let z= document.getElementsByClassName("text")
console.log(z)

let cl=document.getElementsByClassName("class");
cl[0].style.color="red";
cl[1].style.color="blue"
cl[2].style.color="yellow"


let f=document.getElementsByTagName("p");
f[0].style.border="2px solid black";
f[0].style.width="50%"
console.log(f)

function change(){
  document.querySelector("#title").innerText = "Changed!"
}


let g=document.querySelectorAll(".text")
console.log(g)

let a1=document.createElement("h6")
a1.innerText="heading h6"
document.body.prepend(a1) 

// remove

document.getElementById("anji").remove()

btn.addEventListener("click",()=>{
  alert ("ya plaese why are u calling me")
// console.log("clicked once")
}
)
document.getElementById("btn").addEventListener("click", function(){
  console.log("hi it clicked")
})
// mouseover
document.getElementById("bt").addEventListener("mouseover",()=>{
  bt.style.backgroundcolor="red"
})

// input 
document.getElementById("inp").addEventListener("input", function(){
  console.log(this.value)
})

let btn = document.getElementById("btnn")

btn.addEventListener("mouseover", () => {
  btn.style.color = "red"
})

btn.addEventListener("mouseout", () => {
  btn.style.color = "black"
})
