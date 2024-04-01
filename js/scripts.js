function sayHello(name) {
  const greeting = "Hola" + name;
  console.log(greeting);
}

sayHello("Tiffany");

function calculateSquareArea(side) {
  const area = side * side;
  console.log(area);
}

calculateSquareArea(4);

function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  console.log(area);
}

calculateTriangleArea(10, 5);

function calculateCircleArea(radius) {
  const area = radius * radius * 3.14;
  console.log(area);
}
calculateCircleArea(36);

function celsiusToFahrenheit(celsius) {
  const result = celsius * 1.8 + 32;
  console.log(result);
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(fahrenheit) {
  const result = (fahrenheit - 32) / 1.8;
  console.log(result);
}
fahrenheitToCelsius(77);

function totalPrice(price) {
  const result = price * 0.21 + price;
  console.log(result);
}
totalPrice(20);

function writeMessage(name, material, size, note) {
  const sentence =
    name + " ha pedido una caja de " + material + " de " + size + '. ' + note;
  console.log(sentence);
}
writeMessage('El departamento de atención al cliente','papel','A4', 'Rocio');
