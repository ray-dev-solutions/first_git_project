const title = document.querySelector('h1')
title.addEventListener('click', function(){
    this.style.color = 'blue'
    alert('you just change title color! Great Job!')
})