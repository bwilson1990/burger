// put request function to change the burger from uneaten to devoured.
$(".devour").on("click", function() {
    var id = $(this).attr("data-id");

    // send put request
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function(){
    });
    // reload page
    location.reload();
});

// post request function to add a new burger
$("#submit").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerName").val().trim()
    };

    if (newBurger.burger_name.length === 0) {
        // alert if burger name is empty
        $('#getCodeModal').on('shown.bs.modal', function () {
            $('#getCodeModal').trigger('focus')
            })
        $("#getCodeModal").modal('show');
        return false;
    } else {
        // send post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
        });
        // reload page
        location.reload();
    };
});