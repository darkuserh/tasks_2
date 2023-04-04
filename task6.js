//Даний масив із числами. Залишіть у ньому лише негативні числа
//Метод filter
let arr=[-3,-5,-6,7,8,9];
let result=arr.filter(function(elem){
if(elem<0){
    return true;
  
}else{
    return false;
}
})
console.log(result)