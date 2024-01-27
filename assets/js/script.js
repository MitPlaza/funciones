function pintar(elemento, color){
    elemento.style.backgroundColor = color
}



const ele = document.getElementById("azul")
ele.addEventListener("click", () => pintar(ele, color = "black"));
const ele1 = document.getElementById("rojo")
ele1.addEventListener("click", () => pintar(ele1, color = "black"));
const ele2 = document.getElementById("verde")
ele2.addEventListener("click", () => pintar(ele2, color = "black"));
const ele3 = document.getElementById("amarillo")
ele3.addEventListener("click", () => pintar(ele3, color = "black"));
    

const base = document.querySelector('#base')

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
    return base.style.backgroundColor = "pink"

    } else if (event.key === 's') {
        return base.style.backgroundColor = "orange"

    } else if (event.key === 'd') {
        return base.style.backgroundColor = "skyblue"
    }
    })
    

    const contenedor = document.getElementById('marco')

    document.addEventListener('keydown', (e) => {
        if (e.key === 'q') {
            
            const nuevoDiv = document.createElement('div');
            nuevoDiv.style.width = '200px';
            nuevoDiv.style.height = '200px';
            nuevoDiv.style.backgroundColor = 'purple';
            // Agregar un elemento al DOM
            contenedor.appendChild(nuevoDiv);
        
         } else if(e.key === 'w'){
            const nuevoDiv2 = document.createElement('div');
            nuevoDiv2.style.width = '200px';
            nuevoDiv2.style.height = '200px';
            nuevoDiv2.style.backgroundColor = 'gray';
            // Agregar un elemento al DOM
            contenedor.appendChild(nuevoDiv2);

         } else if(e.key === 'e'){
            const nuevoDiv3 = document.createElement('div');
            nuevoDiv3.style.width = '200px';
            nuevoDiv3.style.height = '200px';
            nuevoDiv3.style.backgroundColor = 'brown';
            // Agregar un elemento al DOM
            contenedor.appendChild(nuevoDiv3);
         }
    })

   
    
  
    

 

