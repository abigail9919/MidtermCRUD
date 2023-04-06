const coffeeMenu = [
    {
        name: "Pistachio Cream Iced Coffee",
        calories: 250,
        flavor: "Vanilla Syrup",
        topping: "Pistachio Cream",
        temperature: "Iced"
    },
    {
        name: "Iced Vanilla Espresso",
        calories: 140,
        flavor: "Vanilla Syrup",
        topping: "Oatmilk",
        temperature: "Iced"
    },
    {
        name: "Iced Caramel Macchiato",
        calories: 260,
        flavor: "Vanilla Syrup",
        topping: "Caramel Drizzle",
        temperature: "Iced"
    },
    {
        name: "Irish Cream Cappuccino",
        calories: 200,
        flavor: "Irish Cream Syrup",
        topping: "Milk Foam",
        temperature: "Hot"
    },
    {
        name: "Marshmallow Latte",
        calories: 220,
        flavor: "Marshmallow Syrup",
        topping: "Steamed Milk",
        temperature: "Hot"
    },
    {
        name: "White Chocolate Mocha",
        calories: 430,
        flavor: "White Chocolate Syrup",
        topping: "Whipped Cream",
        temperature: "Hot"
    }
];
// ${coffee.name} has ${coffee.calories} calories. It is a ${coffee.temperature} coffee, which includes ${coffee.flavor} and is topped with ${coffee.topping}.`

const showMenu = () => {
    let coffeeList = `<h2>Menu</h2>`;
    coffeeList += `<ol>`;
    coffeeMenu.forEach((coffee) => {
        coffeeList += `<li><b>${coffee.name}</b></li>`;
    });
    coffeeList += `</ol>`;
    return coffeeList;
};

const createCoffee = () => {
    let name = prompt("Enter the name of the new drink")
    let calories = prompt("Enter the calories")
    let flavor = prompt("Enter the flavor that goes in it")
    let topping = prompt("Enter the toppings that are on it")
    let temperature = prompt("Is it hot or iced?")

    coffeeMenu.push({name, calories, flavor, topping, temperature}); // this adds the new coffee to the coffeeMenu array as one object

    console.log(coffeeMenu)

    menu.innerHTML = showMenu(); // this will reprint the coffee menu to reflect the new coffee
};

const coffeeItem = (choice) => {
    coffeeMenu.forEach((coffee) => {
        if (coffee.name == choice) {
            return coffee;
        };
    });
};

const readCoffee = () => {
    // ask the user to pick the coffee they want to read about
    let choice = prompt("Enter the name of the coffee you'd like to read about");

    // find the index of the chosen coffee
    let coffeeNumber = coffeeMenu.findIndex((coffee) => coffee.name == choice);
    console.log("Your coffee:" + coffeeMenu[coffeeNumber]["name"]);

    // give the user info about the selected coffee
    alert(`${coffeeMenu[coffeeNumber].name} has ${coffeeMenu[coffeeNumber].calories} calories. It is a ${coffeeMenu[coffeeNumber].temperature} coffee, which includes ${coffeeMenu[coffeeNumber].flavor} and is topped with ${coffeeMenu[coffeeNumber].topping}.`);
};

const updateCoffee = () => {
    let choice = prompt("Enter the name of the coffee you'd like to update");

    // find the coffee the user would like to update
    let coffeeNumber = coffeeMenu.findIndex((coffee) => coffee.name == choice);
    console.log("Coffee to update:" + coffeeMenu[coffeeNumber]["name"]);    

    // get new attributes from the user
    let name = prompt("Enter the name of the drink")
    let calories = prompt("Enter the calories")
    let flavor = prompt("Enter the flavor that goes in it")
    let topping = prompt("Enter the toppings that are on it")
    let temperature = prompt("Is it hot or iced?")

    // update the old coffee to have the new attributes that were set by the user
    coffeeMenu[coffeeNumber] = {name, calories, flavor, topping, temperature};

    menu.innerHTML = showMenu(); // this will reprint the coffee menu to reflect the update
};

const deleteCoffee = () => {
    let choice = prompt("Enter the name of the coffee you'd like to delete");

    let coffeeNumber = coffeeMenu.findIndex((coffee) => coffee.name == choice);
    console.log("Coffee to delete:" + coffeeMenu[coffeeNumber]["name"]);

    coffeeMenu.splice(coffeeNumber, 1);
    menu.innerHTML = showMenu();
};

const findChoice = () => {
    let userChoice = document.querySelector("#menuOption").value;
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);

    if (userChoice == "C") {
        createCoffee()
    }
    else if (userChoice == "R") {
        readCoffee()
    }
    else if (userChoice == "U") {
        updateCoffee()
    }
    else if (userChoice == "D") {
        deleteCoffee()
    }
};

// this is responsible for telling the user the options they can do 
let options = document.querySelector(".options");
options.innerHTML = `<h5>Type C to Create an item, R to Read about an item, U to Update an item, or D to delete an item\n</h5>`;

// this will show the initial coffee menu (6 items)
let menu = document.querySelector(".menu");
menu.innerHTML = showMenu(); 

// this is a logo image 
let imageHolder = document.querySelector(".imageHolder");
imageHolder.innerHTML = `<img src='images/logo.png' alt='Cacto Coffee Logo'>`;