// let a = prompt("Первое число ?", 1);
// let b = prompt("Второе число ?", 2);
// alert(a + b);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(Number(a) + Number(b));

// alert(5 == "5"); 
// alert(5 === "5");

// alert(true == 1); 
// alert(true === 1); 

// alert(null == undefined); 
// alert(null === undefined); 

// alert(" hello " == "hello");
// alert(" hello " === "hello"); 

// alert(10 == 10.0); 
// alert(10 === 10.0); 

// let number = parseInt(prompt("Введите число:"));
// if (number % 2 === 0) 
// {
//     alert("Число четное.");
// } 
// else 
// {
//     alert("Число нечетное.");
// }


// let num1 = parseFloat(prompt("Введите первое число:"));
// let num2 = parseFloat(prompt("Введите второе число:"));
// if (num1 > num2) 
// {
//     alert("Первое число больше");
// } 
// else if (num2 > num1) 
// {
//     alert("Второе число больше");
// } 
// else 
// {
//     alert("Числа равны.");
// }


// let purchase = parseFloat(prompt("Введите сумму покупки:"));
// if (purchase > 1000) 
// {
//     alert("Сумма к оплате:" + (purchase * 0.90));
// } 
// else if (purchase >= 500 && purchase <= 1000) 
// {
//     alert("Сумма к оплате:" + (purchase * 0.95));
// }
// else {
//     alert("Сумма к оплате (нет скидки): " + purchase);
// }

let answer = prompt("Какое официальное» название JavaScript?");
if (answer === "ECMAScript") 
{
    alert("Верно!");
} 
else 
{
    alert("Не знаете? ECMAScript");
}
