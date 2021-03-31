function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(5, 7))
//ex1
function inverse(a,b) {
   
    let c
    
    c = a
    b = c
    a = b
    return a
}

console.log(inverse(2,4))
//ex2
var person = {
    nom: "toto",
    age: 30,
    homme:true
}
;



console.log(person.nom);

//ex3
function askNumber() {
    {
  number = parseInt(prompt("Entrez un nombre"));
      
               
  {
 return Math.pow(number, 2);
   }
 }
 } 
//ex4
function somme(nbr1,nbr2) {
   
    
   let sum = nbr1 + nbr2;
   return sum;
    
}
console.log (somme(5,6))
//ex5
function minut(min) {
   
    
sec= min* 60;
   return sec;


}
console.log(minut(1))
//ex6
function plus(x){
   
   
    return ++x ;
    
}
console.log(plus(10))
//ex7
function surface(hauteur,base){
    sur=hauteur*base/2
    return sur;
}
console.log(surface(8,2))
//ex8

let s = 'methlouthisami';
let rev = s.split('').reverse().join('');
console.log(rev);
//ex9

let a=6
let b=1
let c=20

console.log(Math.max(a, b, c));
//ex10

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);