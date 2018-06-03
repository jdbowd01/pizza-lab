var toppingsList = ["Pepperoni", "Sausage", "Bacon", "Chicken", "Ham", "Anchovies", "Onions", "Spinach", "Green Peppers", "Jalapeno Peppers"]; 
var currentToppingsList = [];
var pizzaPresets = [
  {
    text: "Meat Lover's",
    price: "$5.00",
    desc: "A plain cheese pizza topped with sausage, pepperoni, and ham."
  },
  {
    text: "Vegetarian",
    price: "$6.00",
    desc: "Garlic crusted double cheese pizza with light sauce, topped with onions, peppers, and spinach."
  },
  {
    text: "Spicy Chicken Bacon",
    price: "$6.50",
    desc: "Stuffed crust pizza with double cheese, topped with chicken and bacon, with a few jalapenos."
  },
  {
    text: "Slightly Less Supreme",
    price: "$6.00",
    desc: "A plain cheese pizza topped with sausage, pepperoni, peppers, and onions."
  },
  {
    text: "Anchovy Ahoy",
    price: "$5.00",
    desc: "A thin crusted double cheese pizza with anchovies, onions, and peppers finishing the dish off."
  },
];
var picWidth = "80%";
var picPadding = "0% 10%";

createHTML();
EditHTML();
createToppings();
FillPizza();

function createHTML() {
  var pizza = document.getElementById("pizza");
  var titleBar = document.createElement("h1");
  titleBar.innerHTML = "The Pizza Donut";
  titleBar.id = "titleBar";
  var pizzaLogo = document.createElement("img");
  pizzaLogo.src = "images/pizzaDonut/pizzaDonut.png";
  var mainTab1 = document.createElement("p");
  mainTab1.className = "mainTab";
  mainTab1.innerHTML = "Prebuilt Pizzas";
  var pizzaTab1 = document.createElement("div");
  pizzaTab1.className = "pizzaTab";  
  var orderingTabs = document.createElement("div");
  orderingTabs.id = "orderingTabs";
  var lblCustom = document.createElement("p");
  lblCustom.className = "mainTab";
  lblCustom.id = "lblCustom";
  lblCustom.innerHTML = "Customize";
  var pizzaTab2 = document.createElement("div");
  pizzaTab2.className = "pizzaTab";
  var pSize = document.createElement("p");
  pSize.innerHTML = "Size";
  var sizeSetting = document.createElement("div");
  sizeSetting.id = "sizeSetting";
  sizeSetting.className = "pizzaSetting";
  var optionSmall = document.createElement("option");
  optionSmall.value = "small";
  optionSmall.innerHTML = "Small";
  var optionMedium = document.createElement("option");
  optionMedium.value = "medium";
  optionMedium.innerHTML = "Medium";
  optionMedium.selected = "selected";
  var optionLarge = document.createElement("option");
  optionLarge.value = "large";
  optionLarge.innerHTML = "Large";
  var optionExtra = document.createElement("option");
  optionExtra.value = "extra";
  optionExtra.innerHTML = "Extra";
  var selSize = document.createElement("select");
  selSize.id = "selSize";
  selSize.autocomplete = "off";
  var pCrust = document.createElement("p");
  pCrust.innerHTML = "Crust";
  var crustSetting = document.createElement("div");
  crustSetting.id = "crustSetting";
  crustSetting.className = "pizzaSetting";
  var optionRegular = document.createElement("option");
  optionRegular.value = "regular";
  optionRegular.innerHTML = "Regular";
  var optionThin = document.createElement("option");
  optionThin.value = "thin";
  optionThin.innerHTML = "Thin";
  var optionStuffed = document.createElement("option");
  optionStuffed.value = "stuffed";
  optionStuffed.innerHTML = "Stuffed";
  var optionGarlic = document.createElement("option");
  optionGarlic.value = "garlic";
  optionGarlic.innerHTML = "Garlic";
  var selCrust = document.createElement("select");
  selCrust.id = "selCrust";
  selCrust.autocomplete = "off";
  var pCheese = document.createElement("p");
  pCheese.innerHTML = "Cheese";
  var cheeseSetting = document.createElement("div");
  cheeseSetting.id = "cheeseSetting";
  cheeseSetting.className = "pizzaSetting";
  var optionNormal = document.createElement("option");
  optionNormal.innerHTML = "Normal";
  var optionLight = document.createElement("option");
  optionLight.innerHTML = "Light";
  var optionDouble = document.createElement("option");
  optionDouble.innerHTML = "Double";
  var selCheese = document.createElement("select");
  selCheese.id = "selCheese";
  selCheese.autocomplete = "off";
  var pSauce = document.createElement("p");
  pSauce.innerHTML = "Sauce";
  var sauceSetting = document.createElement("div");
  sauceSetting.id = "sauceSetting";
  sauceSetting.className = "pizzaSetting";
  var optionNormal1 = document.createElement("option");
  optionNormal1.innerHTML = "Normal";
  var optionLight1 = document.createElement("option");
  optionLight1.innerHTML = "Light";
  var optionDouble1 = document.createElement("option");
  optionDouble1.innerHTML = "Double";
  var selSauce = document.createElement("select");
  selSauce.id = "selSauce";
  var pizzaSettings = document.createElement("section");
  pizzaSettings.id = "pizzaSettings";
  var orderingArea =  document.createElement("div");
  orderingArea.id = "orderingArea";
  var orderDesc = document.createElement("div");
  orderDesc.id = "orderDesc";
  var tabTitle = document.createElement("h3");
  tabTitle.id = "tabTitle";
  tabTitle.style = "background-image:url('images/misc/presetPizzaBack.jpg');";
  var pPrebuiltPizzas = document.createElement("p");
  pPrebuiltPizzas.innerHTML = "Prebuilt Pizzas";
  var prebuiltHolder = document.createElement("div");
  prebuiltHolder.id = "prebuiltHolder";
  for(var i = 0; i < 5; i ++) {
    var prebuiltPizza = document.createElement("div");
    prebuiltPizza.id = "prebuiltPizza" + (i+1);
    prebuiltPizza.className = "prebuiltPizza";
    var prebuiltPizzaPicture = document.createElement("img");
    prebuiltPizzaPicture.className = "prebuiltPizzaPicture";
    var pText = document.createElement("p");
    pText.className = "bold";
    pText.innerHTML = pizzaPresets[i].text;
    var pPrice = document.createElement("p");
    pPrice.innerHTML = pizzaPresets[i].price;
    var addOrder = document.createElement("div");
    addOrder.className = "btn";
    addOrder.innerHTML = "Add to Order";
    var prebuiltDesc = document.createElement("p");
    prebuiltDesc.className = "prebuiltPizzaDesc";
    prebuiltDesc.innerHTML = pizzaPresets[i].desc;
    prebuiltPizza.appendChild(prebuiltPizzaPicture);
    prebuiltPizza.appendChild(pText);
    prebuiltPizza.appendChild(pPrice);
    prebuiltPizza.appendChild(addOrder);
    prebuiltPizza.appendChild(prebuiltDesc);
    prebuiltHolder.appendChild(prebuiltPizza);
  }
  var customHolder = document.createElement("div");
  customHolder.id = "customHolder";
  var pizzaDisplay = document.createElement("div");
  pizzaDisplay.id = "pizzaDisplay";
  pizzaDisplay.className = "box";
  var lblBonus = document.createElement("label");
  lblBonus.id = "lblBonus";
  lblBonus.innerHTML = "5 Toppings Deal!";
  var pizzaDrawing = document.createElement("div");
  pizzaDrawing.id = "pizzaDrawing";
  var yourToppings = document.createElement("div");
  yourToppings.id = "yourToppings";
  var lblToppings = document.createElement("label");
  lblToppings.id = "lblToppings";
  lblToppings.innerHTML = "Your Toppings";
  var yourToppingsList = document.createElement("div");
  yourToppingsList.id = "yourToppingsList";
  var toppingsDisplay = document.createElement("div");
  toppingsDisplay.id = "toppingsDisplay";
  toppingsDisplay.className = "box";
  var labelToppings = document.createElement("label");
  labelToppings.innerHTML = "Toppings";
  var toppingsListCreate = document.createElement("div");
  toppingsListCreate.id = "toppingsList";
  var endOrder = document.createElement("div");
  endOrder.id = "endOrder";
  var pTotal = document.createElement("p");
  pTotal.className = "bold";
  pTotal.innerHTML = "Total: $0.00";
  var orderBtn = document.createElement("div");
  orderBtn.id = "orderBtn";
  orderBtn.className = "btn";
  orderBtn.innerHTML = "Add to Order";

  titleBar.appendChild(pizzaLogo);
  pizza.appendChild(titleBar);
  pizzaTab1.appendChild(mainTab1);
  orderingTabs.appendChild(pizzaTab1);
  pizzaTab2.appendChild(lblCustom);
  selSize.appendChild(optionSmall);
  selSize.appendChild(optionMedium);
  selSize.appendChild(optionLarge);
  selSize.appendChild(optionExtra);
  sizeSetting.appendChild(pSize);
  sizeSetting.appendChild(selSize);
  selCrust.appendChild(optionRegular);
  selCrust.appendChild(optionThin);
  selCrust.appendChild(optionStuffed);
  selCrust.appendChild(optionGarlic);
  crustSetting.appendChild(pCrust);
  crustSetting.appendChild(selCrust);
  selCheese.appendChild(optionNormal);
  selCheese.appendChild(optionLight);
  selCheese.appendChild(optionDouble);
  cheeseSetting.appendChild(pCheese);
  cheeseSetting.appendChild(selCheese);
  selSauce.appendChild(optionNormal1);
  selSauce.appendChild(optionLight1);
  selSauce.appendChild(optionDouble1);
  sauceSetting.appendChild(pSauce);
  sauceSetting.appendChild(selSauce);
  pizzaSettings.appendChild(sizeSetting);
  pizzaSettings.appendChild(crustSetting);
  pizzaSettings.appendChild(cheeseSetting);
  pizzaSettings.appendChild(sauceSetting);
  pizzaTab2.appendChild(lblCustom);
  pizzaTab2.appendChild(pizzaSettings);
  orderingTabs.appendChild(pizzaTab2);
  orderingArea.appendChild(orderingTabs);
  pizza.appendChild(orderingArea);
  tabTitle.appendChild(pPrebuiltPizzas);
  orderDesc.appendChild(tabTitle);
  orderDesc.appendChild(prebuiltHolder);
  orderingArea.appendChild(orderDesc);
  pizzaDisplay.appendChild(lblBonus);
  pizzaDisplay.appendChild(pizzaDrawing);
  yourToppings.appendChild(lblToppings);
  yourToppings.appendChild(yourToppingsList);
  pizzaDisplay.appendChild(yourToppings);
  toppingsDisplay.appendChild(labelToppings);
  toppingsDisplay.appendChild(toppingsListCreate);
  customHolder.appendChild(pizzaDisplay);
  customHolder.appendChild(toppingsDisplay);
  endOrder.appendChild(pTotal);
  endOrder.appendChild(orderBtn);
  orderDesc.appendChild(customHolder);
  orderDesc.appendChild(endOrder);
}
function EditHTML() {
  var prebuiltPizza = document.getElementsByClassName("pizzaTab")[0];
  var customizePizza = document.getElementsByClassName("pizzaTab")[1];
  var buttons = document.getElementsByClassName("btn");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML == "Add to Order") {
      buttons[i].addEventListener("click", addToOrder);
    }
  }

  prebuiltPizza.addEventListener("click", prebuiltTab);
  customizePizza.addEventListener("click", customizeTab);
  document.getElementById("selCrust").addEventListener("change", changeCrust);
  document.getElementById("selSize").addEventListener("change", changeSize);
  document.getElementById("selCheese").addEventListener("change", changeSize);
  document.getElementById("selSauce").addEventListener("change", changeSize);
}
function createToppings() {
  var toppingsRow = document.createElement("div");
  toppingsRow.className = "toppingsRow";
  for(var i = 0; i < toppingsList.length; i++) {
    var topping = document.createElement("div");
    topping.className = "topping";
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = "tpg" + i;
    input.value = toppingsList[i];
    input.autocomplete = "off";
    input.addEventListener("change", addToPizza);
    topping.appendChild(input);
    var label = document.createElement("label");
    label.innerHTML = toppingsList[i];
    topping.appendChild(label);
    toppingsRow.appendChild(topping);

    if(i % 2 == 1 || i == toppingsList.length - 1) {
      document.getElementById("toppingsList").appendChild(toppingsRow);
      toppingsRow = document.createElement("div");
      toppingsRow.className = "toppingsRow";      
    }
  }
}
function FillPizza() {
  var pizza = document.getElementById('pizzaDrawing');
  var crust = document.createElement("img");
  crust.src = 'images/crusts/regular-01.png';
  crust.style = "z-index:2; position:absolute; top:0px; left:0px;";
  crust.className = "imgPizza";
  crust.id = 'crust';
  var sauce = document.createElement("img");
  sauce.src = 'images/sauces/normal-01.png';
  sauce.style = "z-index:3; position:absolute;top:0px; left:0px;";
  sauce.className = "imgPizza";
  var cheese = document.createElement("img");
  cheese.src = 'images/cheeses/normal-01.png';
  cheese.style = "z-index:4; position:absolute;top:0px; left:0px;";
  cheese.className = "imgPizza";
  pizza.appendChild(crust);
  pizza.appendChild(sauce);
  pizza.appendChild(cheese);
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
function drawPizza(remove, image) {
  var pizza = document.getElementById('pizzaDrawing');  
  if(!remove) {
    var img = document.createElement("img");
    img.className = 'imgPizza';
    img.src = "images/toppings/" + currentToppingsList[currentToppingsList.length - 1].split(' ').join('-').toLowerCase() + "-normal-01.png";
    img.id = currentToppingsList[currentToppingsList.length - 1].split(' ').join('');
    img.style = "z-index:5; position:absolute; top:0px; left:0px; width:" + picWidth + ";height:auto; padding:" + picPadding;
    pizza.appendChild(img);
  }
  else {
    pizza.removeChild(document.getElementById(image));
  }

  if (currentToppingsList.length >= 5) {
    document.getElementById('lblBonus').style = "visibility:visible";
  }
  else{
    document.getElementById('lblBonus').style = "visibility:hidden";
  }
  if (currentToppingsList.length > 0){
    document.getElementById('lblToppings').style = "visibility:visible";
    document.getElementById('yourToppingsList').style = "visibility:visible";
  }
  else{
    document.getElementById('lblToppings').style = "visibility:hidden";
    document.getElementById('yourToppingsList').style = "visibility:hidden";
  }
  updateToppingList();
}
function updateToppingList(){
  var list = document.getElementById('yourToppingsList');
  if(list.children.length != 0) {
    if(currentToppingsList.length > list.children.length) {
      addToYourToppings(currentToppingsList[currentToppingsList.length - 1]);
    }
    else {
      var found = false;
      for(var i = 0; i < currentToppingsList.length; i++) {
        if(currentToppingsList[i] != list.children[i].children[0].innerHTML) {
          removeFromYourToppings(list.childNodes[i]);
          found = true;
        }
      }
      if(!found) {
        removeFromYourToppings(list.childNodes[list.children.length - 1]);
      }
    }
  }
  else {
    addToYourToppings(currentToppingsList[0]);
  }
}
function addToYourToppings(toAdd) {
  var d = document.createElement("div");
  var l = document.createElement('label');
  var s = document.createElement('select');
  d.style = "line-height:30px; vertical-text-align: center; margin-bottom: 5px;"
  l.style = "margin-right:3px";
  s.style = "margin-right:3px";
  var options = ["Regular", "Light", "Double"];  
  s.addEventListener("change", setPrice);
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
  l.innerHTML = (toAdd);
  full.className = 'btnFullPizza';
  left.className = 'btnLeftPizza';
  right.className = 'btnRightPizza';
  full.id = toAdd.split(' ').join('') + 'full';
  left.id = toAdd.split(' ').join('') + 'left';
  right.id = toAdd.split(' ').join('') + 'right';
  full.style = 'background:#0092c5;';
  right.style = 'background:#fff;';
  left.style = 'background:#fff;';
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
function removeFromYourToppings(toRemove) {
  document.getElementById('yourToppingsList').removeChild(toRemove);
}
function resetPizza() {
  var pizza = document.getElementById('pizzaDrawing');  
  while(pizza.hasChildNodes()) {
    pizza.removeChild(pizza.lastChild)
  }
  currentToppingsList = [];
  document.getElementById('lblToppings').style = "visibility:hidden";
  document.getElementById('yourToppingsList').style = "visibility:hidden";
  document.getElementById('lblBonus').style = "visibility:hidden";
  prebuiltTab(null);
  FillPizza();
}

function prebuiltTab(evt) {
  document.getElementById("endOrder").children[0].innerHTML = "Total: $0.00";
  document.getElementById("tabTitle").children[0].innerHTML = "Prebuilt Pizzas";
  document.getElementById("tabTitle").style = "background-image:url('images/misc/presetPizzaBack.jpg');";
  document.getElementById("prebuiltHolder").style.display = "flex";
  document.getElementById("customHolder").style.display = "none";
  document.getElementById("orderBtn").style.display = "none";
  document.getElementById("endOrder").children[0].style.display = "none";
  document.getElementById("pizzaSettings").style.display = "none";  
}
function customizeTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Customize Pizza";
  document.getElementById("tabTitle").style = "background-image:url('images/misc/customizePizzaBack.jpg');";  
  document.getElementById("prebuiltHolder").style.display = "none";
  document.getElementById("customHolder").style.display = "flex";
  document.getElementById("orderBtn").style.display = "flex";
  document.getElementById("orderBtn").style.marginLeft = "auto";
  document.getElementById("pizzaSettings").style.display = "flex";
  document.getElementById("endOrder").children[0].style.display = "flex";  
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
  var x = document.getElementById("selSize").value;
  for(var i = 0; i < document.getElementById("pizzaDrawing").children.length; i++) {
    switch(x) {
      case 'small':
        picWidth = "70%";
        picPadding = "0% 15%";
        document.getElementById("pizzaDrawing").children[i].style.width = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.height = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.padding = picPadding;        
        break;
      case 'medium':
        picWidth = "80%";
        picPadding = "0% 10%";
        document.getElementById("pizzaDrawing").children[i].style.width = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.height = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.padding = picPadding;
        break;
      case 'large':
        picWidth = "90%";
        picPadding = "0% 5%";
        document.getElementById("pizzaDrawing").children[i].style.width = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.height = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.padding = picPadding;        
        break;
      case 'extra':
        picWidth = "100%";
        picPadding = "0% 0%";
        document.getElementById("pizzaDrawing").children[i].style.width = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.height = picWidth;
        document.getElementById("pizzaDrawing").children[i].style.padding = picPadding;        
        break;
    }
  }
  setPrice();
}
function addToPizza(evt) {
  var found = false;
  var removed = "";
  for(var i = 0; i < currentToppingsList.length; i++) {
    if(currentToppingsList[i] == evt.path[1].children[1].innerHTML) {
      found = true;
      removed = currentToppingsList[i].split(' ').join('');
      currentToppingsList.splice(i, 1);
    }
  }
  if(!found) {
    currentToppingsList.push(evt.path[1].children[1].innerHTML)
  }
  drawPizza(found, removed);
  setPrice();
}
function halves(evt){
  var b = evt.target;
  for(var i = 0; i < toppingsList.length; i++) {
    if(b.id == toppingsList[i].split(' ').join('') + "full") {
      document.getElementById(toppingsList[i].split(' ').join('')).src = 'images/toppings/' + toppingsList[i].split(' ').join('-').toLowerCase()
      + '-normal-01.png';
      document.getElementById(toppingsList[i].split(' ').join('') + 'left').style = "background:#FFF;";
      document.getElementById(toppingsList[i].split(' ').join('') + 'right').style = "background:#FFF;";
      b.style = "background:#0092c5;";
    }
    else if(b.id == toppingsList[i].split(' ').join('') + "left") {
      document.getElementById(toppingsList[i].split(' ').join('')).src = 'images/toppings/' + toppingsList[i].split(' ').join('-').toLowerCase()
      + '-left-01.png';
      document.getElementById(toppingsList[i].split(' ').join('') + 'full').style = "background:#FFF;";
      document.getElementById(toppingsList[i].split(' ').join('') + 'right').style = "background:#FFF;";
      b.style = "background:#0092c5;";
    }
    else if(b.id == toppingsList[i].split(' ').join('') + "right") {
      document.getElementById(toppingsList[i].split(' ').join('')).src = 'images/toppings/' + toppingsList[i].split(' ').join('-').toLowerCase()
      + '-right-01.png';
      document.getElementById(toppingsList[i].split(' ').join('') + 'left').style = "background:#FFF;";
      document.getElementById(toppingsList[i].split(' ').join('') + 'full').style = "background:#FFF;";
      b.style = "background:#0092c5;";
    }
  }
}
function addToOrder(evt) {
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
  alert("Thanks for your purchase! That will be " + document.getElementById("endOrder").children[0].innerHTML.substr(7) + "!");

  for(var i = 0; i < toppingsList.length; i++) {
    document.getElementsByClassName("topping")[i].children[0].checked = false;
  }
  for(var j = 0; j < currentToppingsList.length; j++) {
    removeFromYourToppings(document.getElementById("yourToppingsList").lastChild);
  }
  document.getElementById("selSize").value = "medium";
  document.getElementById("selCrust").value = "regular";
  document.getElementById("selCheese").value = "Normal";
  document.getElementById("selSauce").value = "Normal";
  resetPizza();  
}