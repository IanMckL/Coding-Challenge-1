console.log('javascript is working')
$(document).ready(onReady);
//Have Button Click Trigger Function To Make DIV with button that displays counter

function onReady(){
    $('#generateButton').on('click', generateButtonClick);
    $('#yellowButton').on('click', '#main', makeYellow);
    $(document).on('click','#deleteButton', deleteButton);
    $(document).on('click','#yellowButton', makeYellow);
}


//Define variable for click counter
let clickCount = 0;
//Create fuction to append DIV with div and buttons 1) making div yellow and 2) deleting
function generateButtonClick(){
    clickCount++;
    $('#main').append(`
    <div id = "colorBlock" style="background-color: red">
        <h1>${clickCount}</h1>
        <button id = "yellowButton">Yellow</button>
        <button id = "deleteButton">Delete</button>
    </div>`)

}  

//make div with id colorBlock yellow
function makeYellow(){
    console.log('Yellow Pressed')
    $(this).parent().css('background-color','yellow');
}
//Delete parent 
function deleteButton(){
    console.log('delete')
    clickCount --;
    $(this).closest('#colorBlock').remove();
}