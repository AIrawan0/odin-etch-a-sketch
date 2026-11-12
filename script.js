function createBox(parent,text){
    const newDiv = document.createElement('div');
    newDiv.textContent = text;
    newDiv.className = 'grid-box';
    newDiv.style.backgroundColor = '#ffff';
    newDiv.style.textAlign = 'center';
    newDiv.style.paddingTop = '10px';
    newDiv.style.fontSize = '6px';
    newDiv.style.aspectRatio = '1/1';
    newDiv.style.color = '#000000';
    newDiv.style.border = 'solid 1px #246a73';
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
    const long = Math.round(Math.sqrt(size))
    const actSize = Math.pow(long,2);
    document.documentElement.style.setProperty('--size',long);
    console.log(`Calculated grid size of ${long} x ${long} become ${actSize}`)
    for(let i=1;i<=actSize;i++){
        createBox(content,i);
    }

}

function askSize(){
    let size = prompt("Please insert grid size :");
    return size;
}

const content = document.getElementById("content");


content.addEventListener("mouseover",(event)=>{
    const targetDiv = event.target.closest('.grid-box');
    if(!targetDiv) return;

    if(!targetDiv.contains(event.relatedTarget)){
        targetDiv.style.backgroundColor = 'orange';
        targetDiv.style.color = 'white';
    };
});