
let btn = document.querySelector('.vidprav')
let container = document.querySelector(".hh")
let btntwo = document.querySelector('.texto')
let btnthree = document.querySelector('.texti')



btn.addEventListener('click', function() {

    let pov = document.querySelector(".povidom").value


let newElement = document.createElement("h1")
newElement.innerHTML= pov
container.append(newElement)
let newBr = document.createElement("br")
container.append(newBr)

newElement.style.color = "rgb(0, 39, 36)"
newElement.style.marginLeft = "5px"
newElement.style.backgroundColor = "aliceblue"
newElement.style.borderRadius = "3px"
newElement.style.border = "2px solid #8C58E0"
newElement.style.padding = "3px"
newElement.style.display = " inline-block"



})




btntwo.addEventListener('click', function() {
btntwo.style.color = "#39ff75"
   btnthree.style.color = "#8e95f7"
container.style.textAlign = "left"

    })

   btnthree.addEventListener('click', function() {
    
    container.style.textAlign = " right"
    btnthree.style.color = "#39ff75"
   btntwo.style.color = "#8e95f7"

    })
