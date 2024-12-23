// let age = 20;  
// let isStudent = true;  
// if (age >= 18 && isStudent) 
// {
//     alert(true);  
// } 
// else 
// {
//     alert(false);  
// }

// let age = 22; 
// let membership = true;
// if (age > 21 || membership) 
// {
//     alert("Можно войти в клуб."); 
// } 
// else 
// {
//     alert("Нельзя войти в клуб."); 
// }


// let temperature = 8; 
// let isRainy = true;  
// if (temperature < 10 || isRainy) 
// {
//     alert("Нужно взять зонт."); 
// } 
// else 
// {
//     alert("Можно не брать зонт.");
// }

// let age = 25; 
// if (age >= 14 && age <= 90) 
// {
//     alert("Возраст в диапазоне от 14 до 90 включительно.");
// } 
// else 
// {
//     alert("Возраст вне диапазона.");
// }

// let age = 12; 
// if (!(age >= 14 && age <= 99)) 
// {
//     alert("Возраст не находится в диапазоне от 14 до 99 включительно.");
// } 
// else 
// {
//     alert("Возраст находится в диапазоне от 14 до 99 включительно.");
// }

// let age = 12;
// if (age < 14 || age > 99) 
// {
//     alert("Возраст не находится в диапазоне от 14 до 99 включительно.");
// } 
// else 
// {
//     alert("Возраст находится в диапазоне от 14 до 99 включительно.");
// }

let login = prompt("Кто там?");
if (login === "Админ") 
{
    let password = prompt("Пароль?");
    if (password === "Я главный") 
    {
        alert("Здравствуйте!");
    } 
    else if (password === null || password === "") 
    {
        alert("Отменено");
    } 
    else 
    {
        alert("Неверный пароль");
    }
} 
else if (login === null || login === "") 
{
    alert("Отменено");
} 
else 
{
    alert("Я вас не знаю");
}

