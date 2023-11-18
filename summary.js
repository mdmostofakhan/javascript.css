var destinations = ['sajek', 'coxsbaxar', 'nepal', 'bali', 'sp'];

// console.log(destinations[3])
// destinations[2] = 'thailand'
// console.log(destinations)
var index = destinations.indexOf("sajek")
// console.log(index)

destinations.push('mostofa')
destinations.pop()
destinations.pop()
// console.log(destinations)

if(destinations[1] === "nepal"){
    console.log('yes nepal')
}
 else if(destinations[4] === 'bali'){
    console.log('bali go back')
 }
  else if(destinations.length !== 5){
    console.log('length')
  }
 else{
    console.log('not allows')
 }