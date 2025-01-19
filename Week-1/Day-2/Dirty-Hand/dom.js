

// 1 - Selecting Elements


//Select an element by id, class, tag, and using querySelector.

// const elm = document.getElementById('myElement');
// const elem2  = document.getElementsByClassName('myClass');
// const elem3  = document.getElementsByTagName('p');
// const elem4 = document.querySelector('.myClass');
// const elem5 = document.querySelector('p');



// const  elem6 =  document.getElementsByClassName('js-toggle-element')

// const textData = document.getElementsByClassName('highlight');

// for (let i=0; i<textData.length; i++){
//     textData[i].style.color = 'red';
// }


// select all the paragraph that are in the div
// const para =  document.querySelectorAll('#main p');

// para.forEach(p=>{
//     console.log(p.textContent);
// })


// // const firstListItem = document.querySelector("#myDiv ul li:first-child");
// // console.log(firstListItem.textContent);

// const firstListItem = document.querySelector('#main ul li:first-child');
// console.log(firstListItem)

// console.log(firstListItem.textContent)



// Changing Content and Styles
//Change the background color of a div when a button is clicked.

// const heading = document.getElementById('heading');
// const btn = document.getElementById('btn');
// const main = document.getElementById('main');
// const el = document.getElementById('el');
// const remove = document.getElementById('remove'); 

//store the orginal heading

// const originalHeading = heading.textContent;
// btn.addEventListener('click',()=>{
//      if(heading.textContent === originalHeading){
//         heading.textContent = 'New Heading';
//         btn.textContent = 'Reset Heading'
//         main.style.backgroundColor = 'red';
//      }
//      else{
//         heading.textContent = originalHeading;
//         btn.textContent = 'original Heading';
//         main.style.backgroundColor = 'white';
//      }
// })

// when i click on remove class
// const originalColor = el.classList.contains('red');
// remove.addEventListener('click',()=>{
//     if(el.classList.contains('red') ){
//         el.classList.remove('red');
//     }else{
//         el.classList.add('red');
       
//     }
//     console.log(`Current classes: ${el.className}`);
   
// })


// const originalColor  = el.classList.contains('red');

// remove.addEventListener('click',()=>{
//     // if thye are red 
//     if(el.classList.contains('red')){
//         //remove the red 
//         el.classList.remove('red');
//     }else{
//         el.classList.add('red');
//     }
// })




// Event listener 
// change the button text

// const btn = document.getElementById('btn');


// //store the original text
// const originalText = btn.textContent;
// btn.addEventListener('click',()=>{
//     // revert chnages 
//     if(btn.textContent === originalText){
//         btn.textContent = 'click me to chnage the text';
//         console.log('clicked');
//     }
//     else{
//         btn.textContent = originalText;
//     }
// })

// const myElement = document.getElementById('myElement');
// myElement.addEventListener('mouseover', () => {
//     myElement.style.backgroundColor = 'red';
// })


const keypressDisplay = document.getElementById('keypressDisplay');

window.addEventListener('keydown', (event) => {
    keypressDisplay.textContent = `You pressed the ${event.key} key`;
    console.log(`You pressed the ${event.key} key`);
})

console.log("hello") 








