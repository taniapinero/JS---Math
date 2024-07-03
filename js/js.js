let inputMostrado=false; // Controla si existe un input en pantalla
let entrada=document.querySelector("#entrada");
let salida=document.querySelector("#salida");

window.onload=()=>{
    document.querySelector("#valorAbs").addEventListener("click", valorAbs);
    document.querySelector("#enteroSup").addEventListener("click", enteroSup);
    document.querySelector("#expo").addEventListener("click", expo);
    document.querySelector("#max").addEventListener("click", max);
    document.querySelector("#min").addEventListener("click", min);
    document.querySelector("#redondeo").addEventListener("click", redondeo);
    document.querySelector("#raizC").addEventListener("click", raizC);
    document.querySelector("#truncar").addEventListener("click", truncar);
}

// Crear el input 1
function crearInput1() {
    let input=document.createElement("input");
    input.setAttribute("id", "input1");
    input.setAttribute("placeholder", "Escribe un número");
    entrada.appendChild(input);
}

// Crear el input 2
function crearInput2() { 
    let input=document.createElement("input");
    input.setAttribute("id", "input2");
    input.setAttribute("placeholder", "Escribe un número");
    entrada.appendChild(input);
}

//Borrar input
function borrarBoton() {
    document.querySelector(".boton").remove();
    
}

// Crear el boton
function crearBoton() {
     let boton=document.createElement("button");
     boton.setAttribute("id", "calcular");
     boton.classList.add("boton");
     boton.textContent="Calcular";
     entrada.appendChild(boton);
}


// Crear todo
function crearInputs(numeroInputs) {
    if (inputMostrado) { //No hay ni input ni boton en pantalla
        salida.innerHTML="";
        document.querySelector("#input1").remove();

        if (document.querySelector("#input2")) {
            document.querySelector("#input2").remove();
        }
        borrarBoton();
        inputMostrado=false;
    }

        if (!inputMostrado) {
            //Enviar a crear las entradas de input y botón
            entrada.style.visibility="visible"; // El div se empieza a mostrar

            crearInput1();

            if (numeroInputs===2) {
                crearInput2();
            }

            crearBoton();
            inputMostrado=true;
        }
}

/*********** */

function valorAbs() {
    crearInputs(); 
    document.querySelector("#calcular").addEventListener("click", () => { // So pulsa click en el botón de calcular
        // 1. Leer lo que contiene el input
        let numero=document.querySelector("#input1").value;

        if (validar(numero)) {
            salida.textContent="El valor absoluto de " + numero + " es " + Math.abs(numero);
        }
    })
}


function enteroSup() {
    crearInputs(); 
    document.querySelector("#calcular").addEventListener("click", () => { // So pulsa click en el botón de calcular
        // 1. Leer lo que contiene el input
        let numero=document.querySelector("#input1").value;

        if (validar(numero)) {
            salida.textContent="El entero superior de " + numero + " es " + Math.ceil(numero);
        }
    })
}


function expo() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () => { 

        let base=document.querySelector("#input1").value;
        let exp=document.querySelector("#input2").value;

        if (validar(base) && validar(exp)) {
            salida.innerHTML="El resultado de " + base + "<sup>" + exp + "</sup> es " + Math.pow(base,exp);
        }
})
}


function max() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () => { 

        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;

        if (validar(numero1) && validar(numero2)) {
            salida.innerHTML="El mayor entre " + numero1 + " y " + numero2 + " es " + Math.max(numero1,numero2);
        }
})
}


function min() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click", () => { 

        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;

        if (validar(numero1) && validar(numero2)) {
            salida.innerHTML="El menor entre " + numero1 + " y " + numero2 + " es " + Math.min(numero1,numero2);
        }
})
}


function redondeo() {
    crearInputs(); 
    document.querySelector("#calcular").addEventListener("click", () => { 
        // 1. Leer lo que contiene el input
        let numero=document.querySelector("#input1").value;

        if (validar(numero)) {
            salida.textContent="El número redondeado de " + numero + " es " + Math.round(numero);
        }
    })
}


function raizC() {
    crearInputs(); 
    document.querySelector("#calcular").addEventListener("click", () => { 
        
        let numero=document.querySelector("#input1").value;

        if (validar(numero)) {
            salida.textContent="La raiz cuadrada de " + numero + " es " + Math.sqrt(numero).toFixed(3); //toFixed(num) muestra ese número de decimales
        }
    })
}
function truncar() {
    crearInputs(); 
    document.querySelector("#calcular").addEventListener("click", () => { 
        
        let numero=document.querySelector("#input1").value;

        if (validar(numero)) {
            salida.textContent="El entero de " + numero + " es " + Math.trunc(numero);
        }
    })
}

function validar(numero) { // is not a number isNaN (número) devuelve true si se cumple
    if (isNaN(numero)) {
        salida.textContent="La operación no se puede realizar";
        return false;
    }else{
        return true;
    }
}




