// default export 
export default function greet(name){
    return "hello"+name
}

export function addi(a,b){
    return a+b
}

export function sub(c,d){
    return c-d
}

export function name(){
    return "hello boss"
}

function check(pass){
    const minlength=8;
    if(pass.length<minlength){
        console.log("pass will be min 8 char")
        return
    }
    if (!/[0-9]/.test(pass)){
        console.log("paas wil be atleast one num")
        return
    }
    if(!/[A-Z]/.test(pass)){
        console.log("paa swill be at least one upper")
        return
    }
    console.log("pass will be correct")
}

check("Anji1234")

