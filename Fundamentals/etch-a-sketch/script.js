const grid = document.getElementById('grid')
const reset = document.getElementById('reset')



// RESET BUTTON
reset.addEventListener('click', function (){
   while(grid.firstChild){
       grid.removeChild(grid.firstChild);
   }
   i = 0
   return Start(parseInt(prompt("How many Squares (Max: 100)")))
})


let i = 0;
let j = 0;
// Creates the sketch pad
function Start(squares=100){

while(i < 16)
{
    columns = document.createElement("div");
    columns.classList.add('col');
    i++;
    grid.appendChild(columns)
    while(j < squares)
    {
    let gray = document.createElement('div')
    gray.classList.add('gray')
    gray.addEventListener("mouseover", 
    function (){
        gray.classList.remove()
        gray.classList.add("black")
    }
    )
    j++;
    columns.appendChild(gray)
    }
    j=0;
}


}

Start()


