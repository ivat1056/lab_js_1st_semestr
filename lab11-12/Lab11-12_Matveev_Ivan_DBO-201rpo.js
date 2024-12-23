// function isEmpty(obj) 
// {
//     for (let key in obj) 
//     {
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));

// let salaries = 
// {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) 
// {
// sum += salaries[key];
// }
// alert(sum);

// function multiplyNumeric(obj) 
// {
//     for (let key in obj) 
//     {
//       if (typeof obj[key] === 'number') 
//       {
//         obj[key] *= 2;
//       }
//     }
//   }
//   let menu = 
//   {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
// multiplyNumeric(menu);
// let result = '';
// for (let key in menu) 
// {
//     result += `${key}: ${menu[key]}\n`;
// }
// alert(result);

// let calculator = 
// {
//     a: 0,
//     b: 0,
//     read() 
//     {
//         this.a = +prompt("Введите первое число:", 0);
//         this.b = +prompt("Введите второе число:", 0);
//     },
//     sum() 
//     {
//         return this.a + this.b;
//     },
//     mul() 
//     {
//         return this.a * this.b;
//     }
// };
// calculator.read();
// alert("Сумма: " + calculator.sum());
// alert("Произведение: " + calculator.mul());

function Accumulator(startingValue) 
{
    this.value = startingValue;
    this.read = function() 
    {
      let input = +prompt("Введите число:", 0); 
      this.value += input;
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read(); 
alert("Текущее значение: " + accumulator.value);
  