 //Assignment

 let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


 let oddNumbers = e.filter(function isOdd(t) {
     return t % 2 != 0; 
 });
 
 
 let evenNumbers = e.filter(function isEven(t) {
     return t % 2 == 0; 
 });
 
 console.log("Odd Numbers:", oddNumbers);
 console.log("Even Numbers:", evenNumbers);