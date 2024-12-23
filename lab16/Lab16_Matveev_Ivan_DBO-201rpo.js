// function sum(a) 
// {
//   let currentSum = a;
//   function innerSum(b) 
//   {
//     currentSum += b;
//     return innerSum;
//   }
//   innerSum.toString = function () 
//   {
//     return currentSum;
//   };

//   return innerSum;
// }
// alert((sum(1)(2))+ " " +(sum(1)(2)(3))+ " " +(sum(5)(-1)(2))+ " " +(sum(6)(-1)(-2)(-3))+ " " +(sum(0)(1)(2)(3)(4)(5)) );

// function createCounter() 
// {
//   let count = 0;
//   return function () 
//   {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// alert(counter()); 
// alert(counter()); 
// alert(counter()); 

// function createUser(name) 
// {
//   return 
//   {
//     greet() 
//     {
//       alert(`Привет, ${name}!`);
//     }
//   };
// }
// const user = createUser("Иван");
// user.greet();

function memoize(fn) 
{
  const cache = new Map();
  return function (...args) 
  {
    const key = JSON.stringify(args); 
    if (cache.has(key)) 
    {
      return cache.get(key); 
    }

    const result = fn(...args); 
    cache.set(key, result);
    return result;
  };
}
function slowFunction(num) 
{
  console.log("Выполняем вычисления...");
  return num * 2;
}
const memoizedFunction = memoize(slowFunction);
alert(memoizedFunction(5)); 
alert(memoizedFunction(5)); 
alert(memoizedFunction(10));

 
