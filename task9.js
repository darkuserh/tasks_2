/*Данний масив з числами. Визначте, скільки елементів 
з кінця масиву потрібно скласти, щоб у сумі вийшло більше 10-ти.*/
let arr=[1,2,4,5,3,7];
let num=0;
let res=arr.reduceRight(function(sum,elem){
    if(sum>=10){
     console.log(num)
    return
    }else{
        num++;
        return sum+elem
    }
},0)
