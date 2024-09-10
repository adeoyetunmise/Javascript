//  While Loop

// let x = 0

// while(x < 1000){
//     console.log(x+1, "i am happy")
//     x++
    
// }

// do{
//     console.log("i ran");
    
// }while(x < 10)


// const pin = "1234"
// let userPin
// let y = 0

// do {
//     userPin = prompt("Enter pin:")
//     y++
//     if(y===3 && userPin !== pin){
//         alert('too many trials')
//     }
// } while (userPin != pin && y < 3)


//  for loop
// for (x = 1; x <= 10; x++){
//     console.log(x, 'I ran');
    
// }

// // Using Array in for loop

// const numb = [45,76,45,23,89,45]
// console.log(numb);

// for (i =0; i < numb.length; i++){
//     console.log(numb[i]);
    
// }

// // using while loop

// let y = 0;

// while (y < numb.length){
//     console.log(numb[y]);
//     y++
// }


for(i = 1; i <= 10; i++){

    if(i % 2){
        console.log(i, "This is odd");
    }else{
        console.log(i, "This is even");
       
    }  
    
}

// Array Methods

const arr = [10,20,30,40,50,60,70,80,90]

// arr.unshift(5)

// const ar2 =arr.slice(2,3)

arr.splice(2, 1, 35)

console.log(arr);
// console.log(ar2);



