$(function(){

var formUrl = 'https://docs.google.com/forms/d/1cGzOUDUjhpk-ecrpeodf11AJHv8XvVcXvyM_qKtwTlY/formResponse';


    $('form').submit(function(e) {
        var email = $('#Email').val();
        
        var button = $('input[type=submit]', this),
            data = $(this).serialize();
 
        e.preventDefault();
        if (true) {
            button.button('loading');
            $.ajax({
                type: 'POST',
                url: formUrl,
                data: { "entry_268805808": email},
                complete: function() {
                    button.button('reset');
                    // After submission, present thank 
                    document.getElementById("form-holder").innerHTML = 
                        "<h1>Thank <br> You!</h1>"
                }
            });
        }
    });

});
