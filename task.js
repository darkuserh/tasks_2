//Даний масив із числами. Створіть новий масив, що складається із квадратів цих чисел
//Метод forEach:
let arr=[1,2,3,4,5];
let newArr=[];
arr.forEach(function(elem){
    newArr.push(elem*elem)
})
console.log(newArr)