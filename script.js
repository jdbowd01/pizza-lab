currentToppings = ["", "", "", "", "", "", "", "", "", ""];

var prebuiltPizza = document.getElementsByClassName("pizzaTab")[0];
var customizePizza = document.getElementsByClassName("pizzaTab")[1];
var buttons = document.getElementsByClassName("btn");

prebuiltPizza.addEventListener("click", prebuiltTab);
customizePizza.addEventListener("click", customizeTab);

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].innerHTML == "Add to Order") {
    buttons[i].addEventListener("click", addToOrder);
  }
  else if (buttons[i].innerHTML == "Checkout") {
    buttons[i].addEventListener("click", goToCheckout);
  }
}

for (var i = 0; i < 10; i++) {
  document.getElementById("tpg" + i).addEventListener("change", addToPizza);
}

function prebuiltTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Prebuilt Pizzas";
  document.getElementById("prebuiltHolder").style.display = "flex";
  document.getElementById("customHolder").style.display = "none";
  document.getElementById("orderBtn").style.display = "none";
  document.getElementById("checkoutBtn").style.marginLeft = "auto";
  document.getElementsByClassName("pizzaTab")[1].children.style.display = "none";
  document.getElementsByClassName("pizzaTab")[1].children[0].style.display = "flex";
}

function customizeTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Customize Pizza";
  document.getElementById("prebuiltHolder").style.display = "none";
  document.getElementById("customHolder").style.display = "flex";
  document.getElementById("orderBtn").style.display = "flex";
  document.getElementById("orderBtn").style.marginLeft = "auto";
  document.getElementById("checkoutBtn").style.marginLeft = "2%";
  document.getElementsByClassName("pizzaTab")[1].children[0].style.display = "flex";
  FillPizza();
}

function FillPizza() {
  var pizza = document.getElementById('pizzaDrawing');
  var crust = new Image(250, 250);
  crust.src = 'images/crusts/regular.png';
  crust.style = "z-index:2; position:absolute; top:0px; left:0px;";
  var sauce = new Image(225, 225);
  sauce.src = 'images/sauces/normal.png';
  sauce.style = "z-index:3; position:absolute; top:12.5px; left:12.5px;";
  var cheese = new Image(225, 225);
  cheese.src = 'images/cheeses/normal.png';
  cheese.style = "z-index:4; position:absolute; top:12.5px; left:12.5px;";
  pizza.appendChild(crust);
  pizza.appendChild(sauce);
  pizza.appendChild(cheese);
}

function addToOrder(evt) {

}

function goToCheckout(evt) {

}

function addToPizza(evt) {
  var num = evt.target.id.substr(3);
  if (currentToppings[num] != "") {
    currentToppings[num] = "";
  }
  else {
    currentToppings[num] = "top";
  }
  drawPizza();
}

function drawPizza() {
  console.log(currentToppings);
  var pizza = document.getElementById('pizzaDrawing');
  while (pizza.hasChildNodes()) { 
    pizza.removeChild(pizza.lastChild);
  }
  FillPizza();
  var counter = 0;
  for (i = 0; i < currentToppings.length; i++) {
    if (currentToppings[i] != "") {
      var img = new Image(200, 200);
      switch (i) {
        case 0:
          img.src = "images/toppings/pepperoni-normal.png";
          img.id = "Pepperoni";
          counter++;
          break;
        case 1:
          img.src = "images/toppings/sausage-normal.png";
          img.id = "Sausage";
          counter++;
          break;
        case 2:
          img.src = "images/toppings/bacon-normal.png";
          img.id = "Bacon";
          counter++;
          break;
        case 3:
          img.src = "images/toppings/chicken-normal.png";
          img.id = "Chicken";
          counter++;
          break;
        case 4:
          img.src = "images/toppings/ham-normal.png";
          img.id = "Ham";
          counter++;
          break;
        case 5:
          img.src = "images/toppings/anchovies-normal.png";
          img.id = "Anchovies";
          counter++;
          break;
        case 6:
          img.src = "images/toppings/onions-normal.png";
          img.id = "Onions";
          counter++;
          break;
        case 7:
          img.src = "images/toppings/spinach-normal.png";
          img.id = "Spinach";
          counter++;
          break;
        case 8:
          img.src = "images/toppings/peppers-normal.png";
          img.id = "Peppers";
          counter++;
          break;
        case 9:
          img.src = "images/toppings/jalapeno-normal.png";
          img.id = "Jalapenos";
          counter++;
          break;
      }
      img.style = "z-index:5; position:absolute; top:25px; left:25px;";
      pizza.appendChild(img);
    }
    
    if (counter >= 5) {
      document.getElementById('lblBonus').style = "visibility:visible";
    }
    else{
      document.getElementById('lblBonus').style = "visibility:hidden";
    }
  }
}