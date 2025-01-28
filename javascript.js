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
// add click event listener on button
// fire function that prompts user to enter a number (max 100)