
function sum(...args){
    
return args.reduce((total,num)=>total+num,0);
}

// console.log(sum(1,2,3,4,5));


function speratorFun(sperator,...args){
    return args.join(sperator);
}

console.log(speratorFun(',',1,2,3,4,5)); //1,2,3,4,5
console.log(speratorFun('-',1,2,3,4,5)); //11+2+3+4+5