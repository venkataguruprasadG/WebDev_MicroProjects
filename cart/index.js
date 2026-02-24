const buttons = document.querySelectorAll('.add-to-cart');
const cartList = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total-price');
const clearButton = document.getElementById('btn-clear');

let total = 0;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const name = btn.getAttribute('data-name');
        const price = Number(btn.getAttribute('data-price'));



        total = total + price;

        if (total >= 100) {
            let totalDiscount = total * 0.9;

            totalDisplay.innerText = totalDiscount + "(10% Discount Applied.)"

            totalDisplay.style.color = 'green';
        } else {
            totalDisplay.innerText = total;
            totalDisplay.style.color = 'black';
        }
        const item = document.createElement('li');
        item.innerText = name + "- $" + price;
        cartList.appendChild(item);
    });
});

clearButton.addEventListener('click', function () {
    total = 0
    totalDisplay.innerText = 0
    cartList.innerHTML = "";
});