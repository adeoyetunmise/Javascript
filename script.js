// alert("Hello World")

// document.write("<h1>Hello World</h1>")

// const happy = confirm("Are you happy?")

// if(happy){
//     console.log("We are happy");
    
// }else{
//     console.log("we need money");
    
// }

// const balance = 3000

// const trans = parseInt(prompt("Enter the amount to transfer"))

// if(trans <= balance){
//     console.log("Transaction Successful");
    
// }else {
// console.log("Insufficient balance");

// }

// const age = parseInt(prompt("Enter your age: "))

// if (age > 40){
//     alert("you are too old for the bootcamp");
// }else if(age < 40 && age >= 30){
//     alert("you are welcome, you belong to the senior men section")
// }else if (age < 30 && age >= 20){
//     alert("you are welcome, you belong to the gunners")
// }else if(age < 20 && age >= 15){
//     alert("you are welcome, you belong to the junior men section")
// }else {
//     alert('you are too young for the bootcamp')
// }

// Switch Statement


    const num = prompt("Welcome to our network, \n Please select a number\n1. Check Balance\n2. Buy Airtime\n3. Buy Data")

    switch (num) {
        case '1':
            alert("Your balance is N50,000");
            break;
        case '2':
            alert("Airtime purchased successfully");
            break;
        case '3':
            alert('Data purchased successfully');
            break;
        default:
            alert("Invalid Input")
    }
