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
}

for (var i = 0; i < 10; i++) {
  document.getElementById("tpg" + i).addEventListener("change", addToPizza);
}
for (var i = 0; i < 4; i++) {
  document.getElementsByClassName("pizzaSetting")[i].children[1].addEventListener("change", changePizza);
}

function prebuiltTab(evt) {
  document.getElementById("endOrder").children[0].innerHTML = "Total: $0.00";
  document.getElementById("tabTitle").children[0].innerHTML = "Prebuilt Pizzas";
  document.getElementById("prebuiltHolder").style.display = "flex";
  document.getElementById("customHolder").style.display = "none";
  document.getElementById("orderBtn").style.display = "none";
  document.getElementById("pizzaSettings").style.display = "none";  
}

function customizeTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Customize Pizza";
  document.getElementById("prebuiltHolder").style.display = "none";
  document.getElementById("customHolder").style.display = "flex";
  document.getElementById("orderBtn").style.display = "flex";
  document.getElementById("orderBtn").style.marginLeft = "auto";
  document.getElementById("pizzaSettings").style.display = "flex";  
  FillPizza();
}

function FillPizza() {
  var pizza = document.getElementById('pizzaDrawing');
  var crust = new Image(250, 250);
  crust.src = 'images/crusts/regular-01.png';
  crust.style = "z-index:2; position:absolute; top:0px; left:0px;";
  crust.className = "imgPizza";
  var sauce = new Image(250, 250);
  sauce.src = 'images/sauces/normal-01.png';
  sauce.style = "z-index:3; position:absolute;top:0px; left:0px;";
  sauce.className = "imgPizza";
  var cheese = new Image(250, 250);
  cheese.src = 'images/cheeses/normal-01.png';
  cheese.style = "z-index:4; position:absolute;top:0px; left:0px;";
  cheese.className = "imgPizza";
  pizza.appendChild(crust);
  pizza.appendChild(sauce);
  pizza.appendChild(cheese);
}

function addToOrder(evt) {
  //reset everything
  if(evt.path[1].id == "prebuiltPizza1") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $5.00";
  }
  else if(evt.path[1].id == "prebuiltPizza2") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $9.00";
  }
  else if(evt.path[1].id == "prebuiltPizza3") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $6.50";
  }
  else if(evt.path[1].id == "prebuiltPizza4") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $6.00";
  }
  else if(evt.path[1].id == "prebuiltPizza5") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $5.00";
  }
  alert("Thanks for your purchase! That will be " + document.getElementById("endOrder").children[0].innerHTML.substr(7) + "!");
  prebuiltTab(null);
}

function addToPizza(evt) {
  var num = evt.target.id.substr(3);
  if (currentToppings[num] != "") {
    currentToppings[num] = "";
  }
  else {
    currentToppings[num] = evt.target.value;
  }
  drawPizza();
}

function changePizza(evt) {
  var a = evt.target;
  if(a.id == "selSize"){
    if(a.selectedIndex == 0){
      document.getElementById('pizzaDrawing').style = 'height: 210px; width: 210px;';
      var images = document.getElementsByClassName('imgPizza');
      for(var i = 0; i < images.length; i++){
        images[i].style = "height: 210px; width: 210px;";
      }
    }
    else if(a.selectedIndex == 1){
      document.getElementById('pizzaDrawing').style = 'height: 225px; width: 225px;';
      var images = document.getElementsByClassName('imgPizza');
      for(var i = 0; i < images.length; i++){
        images[i].style = "height: 225px; width: 225px;";
      }
    }
    else if(a.selectedIndex == 2){
      document.getElementById('pizzaDrawing').style = 'height: 250px; width: 250px;';
      var images = document.getElementsByClassName('imgPizza');
      for(var i = 0; i < images.length; i++){
        images[i].style = "height: 250px; width: 250px;";
      }
    }
  }
  // document.getElementById("sizeSetting").children[1].value
  // document.getElementById("crustSetting").children[1].value
  // document.getElementById("sauceSetting").children[1].value
  // document.getElementById("cheeseSetting").children[1].value
}

function setPrice() {
  var toppings = 0;
  var price = 0;
  var list = document.getElementById("yourToppingsList");
  var firstDisc = false;
  var secondDisc = false;
  for(var i = 0; i < list.children.length; i++) {
    if(list.children[i].children[1].value == "Regular") {
      toppings++; 
      price += 1;
    }
    else if(list.children[i].children[1].value == "Light") {
      toppings++;
      price += .50;
    }
    else {
      toppings += 2;
      price += 2;
    }
    if(toppings > 0) {
      if(!firstDisc) {
        firstDisc = true;
        price -= 1;
      }
    }
    if(toppings > 4) {
      if(!secondDisc) {
        secondDisc = true;
        price -= 1;
      }
    }
  }
  document.getElementById("endOrder").children[0].innerHTML = "Total: $" +  price.toFixed(2);
}

function drawPizza() {
  var pizza = document.getElementById('pizzaDrawing');
  while (pizza.hasChildNodes()) { 
    pizza.removeChild(pizza.lastChild);
  }
  FillPizza();
  var counter = 0;
  for (i = 0; i < currentToppings.length; i++) {
    if (currentToppings[i] != "") {
      var img = new Image(250, 250);
      img.className = 'imgPizza';
      switch (i) {
        case 0:
          img.src = "images/toppings/pepperoni-normal-01.png";
          img.id = "Pepperoni";
          counter++;
          break;
        case 1:
          img.src = "images/toppings/sausage-normal-01.png";
          img.id = "Sausage";
          counter++;
          break;
        case 2:
          img.src = "images/toppings/bacon-normal-01.png";
          img.id = "Bacon";
          counter++;
          break;
        case 3:
          img.src = "images/toppings/chicken-normal-01.png";
          img.id = "Chicken";
          counter++;
          break;
        case 4:
          img.src = "images/toppings/ham-normal-01.png";
          img.id = "Ham";
          counter++;
          break;
        case 5:
          img.src = "images/toppings/anchovies-normal-01.png";
          img.id = "Anchovies";
          counter++;
          break;
        case 6:
          img.src = "images/toppings/onions-normal-01.png";
          img.id = "Onions";
          counter++;
          break;
        case 7:
          img.src = "images/toppings/spinach-normal-01.png";
          img.id = "Spinach";
          counter++;
          break;
        case 8:
          img.src = "images/toppings/peppers-normal-01.png";
          img.id = "Peppers";
          counter++;
          break;
        case 9:
          img.src = "images/toppings/jalapeno-normal-01.png";
          img.id = "Jalapenos";
          counter++;
          break;
      }
      img.style = "z-index:5; position:absolute; top:0px; left:0px;";
      pizza.appendChild(img);
    }
    
    if (counter >= 5) {
      document.getElementById('lblBonus').style = "visibility:visible";
    }
    else{
      document.getElementById('lblBonus').style = "visibility:hidden";
    }
    if (counter > 0){
      document.getElementById('lblToppings').style = "visibility:visible";
    }
    else{
      document.getElementById('lblToppings').style = "visibility:hidden";
    }
    
  }
  updateToppingList();
}

function updateToppingList(){
  var list = document.getElementById('yourToppingsList');
  while (list.hasChildNodes()) { 
    list.removeChild(list.lastChild);
  }
  var options = ["Regular", "Light", "Double"];
  for(var i = 0; i< currentToppings.length; i++){
    if(currentToppings[i] != ""){
      var d = document.createElement("div");
      var l = document.createElement('label');
      var s = document.createElement('select');
      for(var j = 0; j < options.length; j++) {
        var opt = options[j];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        s.appendChild(el);
      }
      var full = document.createElement('button');
      var left = document.createElement('button');
      var right = document.createElement('button');
      d.className = 'toppingListElement';
      l.innerHTML = (currentToppings[i]);
      full.className = 'btnFullPizza';
      left.className = 'btnLeftPizza';
      right.className = 'btnRightPizza';
      d.appendChild(l);
      d.appendChild(s);
      d.appendChild(full);
      d.appendChild(left);
      d.appendChild(right);
      document.getElementById('yourToppingsList').appendChild(d);
    }
  }
  setPrice();
}