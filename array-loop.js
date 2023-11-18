// var numbers = [12, 34, 64, 67, 35, 95, 77]

// for(var i = 0; i < 7; i++){
//     var number = numbers[i]
//     console.log(number)
// }

var items = ['mouse', 'sunglass', 'keyboard', 'pen', 'computer', 'dhaka', 'khata', 'phone']

for(var i = 0; i < items.length; i++){
    var item = items[i]
    if(item == 'computer'){
        break;
    }
    console.log(item)
}


// var numbers = [12, 34, 64, 67, 123, 35, 95, 77, 20, 44, 33, 145, 5444,  88]

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i]
//     if(number > 1100){
//         break;
//     }
//     console.log(number)
// }