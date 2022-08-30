let numbers = prompt('введите число')
let btn = document.getElementsByTagName('button')
let title = document.getElementById('title')

btn[0].addEventListener('click', function(){
    title.innerHTML =(Math.floor(Math.random() * numbers))
})
