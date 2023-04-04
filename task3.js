//Даний масив із числами. Зробіть із нього масив, що складається з квадратів цих чисел
//Метод Map:
let arr=[2,4,5,7,8];
let result=arr.map(function(elem){
    return elem**2
})
console.log(result)