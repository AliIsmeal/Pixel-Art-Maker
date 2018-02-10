function start(event) {
    //to prevent the default behavior of the browser and call the makeGrid function
    event.preventDefault();
    makeGrid();
}

function makeGrid() {

    var table, gridHeight, gridWidth;
    // get the input values for the grid size
    table = $('#pixel_canvas');
    gridHeight = $('#input_height').val();
    gridWidth = $('#input_width').val();

    // remove table children each time the user enter new values for the size of the grid gridHeight and gridWidth.
    table.children().remove();
    //Construct the grid based on the values of 
    for (i = 0; i < gridHeight; i++) {
        table.append('<tr class="grid-Row"></tr>');
    }

    for (j = 0; j < gridWidth; j++) {
        $('.grid-Row').append('<td class="grid-Cell"></td>');
    } 	// When td is clicked by the user, change color of td
    $('.grid-Cell').click(function () {

        $(this).attr('bgcolor', $("#color-Picker").val());
    });
}


