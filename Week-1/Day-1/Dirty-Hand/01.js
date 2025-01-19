// Understanding Basic Concepts

// const name = "Js"
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// console.log(`Hello ${name}`)

//---------- Arrays & Objects

// const numbers = [1, 2, 3, 4, 5];
// // function that doubles each number in the array
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);


// by loop

// function doubleNum(){
//     // create an empty array 
//     const arr = [];
//     for(let i=0; i<numbers.length; i++){
//         arr.push(numbers[i] * 2);
//     }

//     return arr
// }

// function double(){
//     const newArr = [];
//     for (let i=0; i<numbers.length; i++){
//         newArr.push(numbers[i] * 3);
//     }
//     return newArr
// }

// // const dt  = doubleNum(numbers);
// const dt2  = double(numbers);
// console.log(dt2);




// const numbers = [1, 2, 3, 4, 5,10,20,100];
// //A function that finds even numbers

// const evenNum = numbers.filter(num =>num % 2 === 0);
// // console.log(evenNum)


// function findEvenNum(){
//     const arr= [];
//     for(let i=0; i<numbers.length; i++){
//         if(numbers[i]%2 ===0){
//             arr.push(numbers[i]);
//         }
//     }
//     return arr
// }

// const even = findEvenNum(numbers);
// console.log(even)





//A function that calculates the sum

// const number  = [1, 2, 3];

// const sum = number.reduce(function(acc,num){
//     return acc + num
// })

// console.log(sum)


