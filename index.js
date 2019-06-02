
  $( function() {
    $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );

function addTask1(){
    let task = document.createElement("li");
    task.classList.add("boks");
    document.getElementById("sortable1").appendChild(task);
    
}

function addTask2(){
    let task = document.createElement("li");
    task.classList.add("boks2");
    document.getElementById("sortable2").appendChild(task);
    
}
function addTask3(){
    let task = document.createElement("li");
    task.classList.add("boks3");
    document.getElementById("sortable3").appendChild(task);
    
}



$(function() {
    $("#sortable1").draggable();

    $('#trash').droppable({
        over: function(event, ui) {
            ui.draggable.remove();
        }
    });
});








