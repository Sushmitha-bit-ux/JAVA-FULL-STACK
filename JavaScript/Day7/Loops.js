/*for(let i=0;i<=10;i++){
    console.log('==============================');
    console.log();
    console.log('==============================');
}*/

let a=[10,20,30,40,50,60];
let str="JavaScript";
//for-of loop 
for(val of a){
    console.log(val);
}
for(let ch of str){
    console.log(ch);
}
//for-in loop
for(let ind in a){
    console.log(ind);
}
for(let ind in str){
    console.log(ind);
}
//forEach loop
a.forEach((val,ind,a)=>{
    console.log(val,"-> ",ind,"->",a);
})


console.log("========================MAP=============================");
let prices=[500,102,456,321,234,555,513,598,564];
console.log(prices);
let discountedPrice=prices.map((x)=>{
    return x-x/10;
})
console.log(discountedPrice);

let addedExtraAmount =prices.map((z)=>{
    return z+250;
})
console.log(addedExtraAmount);

console.log("=========================FILTER Function============================");
let filteredPrices=discountedPrice.filter((x)=>{
    return x>=500 && x<=579;
})
console.log(filteredPrices);

console.log("================Reduce function===================");
const totalPrice=filteredPrices.reduce((ac1,val)=>{
    return ac1+val;
},500)
console.log(totalPrice);

