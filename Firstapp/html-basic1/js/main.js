function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value * price );
    alert("Fizetenőd: " + amount + "Ft");

}

//      Parent elem kezelése
let alertCloseButtons = document.querySelectorAll(".close[data-dissmiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click",alertCloseEventHandlerFunction);
}

//Select elem kitöltése.
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
    
}