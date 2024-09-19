const message = document.querySelector('.msg');
const task = document.querySelector('#task');
const form = document.querySelector('#task-form');
const info = document.querySelector('#info');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (task.value !== ""){
        const li = document.createElement('li');
        li.innerHTML = `${task.value}  
        <button class="delete">X</button>`
        li.classList.add('task');

        li.addEventListener('click', function (){
            li.classList.toggle('completed')
        })

        info.appendChild(li);
        message.innerText = ''
        task.value = ''


        const del = li.querySelector('.delete')
        del.addEventListener('click', function () {
            info.removeChild(li)

        })

    }else{
        message.innerText = `Please enter a task!! `
        message.style.color = 'red';
    }
})

form.addEventListener('reset', function (e){
    e.preventDefault()

    if(task.value !== ""){
        task.value = ""
    }
})

// fetching from API and mapping through
const user = document.querySelector('#users')
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    console.log(data)
    const users = data.map(dataElement => {
        return `<li>${dataElement.name}, ${dataElement.email}</li>`
    })

    user.innerHTML = users
})
.catch(err => console.log(err));


// async and await
// const fetchUsers = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data);
        
//         const users = data.map(dataElement => {
//             return `<li>${dataElement.name}, ${dataElement.email}</li>`
//         })
    
//         user.innerHTML = users
//     }catch(error){
        

//     };
    
// }
// fetchUsers()