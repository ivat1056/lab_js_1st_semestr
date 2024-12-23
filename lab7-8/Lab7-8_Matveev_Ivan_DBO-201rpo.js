// function checkage(age) 
// {
//     if (age > 18) 
//     {
//     return true;
//     } 
//     else 
//     {
//     return confirm("Poutenn paspewnnu?");
//     }
// }
// function checkAge(age) 
// {
//     return age > 18 ? true : confirm("Родители разрешили?");
// }
// function checkAge(age) 
// {
//     return age > 18 || confirm("Родители разрешили?");
// }
// let Age = prompt("Введите Ваш возраст:", "");
// alert(checkAge(Age));

// function min(a, b) 
// {
//     return a < b ? a : b;
// }
// alert(min(2, 5) + "\n" + min(1, 1) + "\n" + min(3, -1));

// function pow(x, n) 
// {
//     return x ** n;
// }
// let x = prompt("Введите число x:", "");
// let n = prompt("Введите степень n:", "");
// if (!isNaN(x) && !isNaN(n)) 
//     {
//     x = Number(x);
//     n = Number(n);
//     if (n >= 0) 
//     {
//         alert("Результат pow " + pow(x, n) );
//     } 
//     else 
//     {
//         alert("Степень должна быть положительным числом.");
//     }
// } 
// else 
// {
//     alert("Введите корректные числа!");
// }

// function ask(question, yes, no) 
// {
//     if (confirm(question)) yes()
//     else no();  
// }
// ask(
//     "Bu cornache?",
//     function() { alert("Bu cornacunuce."); },
//     function() { alert("Bu otwennnn synonHenne.");}
// );

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
