/*Даний масив із рядками. Залиште в ньому тільки ті рядки, 
довжина яких більше 5 символів.*/
//Метод filter
let arr=['1351','1564674','14','456']
let result=arr.filter(function(elem){
    if(elem.length>5){
        return true;
    }else{
        return false;
    }
})
console.log(result)