//Даний масив із числами. Перевірте, що в ньому є негативні елементи.
//Метод some;
let arr=[4,5,8,9,7,-3]
let result=arr.some(function(elem){
    if(elem<0){
        return true;
    }else{
        return false;
    }
})
console.log(result)