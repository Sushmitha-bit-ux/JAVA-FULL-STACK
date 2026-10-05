//literal way

let empDetails={
    name:"Sai kumar",
    role:"developer",
    salary:25000,
    skills:["System design","Microservices","Monolithic Architecture","Even driven","Database Design"],
    address:{
        city:"Guntur",
        zipcode:541254
    }
}
console.log(empDetails);

//using new keyword
let emp2=new Object({
    name:"Sai kumar",
    role:"developer",
    salary:25000,
    skills:["System design","Microservices","Monolithic Architecture","Even driven","Database Design"],
    address:{
        city:"Guntur",
        zipcode:541254
    }
})
console.log(emp2);


//CRUD operations
console.log("================CRUD opertions===================");
console.log(empDetails.name);
console.log(empDetails.skills[1]);
//print skills using map
empDetails.skills.map((s)=>{
    console.log(s);
})

console.log(empDetails.address.city);

//Object.seal(empDetails)   we can update values but we can't do insert or delete
Object.freeze(empDetails);  // we can't do any crud operations we just view the data
console.log(Object.isFrozen(empDetails));
console.log(Object.isSealed(empDetails));

empDetails.email="sai@tcs.com";
empDetails.phone=1234567890;
delete empDetails.skills;
delete empDetails.name;
empDetails.salary=15000;
console.log(empDetails)

//object in-built functions
/*console.log("********************* OBJECT INBUILT FUNCTIONS *****************************");
console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));*/

