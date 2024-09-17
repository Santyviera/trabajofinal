 function calcularArea( pi,radio){
return `El area del circulo es ${(pi * radio**2)}`;

}
console.log(calcularArea(3.14 ,  40)); 

let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));
let numero4 = parseInt(prompt("ingrese el cuarto numero"));
if(numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4){
    console.log("el numero mayor es : " + numero1)
    
}
else if(numero2 >= numero1 && numero2 >= numero3 && numero2 >= numero4){
    console.log("el numero mayor es :" + numero2)
    
}
else if(numero3 >= numero1 && numero3 >= numero2 && numero3 >= numero4){
    console.log("el numero mayor es :" + numero3)
    
}else{
console.log("el numero mayor es : " + numero4)

}

let num1, num2, num3, t, menor;
num1 = parseInt(prompt("ingrese el primer numero :"));
num2 = parseInt(prompt("ingrese el segudno numero :"));
num3 = parseInt(prompt("ingrese el tercer numero :"));
if(num1 < num2){
    t = num1;
}else{
    t = num2;
}
if(t < num3){
    menor = t;
}else{
    menor = num3;
}
console.log("El numero menor es :" + menor);




let numero;
numero = prompt("introducir numero")
if(numero % 2 == 0){
    console.log("el numero" + "es par");
}else{
    console.log("el numero" + numero + "es impar");
    
} */


    var nom;
    nom=prompt ("escribe  tu nombre", "nombre");
    alert("mucho gusto" + nom);

