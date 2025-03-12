let table = document.createElement("table");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let test = document.getElementById("test")
// creates elements and links div to javacript

test.appendChild(table)
table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
// appends table and tr's to the div, creating the table

const useText = ["Car", "Chevrolet", "Pontiac", "Top", "120mph", "140mph", "Price", "$10,000","$20,000"];
for (let i = 0; i < 9; i++) { // this for loop simplifies the process appending text to the tr's 
    let td = document.createElement("td"); // creates the td
    td.textContent = useText[i]; // appends to td
    table.children[i%3].appendChild(td); // appends td to table children
}

test.style.backgroundColor = "rgb(125, 125, 125)" // styles the table making the background grey
test.style.border = "2px solid rgb(0,0,255)" // style the table by making a border around it with a blue color

test.setAttribute("style", (test.getAttribute("style") || "") + "border-radius: 15px;")  // style by setAttribute, make the border look circular
test.setAttribute("style", (test.getAttribute("style") || "") + "width: 200px;")  // style by setAttribute, makes the width of the table smaller