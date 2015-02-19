$('#btn-dropdown').click(function(){
    $('#login_form').addClass(
        function(index, currentClass){

            if (currentClass == "hide"){
                $('#login_form').removeClass("hide");
                return "show";

            }
            $('#login_form').removeClass("show");
            return "hide";
        }
    )

    });


