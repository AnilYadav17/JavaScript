let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);


let a = 10
let b = 20
let result1 = a > b ? "a is greater" : "b is greater"
console.log(result1);

// Nullish coalescing operator
let name = null
let result2 = name ?? "Guest"
console.log(result2);
console.log(undefined ?? "default value")
console.log(null ?? "default value")
console.log("Anil" ?? "default value")
console.log(0 ?? "default value")
console.log(false ?? "default value")
console.log("" ?? "default value")
console.log(NaN ?? "default value")



// logical operator in ES2020
// ?? and ||
console.log(null || "")
console.log(null ?? "")

let user = {
    name: "Anil",
    age: 20,
    mail: undefined
}
let name1 = user.name ?? "Guest"
let mail1 = user.mail ?? "Guest"
let age1 = user.age ?? "0"
console.log(name1, mail1, age1)
console.log(user.city ?? "Default city")

// Nullish with functions
function getUserAge() {
    return null
}
let age2 = getUserAge() ?? 18
console.log(age2);

function display(message) {
    let value = message ?? "Welcome"
    console.log(value)
}
display()
display("Hello")

console.log("\n")


// Optional Chaining operator (?.)

let student = {
    name: "Anil",
    age: 20,
    department: {
        dept_name: "CSE",
        dept_id: 101,
        location: {
            city: "HYDERABAD",
            state: "TELANGANA"
        }
    }
}
console.log(student.name)
console.log(student.department.location.city)
console.log(student.address?.city)
console.log(student.department?.location?.city)
console.log(student.department.phone?.home)

let student2 = null
console.log(student2?.name)

let arr = ["deepak", "naveen", "anil", "Anil"]
console.log(arr[0])
console.log(arr?.[7])





let students = [
    {
        name: 'anil', salary: 50000
    },
    {
        name: 'naveen', salary: 70000

    }
]


console.log(students[0].name)
console.log(students[1]?.salary)
console.log(students[5]?.salary)



// optional chaining with functions 
let user1 = {
    name: 'deepika',
    hello: function () {
        console.log("hello")
    }
}
user1?.hello()


let user2 = {
    name: "Anil",
}
console.log(user2.address?.city ?? "City not available")




let a1 = [10, 20, 30]
console.log(a1 instanceof Array)
console.log(a1 instanceof String)
console.log(a1 instanceof Object)


let student6 = {
    name: "Anil",
}

console.log(student6 instanceof Object)
console.log(student6 instanceof Array)
console.log(student6 instanceof String)


let name3 = 'Anil'
console.log(name3 instanceof String)

let name4 = new String('Anil')
console.log(name4 instanceof String)




function hello(name) {
    console.log("hello ", name);
}
hello()
hello("Anil")

let r = hello("Anil")
console.log(r)


function add(a, b) {
    return a + b
}

let result5 = add(10, 20)
console.log(result5)


let result6 = add(10)
console.log(result6)

//hosting
console.log(add1(10, 20))

function add1(a, b) {
    return a + b
}

//different ways to create function in js
// 1.function declaration
/* In case of declaration hosting is supported.
2. Function expression 
It creates a function and assign it to a variable
*/
let c = function (a, b) {
    return a + b
}
console.log(c(10, 20))