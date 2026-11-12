function createBox(parent,text){
    const newDiv = document.createElement('div');
    // newDiv.textContent = text;
    newDiv.className = 'grid-box';
    newDiv.style.backgroundColor = '#ffff';
    newDiv.style.textAlign = 'center';
    newDiv.style.paddingTop = '10px';
    newDiv.style.fontSize = '3px';
    newDiv.style.aspectRatio = '1/1';
    newDiv.style.color = '#000000';
    parent.appendChild(newDiv);
}

function delGrid(){
    content.replaceChildren();
}

function createGrid(){
    if(content.children.length>0){
        delGrid();
    }
    const size = askSize();
    const actSize = Math.pow(size,2);
    document.documentElement.style.setProperty('--size',size);
    console.log(`Calculated grid size of ${size} x ${size} become ${actSize}`)
    for(let i=1;i<=actSize;i++){
        createBox(content,i);
    }

}

function askSize(){
    const size = prompt("Please insert grid size (max:100) :");
    const limitSize = size > 100 ? (alert('max size is :100'), 100) : size;
    return limitSize;
}

function randomRGB(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return {r,g,b};
}

const content = document.getElementById("content");

content.addEventListener("mouseover",(event)=>{
    const targetDiv = event.target.closest('.grid-box');
    if(!targetDiv) return;

    if(!targetDiv.contains(event.relatedTarget)){
        const {r,g,b} = randomRGB();
        targetDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    };
});