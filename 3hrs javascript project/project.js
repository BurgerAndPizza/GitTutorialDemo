const form = document.querySelector('form');
const container = document.querySelector('.container');

const loadExpenses = () => JSON.parse(localStorage.getItem('expenses')) ;
const saveToLocalStorage = expenses => localStorage.setItem('expenses', JSON.stringify(expenses));

const createExpenseElement = (amount, category, description) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = amount + '-' + category + '-' + description + ' <button class="delete-btn">Delete expense</button> <button class="edit-btn">Edit expense</button>';
    return newLi;
};

loadExpenses().forEach(({ amount, category, description }) => {
    container.appendChild(createExpenseElement(amount, category, description));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const amount = document.getElementById('expenseamount').value;
    const description = document.getElementById('description').value;
    const category = document.querySelector('select').value;

    const newLi = createExpenseElement(amount, category, description);
    container.appendChild(newLi);

    saveToLocalStorage([...loadExpenses(), { amount, category, description }]);

    document.getElementById('expenseamount').value = '';
    document.getElementById('description').value = '';
});

container.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentElement;
        container.removeChild(listItem);
        saveToLocalStorage([...loadExpenses()]);
    }
});