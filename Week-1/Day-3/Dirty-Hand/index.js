

const list = document.getElementById('list');
const items = document.getElementById('items');
const button = document.getElementById('button');
const input = document.querySelector('input');
const remove = document.getElementById('remove');
const firstRemove = document.getElementById('firstRemove');

button.addEventListener('click', () => {
    // get the value of the input
    const value  = input.value;
    if(value.trim() === '') {
        alert('Please enter a value');
        return;
    }else{
        console.log(value);
        const newItem = document.createElement('li');
        newItem.textContent = value;
        items.appendChild(newItem);
    }
    input.value = '';
});
remove.addEventListener('click',()=>{
    const lastItem  = items.lastElementChild;
    if(lastItem){
        items.removeChild(lastItem);
    }
})

firstRemove.addEventListener('click',()=>{
    const firstItem  = items.firstElementChild;
    if(firstItem){
        items.removeChild(firstItem);
    }
})