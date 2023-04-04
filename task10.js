//Данний масив з числами. Поставте в нім тільки позитивні числа. 
//Потім витягніть квадратний корінь цих чисел.

let arr=[2,3,4,5,-1,-7];
function func(elem){return elem>0}
let arrTemp=arr.filter(func);
let res=arrTemp.map(function(elem){
    return Math.sqrt(elem)
})
console.log(res)









// var arr = [1, -2, 3, 0, 4, -5, 6, -11];
// function func(elem){return elem > 0};
// var arrTemp = arr.filter(func);

// var result = arrTemp.map(function(elem) {
// 	return Math.sqrt(elem);
// });
// console.log(result); 