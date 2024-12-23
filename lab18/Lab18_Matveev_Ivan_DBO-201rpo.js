// const divElement = document.querySelector('div');
// alert(divElement.textContent); 

// const ulElement = document.querySelector('ul');
// alert(ulElement.textContent); 

// const secondLi = document.querySelectorAll('li')[1];
// alert(secondLi.textContent); 

const table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) 
{
  const td = table.rows[i].cells[i];
  td.style.backgroundColor = 'red';
}



