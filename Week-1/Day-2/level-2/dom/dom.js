

const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.style.backgroundColor = 'green';
child.style.backgroundColor = 'pink';


// access the tagname of the element
console.log(parent.tagName);
console.log(child.tagName);



// access the next sibling



const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

const prevoiusSiblin  = child.previousElementSibling;
console.log(prevoiusSiblin);