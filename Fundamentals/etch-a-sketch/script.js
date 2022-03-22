const grid = document.getElementById('grid')

let i = 0;
let j = 0;
while(i < 16)
{
    let columns = document.createElement("div");
    columns.classList.add('col');
    i++;
    grid.appendChild(columns)
    while(j < 36)
    {
    let gray = document.createElement('div')
    gray.classList.add('gray')
    j++;
    columns.appendChild(gray)
    }
    j = 0;
}

