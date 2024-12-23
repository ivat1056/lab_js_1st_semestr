// function divide(a, b) 
// {
//     try 
//     {
//     if (b === 0) 
//     {
//         throw new Error("Деление на ноль невозможно");
//     }
//       alert(`Результат деления: ${a / b}`);
//     } catch (error) {
//       alert(`Ошибка: ${error.message}`);
//     }
// }
// divide(10, 2); 
// divide(10, 0); 
  
// function checkNumber(num) 
// {
//     try 
//     {
//     if (typeof num !== 'number' || isNaN(num)) 
//     {
//         throw new Error("Переданное значение не является числом"); 
//     }
//     alert(`Число корректно: ${num}`); 
//     } 
//     catch (error) 
//     {
//     alert(`Ошибка: ${error.message}`); 
//     }
// }
// checkNumber(42);
// checkNumber("hello"); 

// function checkAge(age) 
// {
//     try 
//     {
//       if (age < 0 || age > 100) 
//     {
//         throw new Error("Возраст должен быть в пределах от 0 до 100"); 
//     }
//       alert(`Возраст корректен: ${age}`); 
//     } 
//     catch (error) 
//     {
//       alert(`Ошибка: ${error.message}`); 
//     }
// }
// checkAge(25); 
// checkAge(-5); 

// function checkString(str) 
// {
//     try 
//     {
//         if (typeof str !== 'string' || str.trim() === '') 
//         {
//             throw new Error("Строка не должна быть пустой");
//         }
//         alert(`Строка корректна: "${str}"`); 
//     } 
//     catch (error) 
//     {
//         alert(`Ошибка: ${error.message}`); 
//     }
//   }
// checkString("Hello");
// checkString("");

// function findElement(arr, element) 
// {
//     try 
//     {
//         if (!arr.includes(element)) 
//         {
//             throw new Error("Элемент не найден в массиве"); 
//         }
//         alert(`Элемент найден: ${element}`);
//     } 
//     catch (error) 
//     {
//         alert(`Ошибка: ${error.message}`); 
//     }
//   }
// findElement([1, 2, 3], 2); 
// findElement([1, 2, 3], 4);

function stringToNumber(str) 
{
    try 
    {
        let num = Number(str);
        if (isNaN(num)) 
        {
            throw new Error("Строка не является числом");
        }
        alert(`Преобразованное число: ${num}`);
    } 
    catch (error) 
    {
        alert(`Ошибка: ${error.message}`);
    }
  }
stringToNumber("123"); 
stringToNumber("abc");
  