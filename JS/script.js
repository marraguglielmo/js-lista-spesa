const lista = [
    'pomodori',
    'latte', 
    'tarallini', 
    'biscotti', 
    'acqua', 
    'peperoni', 
    'carne', 
    'birra'
    ];

    const btn = document.querySelector('.btn');
    let counter = 0;
    
    btn.addEventListener('click', function(){
        const ul = document.querySelector('.list');

        while(counter < lista.length){
            
            ul.innerHTML += `<li>${lista[counter++]}</li>`
            
            
        }
    })