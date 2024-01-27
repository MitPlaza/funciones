// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);
    


function pintar(elemento, color = "green"){
    elemento.style.backgroundColor = color
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, color = "yellow"));






















    // const valor1 = document.getElementById('valor1')

// valor1.addEventListener('blur', () => {    
//     console.log(valor1.value)
// })