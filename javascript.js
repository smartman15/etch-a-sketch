let container = document.querySelector(".container");


// create 16 container divs
for(let i = 0; i < 256; i++){
    let box = document.createElement("div");
    // box.textContent = "bing bong";
    box.classList.add("square");
    box.addEventListener("mouseover", () =>{
        box.style.backgroundColor = "black";
    })
    container.appendChild(box);
}