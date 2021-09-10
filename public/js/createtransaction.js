console.log("infile");
const name = document.querySelector('#transaction-name').value.trim();
const amount = document.querySelector('#transaction-amount').value.trim();
const type = document.querySelector('input[name="transaction-type"]:checked').value;
const category = document.querySelector('#transaction-category').value.trim();
const dueDate = document.querySelector('#transaction-duedate').value.trim();
const frequency = document.querySelector('input[name="transaction-frequency"]:checked').value;
const endDate = document.querySelector('#transaction-enddate').value.trim();

const createTransactionHandler = async (event) => {
    event.preventDefault();
    console.log("infunction");
    const transactionObj = document.querySelector('#create-transaction-form').dataset.id;

    if (name & amount & type & category & dueDate & frequency & endDate) {
        const response = await fetch(`/transaction/create/${transactionObj.id}`, {
            method: 'POST',
            body: JSON.stringify({ name, amount, type, category, dueDate, frequency, endDate }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create transaction');
        }
    };

}

document.querySelector('#create-transaction-form').addEventListener('submit', createTransactionHandler);







