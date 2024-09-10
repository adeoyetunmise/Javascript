let balance = 3000;
const pin = 1234;

function allServices() {const service = prompt('Enter the service you want to use: \n1. Check Balance\n2. Buy Data\n3. migrate\n4. Transfer\n5. Airtime Recharge\n6. Borrow Airtime');

switch(service) {
    case '1':
        checkBalance();
        break;
    case '2':
        buyData();
        break;
    case '3':
        migrate();
        break;
    case '4':
        transfer();
        break;
    case '5':
        airtimeRecharge();
        break;
    case '6':
        borrowAirtime();
        break;
    default:
        alert('Invalid input')
}}

function checkBalance() {
    alert(`Your balance is ${balance}`)
}

function buyData() {
    const amount = parseInt(prompt('Enter amount'));

    if(amount <= balance){
        balance= balance-amount
        alert(`Your data purchase of ${amount} naira data was successful,
            Your new balance is ${balance}`);
}else {
    alert('Insufficient balance')
}

}

function migrate() {
    const option = prompt('Choose another plan:\n1. Berekete\n2. MTN pulse\n3. MTN Betatalk.')

    switch(option){
        case '1':
            alert('You have successfully migrated to Berekete. ');
            break;
        case '2':
            alert('You have successfully migrated to MTN Pulse. ');
            break;
        case '3':
            alert('You have successfully migrated to MTN Betatalk. ');
            break;
        default:
            alert('exit')
    }
    
}

function transfer() {
     const sendMoney = parseInt(prompt('Enter amount'));

     if(sendMoney <= balance){
        balance= balance-sendMoney
        alert(`You have successfully transfered ${sendMoney} and your balance is ${balance}`)
     }else {
        alert('Insufficient Balance')
     }
}

function airtimeRecharge() {
    const amount = parseInt(prompt('Enter amount'));

    if(amount <= balance) {
        alert(`${amount} has been added to your account`)
    }else{
        alert('Insufficient Balance')
    }
}

function borrowAirtime() {
    const amount = prompt('choose amount:\n1. 100 \n2. 200 \n3. 300');

    switch(amount){
        case '1':
         alert(`100 naira has been added to your account, your new balance is ${balance + 100}`);
        break;
        case '2':
        alert(`200 has been added to your account`);
        break;
        case '3':
        alert(`300 has been added to your account`);
        break;
    }

       
    }

