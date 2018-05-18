// Checks off specific todo by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Clicks on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); //Parent element
    });
    event.stopPropagation();
});

// Adds new todo to the list
$("input[type='text'").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
        $(this).val("");
    }
});