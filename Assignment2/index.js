
function sub(){

    var input1 = document.getElementById('firstname').value
    var input2 = document.getElementById('lastname').value
    var input3 = document.getElementById('email').value
    var input4 = document.getElementById('number').value
    var input5 = document.getElementById('address').value
    var input6 = document.getElementById('age').value


    disp.innerHTML =`
    <h1 style="color:#00bfff">USER DETAILS</h1>
    <h3> Firstname: ${input1}</h3>
    <h3> Lastname: ${input2}</h3>
    <h3> Email: ${input3}</h3>
    <h3> PhoneNumber: ${input4}</h3>
    <h3> Address: ${input5}</h3>
    <h3> Age: ${input6}</h3>`


    firstname.value =""
    lastname.value = ""
    email.value = ""
    number.value = ""
    address.value = ""
    age.value = ""

}