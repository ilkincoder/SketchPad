const gridContainer = document.getElementById('gridContainer');


function createGrid(){
    for(let i = 0; i < 24*24; i++ ){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        // Adding the event listener
        gridItem.addEventListener('mouseover', function(){
            gridItem.style.backgroundColor = 'grey';
        })
        //Reset the color 
        gridItem.addEventListener('mouseout',function(){
            gridItem.style.backgroundColor = '';
        })

    }
}    
createGrid();