////DOM SELECTORS////
const pizzaMenu = document.getElementById("pizza-menu");
const sidesMenu = document.getElementById("sides-menu");
const starterMenu = document.getElementById("starter-menu");

const pizzaContainer = document.getElementById("pizza-container");
const sidesContainer = document.getElementById("sides-container");
const starterContainer = document.getElementById("starter-container");

////EVENT LISTENERS////
pizzaMenu.addEventListener("click", showPizzaMenu);
sidesMenu.addEventListener("click", showSidesMenu);
starterMenu.addEventListener("click", showStarterMenu);

////FUNCTIONS////
function showPizzaMenu() {
    pizzaContainer.style.visibility = 'initial';
    sidesContainer.style.visibility = 'collapse';
    starterContainer.style.visibility = 'collapse';
}

function showSidesMenu() {
    pizzaContainer.style.visibility = 'collapse';
    sidesContainer.style.visibility = 'visible';
    starterContainer.style.visibility = 'collapse';
}

function showStarterMenu() {
    pizzaContainer.style.visibility = 'collapse';
    sidesContainer.style.visibility = 'collapse';
    starterContainer.style.visibility = 'visible';
}
