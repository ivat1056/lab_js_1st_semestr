// function printNumbers(from, to) 
// {
//   let current = from;
//   const timer = setInterval(() => 
//     {
//     alert(current);
//     if (current === to) 
//     {
//       clearInterval(timer);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(1, 5);

// function printNumbers(from, to) 
// {
//   let current = from;
//   function printNext()
//   {
//     alert(current);
//     if (current < to) 
//     {
//       setTimeout(printNext, 1000);
//     }
//     current++;
//   }
//   printNext();
// }
// printNumbers(1, 5);

// function delayedGreeting(name, delay) 
// {
//   setTimeout(() => 
//   {
//     alert(`Привет, ${name}!`);
//   }, delay);
// }
// delayedGreeting("Иван", 3000);

// function countdown(number) 
// {
//   function tick() 
//   {
//     if (number >= 0) 
//       {
//       alert(number);
//       number--;
//       if (number >= 0) 
//       {
//         setTimeout(tick, 1000);
//       } 
//       else 
//       {
//         alert("Время вышло!");
//       }
//     }
//   }
//   tick();
// }
// countdown(5); 

function repeatAction(action, interval) 
{
  const startTime = Date.now();
  const timer = setInterval(() => {
    if (Date.now() - startTime >= 5000) 
    {
      clearInterval(timer);
      alert("Повтор остановлен.");
    } 
    else 
    {
      action();
    }
  }, interval);
}
repeatAction(() => alert("Действие повторяется"), 1000);
