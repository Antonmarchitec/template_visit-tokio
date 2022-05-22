let number_one = document.querySelector("#number_one")
let number_two = document.querySelector("#number_two")
let number_three = document.querySelector("#number_three")
let number_four = document.querySelector("#number_four")
let number_five = document.querySelector("#number_five")


document.addEventListener('click', (e) =>{
    //console.log(e.target)
    if(e.target.id === "number_one"){
        console.log("le diste a uno")
        number_one.classList.add("number_one_JS")
    }else if(e.target.id === "number_two"){
        console.log("le diste a dos")
        number_two.classList.add("number_two_JS")
    }
})