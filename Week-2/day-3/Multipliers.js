

function createMultiplier(multiplier){

    return function  (num){
        return num*multiplier

    }
}


// const x  = createMultiplier(3);
// console.log(x(5));


// event handler using closure

function createEventhandler(){
    let count  = 0 ;
    button.addEventListener('click', ()=>{
        count++;
        console.log(`Button clicked ${count} times`);
    })
}

const button = document.querySelector("#myButton");
createClickCounter(button);