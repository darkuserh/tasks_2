/*Данний масив з числами. Знайдіть суму перших N елементів до першого нуля. Приклад: [1, 2, 3, 0, 4, 5, 6] - 
підсумовуємо перші 3 елемента, так як далі стоїть елемент з числом 0.*/
let arr=[1, 2, 3, 0, 4, 5, 6];
let answer=0;
let result=arr.reduce(function(sum,elem){
    if(elem==0){
        return answer
    } 
    answer++
    return sum+elem;
    
     
},0)

console.log(answer)
