const message = document.querySelector('.msg');
const task = document.querySelector('#task');
const form = document.querySelector('#task-form');
const info = document.querySelector('#info');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (task.value !== ""){
        const li = document.createElement('li');
        li.innerHTML = `${task.value} <button class="delete">X</button>`
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