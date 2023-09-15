let numSegmentos = 8; // Número de segmentos iniciales
let numRepetitions = 6; // Número de repeticiones iniciales
let numCopias = 5; // Número de copias
let sliderSegmentos;
let sliderRepetitions;
let sliderCopias;

function setup() {
  createCanvas(1500,850);
  
  // Crea un deslizador (slider) para controlar el número de segmentos
  sliderSegmentos = createSlider(4, 20, numSegmentos); // Rango de valores: 4 a 20, valor inicial: 8
  sliderSegmentos.position(10, height + 10);
  sliderSegmentos.style('width', '380px');
  // Crea un deslizador (slider) para controlar el número de repeticiones
  sliderRepetitions = createSlider(1, 10, numRepetitions); // Rango de valores: 1 a 10, valor inicial: 6
  sliderRepetitions.position(10, height + 40);
  sliderRepetitions.style('width', '380px');
  
  // Crea un deslizador (slider) para controlar el número de copias
  sliderCopias = createSlider(1, 10, numCopias); // Rango de valores: 1 a 10, valor inicial: 5
  sliderCopias.position(10, height + 70);
  sliderCopias.style('width', '380px');
}

function draw() {
  background(0); // Establece el fondo en negro
  
  stroke(255); // Establece el color de trazo en blanco
  
  // Obtiene el valor de los deslizadores para establecer el número de segmentos, repeticiones y copias
  numSegmentos = sliderSegmentos.value();
  numRepetitions = sliderRepetitions.value();
  numCopias = sliderCopias.value();
  
  // Calcula el ángulo entre los segmentos
  let angulo = TWO_PI / numSegmentos;
  
  // Dibuja múltiples copias del patrón
  for (let k = 0; k < numCopias; k++) {
    push();
    translate(width / 2, height / 2);
    rotate(TWO_PI / numCopias * k);
    let radio = map(k, 0, numCopias - 1, 20, 100); // Asigna diferentes tamaños según la copia
    for (let j = 0; j < numRepetitions; j++) {
      push();
      rotate(TWO_PI / numRepetitions * j);
      for (let i = 0; i < numSegmentos; i++) {
        let x1 = cos(angulo * i) * radio;
        let y1 = sin(angulo * i) * radio;
        let x2 = cos(angulo * (i + 1)) * radio;
        let y2 = sin(angulo * (i + 1)) * radio;
        line(x1, y1, x2, y2);
      }
      pop();
    }
    pop();
  }
}
