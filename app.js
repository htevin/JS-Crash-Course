//let count = 1;

//while (count <= 100) {
//    console.log(count)
//    count = count +1
//    }


//   for (let i = 1; i <= 20; i = i+1){
  // if (i % 3 ===0 && i % 5 ===0)
  // console.log (`${i} --> Frontend Simplified`)

 //  else if(i % 3 ===0)
  // console.log (`${i} --> Frontend`)

  // else if(i % 5 ===0)
  // console.log (`${i} --> Simplified`)

 //  else console.log (`${i} --> ${i}`)
// }

//let str = "Frontend Simplified"

//for (let i=0; i<str.length; i= i+1)
//{
 //   console.log(str[i])
//}


//function convertCelciusToFahrenheit (celsius) {
  //let fahrenheit = celsius * 1.8 + 32
  //return fahrenheit
//}

//console.log(convertCelciusToFahrenheit(30))

//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = []

//for (let i = 0; i < grades.length; ++i){
// if (grades[i] !== 'FAIL') {
 // goodGrades.push(grades[i]);
 //}
//}
//console.log(goodGrades);

//let dollars = [1, 5, 10, 3];

//let cents = dollars.map(element => element * 100)

//console.log(cents)

let dollars = [1, 5, 10, 3]
let cents = []

for (let i = 0; i < dollars.length; ++i) {
  cents.push(dollars[i] * 100)
}

console.log(cents);