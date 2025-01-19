let container = document.querySelector("#container");



// create 16x16 grid
for(let i = 0; i < 16; i++){
    let box = document.createElement("span");
    box.textContent = "bing bong";
    box.classList.add(".box");
    container.appendChild(box);
}