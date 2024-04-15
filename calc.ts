// class number_square {  
//     x: number;  
//     constructor(x: number) {  
//      this.x = x;  
//     }

//     square() {  
//      return this.x * this.x;  
//     }  
// }

// var s = new number_square(5); 
// console.log(s.square);  


function squareIt(number) {
    return number * number;
 }

console.log(squareIt(5));


const areaTriangle = (base: number, height: number) =>  0.5 * base * height;

console.log(areaTriangle(5, 3));