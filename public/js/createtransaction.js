const createTransactionHandler = async (event) => {
    event.preventDefault();
    const nameValue = document.querySelector('#transaction-name').value.trim();
    const amountValue = document.querySelector('#transaction-amount').value.trim();
    const typeValue = document.querySelector('input[name="transaction-type"]:checked').value;
    const categoryValue = document.querySelector('input[name="transaction-category"]:checked').value;
    const dueDateValue = document.querySelector('#transaction-duedate').value.trim();
    const frequencyValue = document.querySelector('input[name="transaction-frequency"]:checked').value;
    const endDateValue = document.querySelector('#transaction-enddate').value.trim();

    let data_packet = {
        'name': nameValue,
        'amount': amountValue,
        'due_date': new Date(dueDateValue),
        'frequency': frequencyValue,
        'type': typeValue,
        'end_recurrence': new Date(endDateValue),
        'category_name': categoryValue,
    }

    console.log(`Sending date to server: ${data_packet}`);

    const response = await fetch(`/transaction`, {
        method: 'POST',
        body: JSON.stringify(data_packet),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        console.log(response);
        alert('Failed to create transaction');
    }

}

document.querySelector('#create-transaction-form').addEventListener('submit', createTransactionHandler);








