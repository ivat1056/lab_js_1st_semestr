// function createCounter() 
// {
//     let count = 0; 
//     return function () 
//     {
//       count++; 
//       alert(`Текущее значение: ${count}`);
//     };
// }
// const counter = createCounter(); 
// counter(); 
// counter(); 
// counter(); 
  
// function outer() 
// {
//     let x = 10; 
//     function inner() 
//     {
//       alert(`Значение x: ${x}`); 
//     }
//     inner(); 
// }
// outer(); 

// function outerFunction() 
// {
//     let message = "Hello from outerFunction"; 
//     alert(`Изначальное значение: ${message}`);
//     function innerFunction() 
//     {
//       message = "Changed by innerFunction"; 
//       alert(`Внутри innerFunction: ${message}`);
//     }
//     innerFunction();
//     alert(`После innerFunction: ${message}`);
//   }
//   outerFunction();

let name = "Global Name";
window.name = name; 
function showName() 
{
  let name = "Local Name";
  alert(`Глобальная переменная: ${window.name}`);
  alert(`Локальная переменная: ${name}`);
}
showName();
