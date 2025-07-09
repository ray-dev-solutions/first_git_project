const title = document.querySelector('h1')
const btn = document.querySelector('button')

title.addEventListener('click', function(){
    this.style.color = 'blue'
    alert('you just change title color! Great Job!')
})

btn.addEventListener('click', function(){
    this.style.width = '100%'
})