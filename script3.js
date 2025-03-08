let btn = document.querySelector('.btn')
let txt_input = document.querySelector('.povidom')
let age_input = document.querySelector('.age-input')
let message = document.querySelector('.message')


btn.addEventListener('click', function () {
    let age = age_input.value
   
        
    if ( age <= 2025 , age > 1971
    ) {
        message.innerHTML = 'Заявка на прийнятті '
     message.style.color = 'black'
         message.style.fontSize = '20px'
    }
     else {
        message.innerHTML = 'Винекла помилка :('
        message.style.color = 'black'
         message.style.fontSize = '20px'
        
    }
})
