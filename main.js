var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];



//Problem #1

// for(var i=0; i<4; i++) {
//     console.log(animals[i]);
//   }


//problem #2

// for (var i=0; i<animals.length; i+=2) {
//   console.log(animals[i])
// }

//problem #3

// for (var i=4; i>=0; i--) {
//   console.log(animals[i])
// }


//problem #4

for (var i=0; i<animals.length; i++) {
  if ((i==0) || (i==animals.length-1)) {
  console.log(animals[i]);
} else {
  console.log(animals[i])
  console.log(animals[i])
}
}
