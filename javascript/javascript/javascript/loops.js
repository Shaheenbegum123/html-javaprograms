//all looping statements in Javascript//
//for loop//
for(let i=0;i<5;i++){
    console.log("For loop Iteration:"+i);
}
//while loop//
let j=0;
while(j<5){
    console.log("while loop iteration:"+j);
    j++
}
//do while loop//
let k=0;
do{
    console.log("Do while loop iteration:"+k);
    k++;
}while(k<5);
//for...of loop//
let arr=[10,20,30,40,50];
for(let value of arr){
    console.log("For each loop:" +value);
}
//for in loop//
let obj={a:1,b:2,c:3};
for(let key in obj){
    console.log("For in loop key:"+key+"value:"+obj[key]);
}
//foe each loop//
arr.forEach((value,index)=>{
    console.log("ForEach loop index:"+index+"value:"+value)
});



