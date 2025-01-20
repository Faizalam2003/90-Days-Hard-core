
const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const display = document.getElementById("display");


// btn.addEventListener("click", () => {
//     const getValue  = inputBox.value;

//     //check if input is not empty 
//     if (getValue.trim() === "") {
//         display.textContent = "Please enter a value";
//     }else{
//         display.textContent = `Name is ${getValue}`;
//     }

//     //clear the input box
//     inputBox.value = "";

//     console.log(inputBox.value);
// });




const inputContainer  = document.getElementById("input-container");
const dymicBtn  = document.getElementById("dymicBtn");

dymicBtn.addEventListener("click",()=>{
    console.log("click");
    const inputField = document.createElement("input");
    const clickButton  = document.createElement("button");
    clickButton.textContent = "click me";
    inputField.type = "text";
    inputField.placeholder = "Enter your name";
   
    inputContainer.appendChild(inputField);
    inputContainer.appendChild(clickButton);

    clickButton.addEventListener("click", () => {
        const getValue  = inputField.value;
    
        //check if input is not empty 
       if(getValue.trim() === "") {
        display.textContent = "Please enter a value";
       }else{
        display.textContent = `Name is ${getValue}`;
       }
       inputField.value = "";
    })

})









