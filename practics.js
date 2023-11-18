var fruits = ['Apple', "Banana", 'Orange']

fruits[1] = "Mango"
fruits.pop()
fruits.push('Watermelon')
// console.log(fruits)

var index = fruits.indexOf('Banana')
// console.log(index)

var total = 85;
var toms = 66;
var janes = 95;
var peters = 56;
var johns = 40 ;

if (total > 80){
    console.log('A grade') 
} 

else {
    console.log('F grade')
}

var num = 13;
var num2 = 79;
var num3 = 45;

if(num < num2 && num2 > num3){
    // console.log(`${num2}`)
}
 else if(num < num2 && num2 < num3){
    // console.log(`${num3}`)
 }
   else{
    // console.log(`${num}`)
   }

// you are given three numrs 13 79 and 45 write a program that will


// you are given  a triangle with the sides 9, 8, 9 write program ti check whether atriangle is isosceles or not using if-else
//  isosceles => tow sides are equal
var first = 9;
var second = 8;
var third = 9;

if( first == second || first == third || second == third){
    console.log('soman')
}
 else{
    console.log('not ey soman')
 }