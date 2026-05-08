
import { configureStore } from '@reduxjs/toolkit'
import formreducer from './slice'

export let store=configureStore({
    reducer:{
        form:formreducer,
    }
})

// ------------------------------------
// switch statement 
let day =1
switch(day){
    case 1 :
        console.log("monday")
        break;
    case 2 :
        console.log("tuesday")   
        break;
        case 3 : 
        console.log("wed")
        // return "wed";
        break;
        default:
        console.log("sunday") 
}

function getday(month){
    switch(month){
        case 1 :
            return "jan"
         case 2 :
            return "feb"
            default:
                return "no month"   
    }
}

console.log(getday())


function switchcase(score){
switch(true){
    case (score >=90 && score <=100):
    return "A+";
      case (score >=80 && score <90):
    return "A";
    default:
        return "invalid score"
}
}

console.log(switchcase(95));

// ternary operator
let salary=500;
salary>2000? console.log("high"):console.log("low")

const theme="light"
let bgcolor=theme==="light"? "red":"black" 

console.log(bgcolor)
// even/odd 
const num=6
let a= num % 2===0 ? console.log("even"): console.log("odd") 

const score=0
let grade=score>=90 ? "A" : score>=80? "B" : score >=70?"c":"d"
console.log(grade)

