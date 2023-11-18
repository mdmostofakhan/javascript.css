var numbers = [12, 34, 64, 67, 123, 35, 95, 77, 20, 44, 33, 145, 5444,  88]

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if(number > 50){
        continue;
    }
    console.log(number)
}