// 1. Select all our elements
const expenseForm = document.getElementById('expense-form');
const itemNameInput = document.getElementById('item-name');
const itemAmountInput = document.getElementById('item-amount');
const itemCategoryInput = document.getElementById('item-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

// 2. The "Brain" of our app - The Array
let expenses = [];

// 3. The "Add" Function
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop page refresh

    // Create the Object
    const newExpense = {
        id: Date.now(),
        name: itemNameInput.value,
        amount: Number(itemAmountInput.value),
        category: itemCategoryInput.value
    };

    // Add to Array
    expenses.push(newExpense);

    // Clear inputs and Refresh the UI
    expenseForm.reset();
    renderExpenses();
});

// 4. The "Factory" Function (Draws the list)
function renderExpenses() {
    expenseList.innerHTML = ""; // Clear the list first
    let total = 0;

    expenses.forEach((expense) => {
        total += expense.amount;

        // Create the card
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${expense.name}</strong> (${expense.category})</span>
            <span>$${expense.amount} 
                <button onclick="deleteExpense(${expense.id})">Delete</button>
            </span>
        `;
        expenseList.appendChild(li);
    });

    totalAmountDisplay.innerText = total;
}

// 5. The "Delete" Function
function deleteExpense(id) {
    // Filter out the item with the matching ID
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
}