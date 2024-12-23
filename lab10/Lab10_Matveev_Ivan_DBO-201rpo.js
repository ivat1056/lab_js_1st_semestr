// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert(arr);
// function copySorted(arr) 
// {
//     return [...arr].sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted); 
// alert(arr);  

// function Calculator() 
// {
//     this.methods = 
//     {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };
//     this.calculate = function (str) 
//     {
//         let [a, operator, b] = str.split(" ");
//         a = parseFloat(a);
//         b = parseFloat(b);
//         if (isNaN(a) || isNaN(b)) 
//         {
//             throw new Error("Некорректные числа!");
//         }
//         const func = this.methods[operator];
//         if (!func) 
//         {
//             throw new Error(`Оператор ${operator} не поддерживается!`);
//         }
//         return func(a, b);
//     };
//     this.addMethod = function (name, func) 
//     {
//         this.methods[name] = func;
//     };
// }
// let calc = new Calculator();
// alert(calc.calculate("3 + 7"));
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result); 

function sortByAge(users) 
{
    users.sort((a, b) => a.age - b.age);
}
let vasya = { name: "Baca", age: 25 };
let petya = { name: "Nera", age: 30 };
let masha = { name: "Mawa", age: 28 };
let arr = [vasya, petya, masha];
sortByAge(arr);
alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 
