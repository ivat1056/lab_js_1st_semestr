// let array = ["Джаз", "Блюз"];
// alert(array); 

// array.push("Рок-н-ролл");
// alert(array); 

// let middleIndex = Math.floor(array.length / 2);
// array[middleIndex] = "Классика";
// alert(array);

// let firstElement = array.shift();
// alert(firstElement);
// alert(array);

// array.unshift("Рэп", "Регги");
// alert(array);
// function sumInput() 
// {
//     let numbers = [];
//     while (true) 
//     {
//         let value = prompt("Введите число:", "");
//         if (value === null || value === "") 
//         {
//             break;
//         }
//         let number = Number(value);
//         if (isNaN(number)) 
//         {
//             alert("Введено не число, ввод завершен.");
//             break;
//         }
//         numbers.push(number);
//     }
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// alert("Сумма чисел: " + sumInput());

// function camelize(str) 
// {
//     return str
//         .split('-')               
//         .map((word, index) => 
//         {
//             if (index === 0) return word; 
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join('');              
// }
// alert(camelize("backgroung-color") + " " + camelize("list-style-image") + " " + camelize("-webkit-transition") );  

function filterRange(arr, a, b) 
{
    return arr.filter(item => item >= a && item <= b);
}
let arr = [5, 9, 8, 3];
let filtered = filterRange(arr, 2, 4);
alert(filtered + " " + arr);   

// function filterRangeInPlace(arr, a, b) 
// {
//     for (let i = arr.length - 1; i >= 0; i--) 
//         {
//         if (arr[i] <= a || arr[i] >= b) 
//         {
//             arr.splice(i, 1);
//         }
//     }
// }
// let arr = [5, 3, 8, 2];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);  
