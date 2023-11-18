var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper', 'khat'];

var items = tableItems[4];
// console.log(items)

tableItems[3] = 'new'
var num = tableItems.indexOf('khat')
// console.log(num)

if(tableItems[4] === 'paper'){
    console.log('yes')
}
 else if(tableItems.length > 6){
    console.log('yes come back')
 }
 else{
    console.log('false')
 }