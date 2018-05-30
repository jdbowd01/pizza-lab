currentToppings = ["", "", "", "", "", "", "", "", "", ""];

var prebuiltPizza = document.getElementsByClassName("pizzaTab")[0];
var customizePizza = document.getElementsByClassName("pizzaTab")[1];
var buttons = document.getElementsByClassName("btn");

prebuiltPizza.addEventListener("click", prebuiltTab);
customizePizza.addEventListener("click", customizeTab);

document.getElementById("selCrust").addEventListener("change", changeCrust);
document.getElementById("selSize").addEventListener("change", changeSize);
document.getElementById("selCheese").addEventListener("change", changeSize);
document.getElementById("selSauce").addEventListener("change", changeSize);

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].innerHTML == "Add to Order") {
    buttons[i].addEventListener("click", addToOrder);
  }
}

for (var i = 0; i < 10; i++) {
  document.getElementById("tpg" + i).addEventListener("change", addToPizza);
}

function prebuiltTab(evt) {
  document.getElementById("endOrder").children[0].innerHTML = "Total: $0.00";
  document.getElementById("tabTitle").children[0].innerHTML = "Prebuilt Pizzas";
  document.getElementById("prebuiltHolder").style.display = "flex";
  document.getElementById("customHolder").style.display = "none";
  document.getElementById("orderBtn").style.display = "none";
  document.getElementById("endOrder").children[0].style.display = "none";
  document.getElementById("pizzaSettings").style.display = "none";  
}

function customizeTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Customize Pizza";
  document.getElementById("prebuiltHolder").style.display = "none";
  document.getElementById("customHolder").style.display = "flex";
  document.getElementById("orderBtn").style.display = "flex";
  document.getElementById("orderBtn").style.marginLeft = "auto";
  document.getElementById("pizzaSettings").style.display = "flex";
  document.getElementById("endOrder").children[0].style.display = "flex";  
  FillPizza();
}

function FillPizza() {
  var pizza = document.getElementById('pizzaDrawing');
  if(pizza.childElementCount == 0){
    var crust = new Image(250, 250);
    crust.src = 'images/crusts/regular-01.png';
    crust.style = "z-index:2; position:absolute; top:0px; left:0px;";
    crust.className = "imgPizza";
    crust.id = 'crust';
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
  setPrice();
}
function changeCrust(evt){
  var x = evt.target.value;
  if(x == 'regular'){
    document.getElementById('crust').src='images/crusts/regular-01.png';
  }
  else if(x == 'thin'){
    document.getElementById('crust').src='images/crusts/thin-01.png';
  }
  else if(x == 'stuffed'){
    document.getElementById('crust').src='images/crusts/stuffed-01.png';
  }
  else if(x == 'garlic'){
    document.getElementById('crust').src='images/crusts/garlic-01.png';
  }
  setPrice();
}
function changeSize(evt){
  var x = evt.target.value;
  setPrice();
  // if(x == 'small'){
  //   document.getElementsByClassName('imgPizza').style = 'height:215px; width: 215px;'
  // }
  // else if(x == 'medium'){
  //   document.getElementsByClassName('imgPizza').style = 'height:230px; width: 230px;'
  // }
  // else if(x == 'large'){
  //   document.getElementsByClassName('imgPizza').style = 'height:250px; width: 250px;'
  // }
  // else if(x == 'extra'){
  //   document.getElementsByClassName('imgPizza').style = 'height:265px; width: 265px;'
  // }
}
function addToOrder(evt) {
  alert("Thanks for your purchase! That will be " + document.getElementById("endOrder").children[0].innerHTML.substr(7) + "!");
  currentToppings = [];
  for(var i = 0; i < document.getElementsByClassName("topping").length; i++) {
    currentToppings[i] = "";
    document.getElementsByClassName("topping")[i].children[0].checked = false;
  }
  document.getElementById("selSize").value = "medium";
  document.getElementById("selCrust").value = "regular";
  document.getElementById("selCheese").value = "Normal";
  document.getElementById("selSauce").value = "Normal";
  drawPizza();

  if(evt.path[1].id == "prebuiltPizza1") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $5.00";
  }
  else if(evt.path[1].id == "prebuiltPizza2") {
    document.getElementById("endOrder").children[0].innerHTML = "Total: $6.00";
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
  setPrice();
}

function setPrice() {
  var toppings = 0;
  var price = 0;
  var list = document.getElementById("yourToppingsList");
  var firstDisc = false;
  var secondDisc = false;
  var size = document.getElementById("selSize").value;
  var crust = document.getElementById("selCrust").value;
  var cheese = document.getElementById("selCheese").value;
  var sauce = document.getElementById("selSauce").value;
  if(size == "small"){
    price += 4;
  }
  else if(size == "medium"){
    price += 6;
  }
  else if(size == "large"){
    price += 8;
  }
  else if(size == "extra"){
    price += 10;
  }

  if(crust == 'stuffed'){
    price += 2;
  }
  else if(crust == 'thin') {
    price += .50;
  }
  else if(crust == 'garlic') {
    price += 1.5;
  }
  else if(crust == 'regular') {
    price += 1;
  }

  if(cheese == 'Normal') {
    price += 1;
  }
  else if(cheese == 'Light') {
    price += .5;
  }
  else if(cheese == 'Double') {
    price += 2;
  }

  if(sauce == 'Normal') {
    price += 1;
  }
  else if(sauce == 'Light') {
    price += .5;
  }
  else if(sauce == 'Double') {
    price += 2;    
  }
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
      document.getElementById('yourToppingsList').style = "visibility:visible";
    }
    else{
      document.getElementById('lblToppings').style = "visibility:hidden";
      document.getElementById('yourToppingsList').style = "visibility:hidden";
    }
    
  }
  updateToppingList();
}
var selectors;
var values;
function updateToppingList(){
  selectors = [];
  values = [];
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
      d.style = "line-height:30px; vertical-text-align: center; margin-bottom: 5px;"
      l.style = "margin-right:3px";
      s.style = "margin-right:3px";
      s.addEventListener("change", setPrice);
      for(var j = 0; j < options.length; j++) {
        var opt = options[j];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        s.appendChild(el);
      }
      selectors[selectors.length] = s;
      values[values.length] = s.value;
      s.addEventListener('change', modToppings);
      var full = document.createElement('button');
      var left = document.createElement('button');
      var right = document.createElement('button');
      d.className = 'toppingListElement';
      l.innerHTML = (currentToppings[i]);
      full.className = 'btnFullPizza';
      left.className = 'btnLeftPizza';
      right.className = 'btnRightPizza';
      full.id = l.innerHTML + 'full';
      left.id = l.innerHTML + 'left';
      right.id = l.innerHTML + 'right';
      full.style = 'background:#1286AA';
      full.addEventListener('click', halves);
      left.addEventListener('click', halves);
      right.addEventListener('click', halves);
      d.appendChild(l);
      d.appendChild(s);
      d.appendChild(full);
      d.appendChild(left);
      d.appendChild(right);
      document.getElementById('yourToppingsList').appendChild(d);
    }
  }
}
function modToppings(evt){
  values[values.length] = evt.target.value;
}
function halves(evt){
  var b = evt.target;
  if(b.id == "Pepperonifull"){
    document.getElementById("Pepperoni").src = 'images/toppings/pepperoni-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Pepperonileft').style = "background:#FFF;";
    document.getElementById('Pepperoniright').style = "background:#FFF;";
  }
  else if(b.id == "Pepperonileft"){
    document.getElementById("Pepperoni").src = 'images/toppings/pepperoni-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Pepperonifull').style = "background:#FFF;";
    document.getElementById('Pepperoniright').style = "background:#FFF;";
  }
  else if(b.id == "Pepperoniright"){
    document.getElementById("Pepperoni").src = 'images/toppings/pepperoni-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Pepperonileft').style = "background:#FFF;";
    document.getElementById('Pepperonifull').style = "background:#FFF;";
  }
  //////////////////////////
  else if(b.id == "Sausagefull"){
    document.getElementById("Sausage").src = 'images/toppings/sausage-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Sausageleft').style = "background:#FFF;";
    document.getElementById('Sausageright').style = "background:#FFF;";
  }
  else if(b.id == "Sausageleft"){
    document.getElementById("Sausage").src = 'images/toppings/sausage-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Sausagefull').style = "background:#FFF;";
    document.getElementById('Sausageright').style = "background:#FFF;";
  }
  else if(b.id == "Sausageright"){
    document.getElementById("Sausage").src = 'images/toppings/sausage-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Sausageleft').style = "background:#FFF;";
    document.getElementById('Sausagefull').style = "background:#FFF;";
  }
  ///////////////////////////
  else if(b.id == "Baconfull"){
    document.getElementById("Bacon").src = 'images/toppings/bacon-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Baconleft').style = "background:#FFF;";
    document.getElementById('Baconright').style = "background:#FFF;";
  }
  else if(b.id == "Baconleft"){
    document.getElementById("Bacon").src = 'images/toppings/bacon-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Baconfull').style = "background:#FFF;";
    document.getElementById('Baconright').style = "background:#FFF;";
  }
  else if(b.id == "Baconright"){
    document.getElementById("Bacon").src = 'images/toppings/bacon-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Baconleft').style = "background:#FFF;";
    document.getElementById('Baconfull').style = "background:#FFF;";
  }
  ///////////////////////////
  else if(b.id == "Chickenfull"){
    document.getElementById("Chicken").src = 'images/toppings/chicken-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Chickenleft').style = "background:#FFF;";
    document.getElementById('Chickenright').style = "background:#FFF;";
  }
  else if(b.id == "Chickenleft"){
    document.getElementById("Chicken").src = 'images/toppings/chicken-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Chickenfull').style = "background:#FFF;";
    document.getElementById('Chickenright').style = "background:#FFF;";
  }
  else if(b.id == "Chickenright"){
    document.getElementById("Chicken").src = 'images/toppings/chicken-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Chickenleft').style = "background:#FFF;";
    document.getElementById('Chickenfull').style = "background:#FFF;";
  }
  ///////////////////////////
  else if(b.id == "Hamfull"){
    document.getElementById("Ham").src = 'images/toppings/ham-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Hamleft').style = "background:#FFF;";
    document.getElementById('Hamright').style = "background:#FFF;";
  }
  else if(b.id == "Hamleft"){
    document.getElementById("Ham").src = 'images/toppings/ham-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Hamfull').style = "background:#FFF;";
    document.getElementById('Hamright').style = "background:#FFF;";
  }
  else if(b.id == "Hamright"){
    document.getElementById("Ham").src = 'images/toppings/ham-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Hamleft').style = "background:#FFF;";
    document.getElementById('Hamfull').style = "background:#FFF;";
  }
  ////////////////////////
  else if(b.id == "Anchoviesfull"){
    document.getElementById("Anchovies").src = 'images/toppings/anchovies-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Anchoviesleft').style = "background:#FFF;";
    document.getElementById('Anchoviesright').style = "background:#FFF;";
  }
  else if(b.id == "Anchoviesleft"){
    document.getElementById("Anchovies").src = 'images/toppings/anchovies-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Anchoviesfull').style = "background:#FFF;";
    document.getElementById('Anchoviesright').style = "background:#FFF;";
  }
  else if(b.id == "Anchoviesright"){
    document.getElementById("Anchovies").src = 'images/toppings/anchovies-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Anchoviesleft').style = "background:#FFF;";
    document.getElementById('Anchoviesfull').style = "background:#FFF;";
  }
  ////////////////////////
  else if(b.id == "Onionsfull"){
    document.getElementById("Onions").src = 'images/toppings/onions-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Onionsleft').style = "background:#FFF;";
    document.getElementById('Onionsright').style = "background:#FFF;";
  }
  else if(b.id == "Onionsleft"){
    document.getElementById("Onions").src = 'images/toppings/onions-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Onionsfull').style = "background:#FFF;";
    document.getElementById('Onionsright').style = "background:#FFF;";
  }
  else if(b.id == "Onionsright"){
    document.getElementById("Onions").src = 'images/toppings/onions-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Onionsleft').style = "background:#FFF;";
    document.getElementById('Onionsfull').style = "background:#FFF;";
  }
  ////////////////////////
  else if(b.id == "Spinachfull"){
    document.getElementById("Spinach").src = 'images/toppings/spinach-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Spinachleft').style = "background:#FFF;";
    document.getElementById('Spinachright').style = "background:#FFF;";
  }
  else if(b.id == "Spinachleft"){
    document.getElementById("Spinach").src = 'images/toppings/spinach-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Spinachfull').style = "background:#FFF;";
    document.getElementById('Spinachright').style = "background:#FFF;";
  }
  else if(b.id == "Spinachright"){
    document.getElementById("Spinach").src = 'images/toppings/spinach-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Spinachleft').style = "background:#FFF;";
    document.getElementById('Spinachfull').style = "background:#FFF;";
  }
  ////////////////////////
  else if(b.id == "Green Peppersfull"){
    document.getElementById("Peppers").src = 'images/toppings/peppers-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Green Peppersleft').style = "background:#FFF;";
    document.getElementById('Green Peppersright').style = "background:#FFF;";
  }
  else if(b.id == "Green Peppersleft"){
    document.getElementById("Peppers").src = 'images/toppings/peppers-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Green Peppersfull').style = "background:#FFF;";
    document.getElementById('Green Peppersright').style = "background:#FFF;";
  }
  else if(b.id == "Green Peppersright"){
    document.getElementById("Peppers").src = 'images/toppings/peppers-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Green Peppersleft').style = "background:#FFF;";
    document.getElementById('Green Peppersfull').style = "background:#FFF;";
  }
  ////////////////////////
  else if(b.id == "Jalapeno Peppersfull"){
    document.getElementById("Jalapenos").src = 'images/toppings/jalapeno-normal-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Jalapeno Peppersleft').style = "background:#FFF;";
    document.getElementById('Jalapeno Peppersright').style = "background:#FFF;";
  }
  else if(b.id == "Jalapeno Peppersleft"){
    document.getElementById("Jalapenos").src = 'images/toppings/jalapeno-left-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Jalapeno Peppersfull').style = "background:#FFF;";
    document.getElementById('Jalapeno Peppersright').style = "background:#FFF;";
  }
  else if(b.id == "Jalapeno Peppersright"){
    document.getElementById("Jalapenos").src = 'images/toppings/jalapeno-right-01.png';
    b.style = "background:#1286AA;";
    document.getElementById('Jalapeno Peppersleft').style = "background:#FFF;";
    document.getElementById('Jalapeno Peppersfull').style = "background:#FFF;";
  }
}