// Circulo
let radiusCirculo = document.getElementById("circulo_input");
let buttonCirculo = document.getElementById("calcular_circulo");

function calcularCirculo(radiusCirculo) {
    const PI = 3.14;
    let pCirculo = 2 * PI * radiusCirculo; 
    let aCirculo = PI * radiusCirculo ** 2; 
    return  `El perimetro es ${pCirculo.toFixed(2)} y el area es ${aCirculo.toFixed(2)}`;
}

buttonCirculo.addEventListener("click", ()=> {
    document.getElementById('result_circulo').innerText  = calcularCirculo(radiusCirculo.value);
});

// Triangulo
let bordeTriangulo = document.getElementById("triangulo_input");
let buttonTriangulo = document.getElementById("calcular_triangulo");

function calcularTriangulo(bordeTriangulo) {
    let pTriangulo = 3 * bordeTriangulo;
    let aTriangulo = (bordeTriangulo * ((bordeTriangulo * (3 ** (1/2))) / 2)) / 2;
    return  `El perimetro es ${pTriangulo.toFixed(2)} y el area es ${aTriangulo.toFixed(2)}`;
}

buttonTriangulo.addEventListener("click", ()=> {
    document.getElementById('result_triangulo').innerText  = calcularTriangulo(bordeTriangulo.value);
})

// Cuadrado
let bordeCuadrado = document.getElementById("cuadrado_input"); 
let buttonCuadrado = document.getElementById("calcular_cuadrado");

function calcularCuadrado(bordeCuadrado) { 
    let pCuadrado = 4 * bordeCuadrado;
    let aCuadrado = bordeCuadrado ** 2;
    return  `El perimetro es ${pCuadrado.toFixed(2)} y el area es ${aCuadrado.toFixed(2)}`;
};

buttonCuadrado.addEventListener("click", ()=> {
    document.getElementById('result_cuadrado').innerText = calcularCuadrado(bordeCuadrado.value);
});

// Rectangulo
let borderRectangulo1 = document.getElementById("rectangulo_input1");
let borderRectangulo2 = document.getElementById("rectangulo_input2");
let buttonRectangulo = document.getElementById("calcular_rectangulo");

function calcularRectangulo(borderRectangulo1, borderRectangulo2) {
    let pRectangulo = (borderRectangulo1 * 2) + (borderRectangulo2 * 2);
    let aRectangulo = borderRectangulo1 * borderRectangulo2;
    return `El perimetro es ${pRectangulo.toFixed(2)} y el area es ${aRectangulo.toFixed(2)}`;
}

buttonRectangulo.addEventListener("click", ()=> {
    document.getElementById('result_rectangulo').innerText = calcularRectangulo(borderRectangulo1.value, borderRectangulo2.value);
});
