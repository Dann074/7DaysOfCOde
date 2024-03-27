let fruits = [];
let dairy = [];
let sweets = [];
let frozen = [];
let food = "";
let category = "";

let addMore = "yes";
while(addMore != "no"){
    addMore = prompt("Do you want to add one item in itens list? Answer 'yes' or 'no'.");
    while (addMore != "yes" && addMore != "no") {
	alert(`Invalid entry!`);
        addMore = prompt("Do you want to add more itens? Answer 'yes' or 'no'.");
    }
	
    if (addMore === "no"){
        break;
    }
	
    food = prompt("What food do you want to add?");
    category = prompt("Which category does this food fit into: 'fruit', 'dairy', 'sweets' or 'frozen'?");
    if(category === 'fruits'){
        fruits.push(food);
    } else if (category === 'dairy'){
        dairy.push(food);
    } else if (category === 'sweets'){
        sweets.push(food);
    } else if (category === 'frozen'){
        frozen.push(food);
    } else {
        alert("This category was not pre-defined.")
    }
}
alert(`Shopping list:\n  Fruits: ${frutas}\n  Dairy: ${laticinios}\n  Sweets: ${doces}\n  Frozen: ${congelados}`);
