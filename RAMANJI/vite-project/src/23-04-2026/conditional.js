
let a=100
console.log(a)

// it is used to make a decision in a program based on condition 
// and it cobtrol the flow execution by running different code blocks depending on whether a condition is true or false.
// if statements is used to execute a block of code only when a given condition is true 
let age=19
if(age>=18){
    console.log("you are eligible")
}

let marks=80
if(marks>=80){
    console.log("good")
}else{
    console.log("bad")
}

let loggin=false
if(loggin){
    console.log("correct")
}else{
    console.log("not correct")
}

let score=101
if(score>90){
    console.log("Grade A")
}else if (score>80){
    console.log("grade B")
}else if (score>70){
    console.log("grade C")
}else{
    console.log("fail ")
}

let num=-1
if (num>0){
    console.log('+')
}else if (num<0){
    console.log('-')
}else{
    console.log('zero')
}
let day=1
switch(day){
    case 1:console.log("mon")
    break;
    case 2 :console.log("tues")
    break;
    default:
        console.log("sun")
}

let value=null
if (value){
    console.log("This is truthy")
}else{
    console.log("falsy")
}
if("0"){
    console.log("hello")
}

// logical truthy and falsy 
console.log(10 && "hello")
console.log(" " && [ ])
console.log({}&& 0)

console.log("hello" || 12)
console.log(0||-0)

console.log(!true)
console.log(!false)
console.log(!!"hello")

// loops
for (let i=10; i>=1; i--){
    console.log( "count:",i)
}

for (let i=1; i<=20; i+=2){
    console.log(i)
}

let number=5
for(let i=1; i<=10; i++){
    console.log(number + "x" +i+"="+(number*i))
}
let string="welcome"
let reversed= string.split("").reverse().join("")
console.log(reversed)

let str="weloce man"
let reverse=""
for(let i=str.length-1; i>=0; i--){
    reverse +=str[i]
}
console.log(reverse)

let sum=0
for (let i=1; i<=100; i++){
    sum +=i
}
console.log(sum)

// for(let i = 1; i <= 5; ){
//     console.log(i); // i never changes
// }

let sums=0
for (let i=1; i<=10; i++){
    sums +=i
}
console.log(sums)

for (let i=1; i<=50; i++){
    if(i% 3 ===0){
        console.log(i)
    }
}
let num1 = 1234;

let reversed1 = Number(num1.toString().split("").reverse().join(""));

console.log(reversed1); // 4321

// while loop
let i=1
while (i<=5){
    console.log(i)
    i++;
}

let table=6
let w=1
while(w<=10){
    console.log(table+"X"+w+"="+(table*w))
    w++;
}
let k=1
do {
console.log(k)
k++;
}while(k<=10)

    let values=10
    let e=1
    do {
            console.log(values+"X"+e+"="+(values*e))
        e++
    }while(e<=10)

        let correct="1234"
        // let enter=""
        let attempts=0;
        while (attempts<3){
            let enter="1234"
            if(enter===correct){
                console.log("login success")
                break;
            }else{
                console.log("wrong password")
            }
            attempts++;
        }
        if (attempts===3){
            console.log("wait 5 min ")
        }
        
        for(let i=1; i<=4;i++){
            let result="";
            for(let j=1; j<=i;j++){
                result += j
            }
            console.log(result)
        }

