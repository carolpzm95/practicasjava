//1.algoritmo para imprimir numeros del 1 al 10//ciclo para
for(let i=1; i<11; i++){
    console.log(i);
}
//2.algoritmo para calcular la suma de los 10 numeros
let suma=0
for(let i=1;i<=10;i++){
    suma+=i
}
console.log("la suma de los 10 numero es:"+suma)
//3.algoritmo para generar la tabla del 7
const tabla=7
for(leti=1;i<=10;i++){
    console.log(tabla+'x'+'i'+i')
}
//4.algoritmo para contar ocurrencias del 'a'en un texto
const texto = 'javaScript es un lenguajr de programacion ampliamente utilizado';
let contador = 0;
for(let i = 0; i < texto.length; i++) {
    if(texto[i].toLowerCase() === 'a') {
        contador++;
    }
}
console.log(contador);

//5.algoritmo para calcular el factorial de un numero
const numero=5
let factorial=1
for(let i=1;i<=numero;i++){
    factorial*i
}
console.log('el factorial de:'+numero+'es:'+factorial);

//6.escribe una funcion que reciba un array de numeros y devuelve un nuevo array de números y devuelva un array que contenga solo los numeros pares
let numeros=[4,3,6,7,1,9,10,345,234,568,4,10,20]
function damepares(Array){
let arrayPares=[];
for(let i=0;i<=numeros.length;i++){
    if(numeros[i]%2===0){
        arrayPares.push(numeros[i]);
    }
}
return arrayPares;
}
let arrayNuevo=damepares(numeros);
console.log(arrayNuevo);
// 7. desarrolla uan funcion que encuentre y devuelva el número mas grande de un array utilizand u nciclo for
let numero[4,5,2,3,8,10,3,4,7]
function damemayor (array){
    let arraymayor=0;
    for(let i=0; i<=array.length;++){
        if(array[i]>array[i+1]){
            numeroMayor=array[i];
        }
    }
    return
}
//8. escribe una funcion que calcule la media aritmetica(promedio) de los numeros en un array//
let nmeros=[4,5,2,3,8,9,10,6];
function promedio (){
    let acumulador=0;
    for(let i=0;i<=numeros.length;i++){
        acumulador+=numeros[i];
    }
    let promedio=acumulador/numeros.length;
}

//9.Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
   function Fibonacci(N){
    let a=0;
    let b=1;
    let serie=[];

    for(let i=0;1<N;i++){
        serie.push(a);
        let siguiente=a+b;
        a=b;
        b=siguiente;
    }
    return serie;
   }
   //10.Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
    function TablaMultiplicar(numero){
        let total=0;
        for(let i=1;i<=10;i++{
            let resultado=numero*i;
            console.log(numero+ "x"+i+"="+resultado);
            total+=resultado;
        }
        console.log("el total de la tabla del" +numero+ "es"+ total);

    }
    let numero=5;
    TablaMultiplicar(numero);