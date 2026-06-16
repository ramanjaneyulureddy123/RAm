
let original ={name:"anji",a:"done",role:{dept:"hard"}}
let copy={...original} 

copy.name="vijay"
copy.role.dept="soft"

console.log(copy)
console.log(original)

// shallow copy 
let o={name:"raghu",age:22,obj:{color:"blue"}}
let c={...o}

c.age=33
c.obj.color="red"
console.log(c)
console.log(o)

// deep copy 
let orig={name: "Anji",
    address: {
        city: "Hyderabad"
    }}
var copi=JSON.parse(JSON.stringify(orig))

copi.name="kumar"
copi.address.city="kadapa"
console.log(copi)
console.log(orig)

let originall = {
    name: "Anji",
    age: 22
}

var cop=Object.assign({},originall)

cop.name="vijjulu"

console.log(cop)
console.log(originall)

let obj1={company:"cetc"}
let obj2={role:"solar engineer"}
let show=Object.assign({},obj1,obj2)
console.log(show)

// structuredClone 

let a={name:"farid", work:{job:"zuari"}}

let b=structuredClone(a)

b.name="eswar"
b.work.job="bharati"

console.log(b)
console.log(a)

// copying of arrays 

var array=[10,20,30]
var copys=array
copys[0]=100
console.log(array)
console.log(copys)

let original1=["apple","mango","grapes"]

let copy1=[...original1]

copy1[0]="guava"

console.log(copy1)
console.log(original1)

// shallow cpy using slice 
let arr=[1,2,3,[4,5,6]]
let arr1=arr.slice()
 arr1[3][0]=200

 console.log(arr1)
 console.log(arr)