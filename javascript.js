let container = document.querySelector(".container");


// create 16 container divs
for(let i = 0; i < 16; i++){
    // create row to store squares
    let row = document.createElement("div");
    row.classList.add("row");

    // create squares
    for(let j = 0; j < 16; j++){
        let box = document.createElement("div");
        box.classList.add("square");

        // add event listener for whenever mouse goes over square
        box.addEventListener("mouseover", () =>{
            box.style.backgroundColor = "black";
        })

        //store squares into row
        row.append(box);
    }
    
    //store row into container
    container.append(row);
}


// select button
let button = document.querySelector("button");
// add click event listener on button
button.addEventListener("click", () =>{
    // fire function that prompts user to enter a number (max 100)
    let gridNum = prompt("Enter number of squares per side: ");
    // convert gridNum to a number
    Number(gridNum);
    
    // clear grid first
    let parent = document.querySelector("div");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

    // start for loop to create rows and squares
    // based off of gridNum
    for(let i = 0; i < gridNum; i++){
        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < gridNum; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor = "black";
            })

            row.append(square);
        }

        container.append(row);
    }
})
