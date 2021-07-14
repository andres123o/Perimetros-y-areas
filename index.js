let datoPerimetro = document.getElementById("perimetroCuadrado")
let datoArea = document.getElementById("areaCuadrado")
let ladoCuadrado = document.getElementById("ladoCuadrado").value
let resultdoCuadrado = document.getElementById("i");

datoPerimetro.addEventListener("click", (lado) => {
    let ladoCuadrado = document.getElementById("ladoCuadrado").value
    let resultdoCuadrado = document.getElementById("i");
    let resultado = ladoCuadrado * 4 + "cm";
    resultdoCuadrado.innerHTML = `El perimetro es de ${resultado}`;
})

datoArea.addEventListener("click", (lado) => {
    let ladoCuadrado = document.getElementById("ladoCuadrado").value
    let resultdoCuadrado = document.getElementById("i");
    let areaCuadrado = ladoCuadrado * ladoCuadrado;
    resultdoCuadrado.innerHTML = `El area del cuadrado es de ${areaCuadrado} cm^2`
})


let perimetroTriangulo = document.getElementById("CalcularPerimetroTriangulo");
let areTriangulo = document.getElementById("CalcularAreaTriangulo");

perimetroTriangulo.addEventListener("click", () =>{
    let lado = document.getElementById("ladoTriangulos").value
    let base = document.getElementById("BaseTriangulo").value
    let bases = parseInt(base)
    let lados = parseInt(lado)
    let o = document.getElementById("o");
    let resultadoPerimetroTriangulo = (lados*2) + bases; 
    o.innerHTML = `El perimetro del triangulo es de ${resultadoPerimetroTriangulo} cm`
})


areTriangulo.addEventListener("click", () => {
    let altura = document.getElementById("AlturaTriangulo").value
    let base = document.getElementById("BaseTriangulo").value
    let o = document.getElementById("o");
    let resultadoAreaTriangulo = (base * altura)/2;
    o.innerHTML = `El area del triangulo es de ${resultadoAreaTriangulo} cm^2`
})

let perimetroCirculo = document.getElementById("CalcularPerimetroCirculo");
let areaCirculo = document.getElementById("CalcularAreaCirculo");

perimetroCirculo.addEventListener("click", ()=>{
    let radio = document.getElementById("radio").value
    let p = document.getElementById("p")
    let resultadoPerimetroCirculo = 2 * Math.PI * radio
    p.innerHTML = `El perimetro del circulo es de ${resultadoPerimetroCirculo} cm`;
})

areaCirculo.addEventListener("click", () =>{
    let radio = document.getElementById("radio").value
    let p = document.getElementById("p");
    let pi = Math.PI;
    let radioE = radio ** 2
    let resultadoAreaCirculo = pi * radioE;
    p.innerHTML = `El area de circulo es de ${resultadoAreaCirculo} cm^2`
})