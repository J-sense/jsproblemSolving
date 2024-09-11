
// // Leap Year Calculate

// const year = 2000;

// if (year % 400 === 0) {
//     console.log(year + " is a leap year.");
// } else if (year % 100 === 0) {
//     console.log(year + " is not a leap year.");
// } else if (year % 4 === 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

// //  que no 2 : Given a string , reverse each word in the sentence;

// let quata="Amar shonar bangla ami tomai vlobashi"
// console.log(quata.split(" "))
// quata.split("").map((singlequata)=>{
//     return console.log(singlequata.split("").reverse().join())
// })


// // Que no 3: How to check if an object is an array or not?

// function checkAray(elam){
//     return Array.isArray(elam)
// }
// // const isarray = (checkAray([]))
// const isarray =(checkAray({}))
// console.log(typeof isarray)


// // Que no 4 : How to empty an array in Javascript? do no rest it to a new array, and do not  looop through to pop each value

// var newArray = new Array(1,2,3,4,5,6)
// // console.log(newArray)
// newArray.length = 0;
// var emptyArray = newArray.length = 0
// console.log(emptyArray)


// // Que no 4: How would you check if a number is an integer ?
// // [logic : 1]  
// var a = 13.0
// console.log(Number.isInteger(a))    
// // [logic : 2]
// if(a % 1 == 0){
//     console.log("Integar")       }
// else{
//     console.log("notIntegar")
// }


// // // ----->Start<-----
// // // Que no 5: duplicate the array 

// var arr = new Array(1,2,3,4,5)
// const duplicateArr= arr.concat(arr)
// console.log(duplicateArr)
// // // ----->end<-----

// // ----->start<-----
// // Que no 6 : Write a javascript function that reverse a number?

// function annoymous(num){
//     const reversenum = num.toString().split(" ").reverse()
//     return Number(reversenum)

// }
// const result =annoymous(12)
// console.log(typeof result)
    
// }
// const result = reverseaNumber(32)
// console.log(Array.isIntiger(result))


// // ----->start<-----
// Que no 7 : Write a javascript funtion that reverse a number passed string is pallindrome or not 
//   function stringchecker(str){
//         const reverse = str.split('').reverse().join('')
//          return str === reverse;
//   }
//   console.log(stringchecker("loop"))
// // // ----->end<-----


// ----->start<-----
// que no 8 : Write a javascript function that returns a passed string with letters in alphabitical order?
// function sortedbyOrder (stringg){
//     return stringg.split("").sort()
// }
// console.log(sortedbyOrder("not hararm"))
// ----->end<-----

// que no : Write a javascript fuction that accepts a string as aparameter and converts the first letter of each word of the string in uppercase
// start

// function capitalised(a){
//  let result = a.split(" ").map(a=>{
//     return a.charAt(0).toUpperCase() + a.substring(1)
//  })
//   return result.join(' ')
// }
// console.log( capitalised("ki j boli tumay"))


// Write a javaScript function to get the number of occurrences of each letter in specified string

function command (str){
let occurances = {};
str.split("").map(elem=>{
   if(occurances.hasOwnProperty(elem) == false){
      occurances[elem]= 1;
   }
   else{
      occurances[elem]++
   }
}
)
console.log(occurances)
}
command('fkadshjadshjadshjhkhahdsfl')