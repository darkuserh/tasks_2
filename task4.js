//Даний масив із числами. Перевірте, що всі елементи в масиві більше нуля.
//Метод every:
let arr=[0,6,5,7,8];
let result=arr.every(function(elem){
    if(elem>0){
        return true;
    }else{
        return false;
    }
})
console.log(result)