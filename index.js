let table = document.createElement("table");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");


let test = document.getElementById("test")
let text1 = document.getElementById("td")
console.log(text1)
test.appendChild(table)
table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)

const useText = ["Car", "Chevrolet", "Pontiac", "Top", "120mph", "140mph", "Price", "$10,000","$20,000"];
for (let i = 0; i < 9; i++) {
    let td = document.createElement("td");
    td.textContent = useText[i];
    table.children[i%3].appendChild(td);
}

test.style.backgroundColor = "rgb(125, 125, 125)" // style by .style
test.style.border = "5px dotted rgb(0, 0, 0)" // style by .style

test.setAttribute("style", (test.getAttribute("style") || "") + "width: fit-content; padding: 15px;")  // style by setAttribute