let container = document.querySelector("#container");



// create 16 container divs
for(let i = 0; i < 16; i++){
    let box = document.createElement("div");
    // box.textContent = "bing bong";
    box.classList.add("square");
    container.appendChild(box);
}