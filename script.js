var prebuiltPizza = document.getElementsByClassName("pizzaTab")[0];
var customizePizza = document.getElementsByClassName("pizzaTab")[1];

prebuiltPizza.addEventListener("click", prebuiltTab);
customizePizza.addEventListener("click", customizeTab);

function prebuiltTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Prebuilt Pizzas";
  document.getElementById("prebuiltHolder").style.display = "flex";
  document.getElementById("orderBtn").style.display = "none";
  document.getElementById("checkoutBtn").style.marginLeft = "auto";
  document.getElementsByClassName("pizzaTab")[1].children.style.display = "none";
  document.getElementsByClassName("pizzaTab")[1].children[0].style.display = "flex";
}

function customizeTab(evt) {
  document.getElementById("tabTitle").children[0].innerHTML = "Customize Pizza";
  document.getElementById("prebuiltHolder").style.display = "none";
  document.getElementById("orderBtn").style.display = "flex";
  document.getElementById("orderBtn").style.marginLeft = "auto";    
  document.getElementById("checkoutBtn").style.marginLeft = "2%";  
  document.getElementsByClassName("pizzaTab")[1].children.style.display = "flex";
}