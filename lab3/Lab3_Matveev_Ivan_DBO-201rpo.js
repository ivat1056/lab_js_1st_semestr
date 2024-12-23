// let Input = prompt("Введите число:");
// let number = parseFloat(Input);
// if (!isNaN(number)) 
// {
//     let roundedNumber = (Math.round(number * 100) / 100).toFixed(2);
//     alert("Округленное число: " + roundedNumber);
// } 
// else 
// {
//     alert("Введено не корректное число");
// }

// let Input = prompt("Введите число:");
// let number = parseFloat(Input);
// if (!isNaN(number)) 
// {
//     let roundedNumber = number.toFixed(2);
//     alert("Округленное число: " + roundedNumber);
// } 
// else 
// {
//     alert("Пожалуйста, введите корректное число.");
// }

// let Input = prompt("Введите значение:");
// if (isNaN(Input)) 
// {
//     alert(true);
// } 
// else 
// {
//     alert(false);
// }

// let input = prompt("Введите число с единицей измерения:");
// let intValue = parseInt(input);
// let floatValue = parseFloat(input);
// alert("Целочисленное значение: " + intValue + "\n" + "Число с плавающей запятой: " + floatValue);

// let str = "иван";
// let updatedStr = str.charAt(0).toUpperCase() + str.slice(1);
// alert(updatedStr);

// let str = " Иван ";
// let trimmedStr = str.trim();
// alert(trimmedStr);

// let str = "Огромный мир!";
// let index = str.indexOf("мир");
// alert(index);

// let str = "Иван Матвеев"; 
// let substring = str.slice(3, 8); 
// alert(substring);

let str = "мир";
let updatedStr = "д" + str.slice(1);
alert(updatedStr);
