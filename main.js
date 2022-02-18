let number1 = parseInt(prompt('Digite el primer digito',1));
let number2 = parseInt(prompt('Digite el segundo digito',1));
let resultado;

console.log( `Valores para operaciones ${number1} & ${number2}` );

resultado = (number1+number2);
console.log('la suma es ' + resultado)

resultado = number1-number2;
console.log('la resta es ' + resultado)

resultado = number1*number2;
console.log('la multiplicación es ' + resultado)

resultado = number1/number2;
console.log('la división es ' + resultado)

resultado = number1%number2;
console.log('el residuo es ' + resultado)

resultado = number1**number2;
console.log('el exponente es ' + resultado)