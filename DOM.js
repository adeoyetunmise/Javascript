const register = document.querySelector('#register');
const message = querySelector('.msg');
const info = document.querySelector('#info');
const name = document.querySelector('#name');

register.computedStyleMap.color = 'red'

message.innerText = 'Please input your valid information'

const bgs = ['#ccc','#333', '#666', '#999', '#000'];

info.addEventListener('click', function(){
    const bg =bgs[Math.floor(math.random() * bgs.length)];
    console.log(Math.floor(math.random() * bgs.length));
    

    info.style.backgroundColor = bg;
})

name.addEventListener('keyup', function(){
    info.innerHTML = name.value;
})