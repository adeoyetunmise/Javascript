 // Toggle for mobile view
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 let balance = 3000;

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



function transfer() {
    const sendMoney = parseInt(prompt('Enter amount'));

    if(sendMoney <= balance){
       balance= balance-sendMoney
       alert(`You have successfully transfered ${sendMoney} and your balance is ${balance}`)
    }else {
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


    function airtimeRecharge() {
        const amount = parseInt(prompt('Enter amount'));
    
        if(amount <= balance) {
            alert(`${amount} has been added to your account`)
        }else{
            alert('Insufficient Balance')
        }
    }


 function checkBalance(){
    alert(`Your balance is ${balance}`)
 }

 
