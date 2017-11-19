document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button_subscribe").addEventListener("click", function() {
        document.getElementById("button_subscribe").setAttribute('disabled', 'disabled');
        document.getElementById("button_subscribe").innerHTML = 'Thank you!';
        var email = document.getElementById("input_email").value;
        sendFormspreeMail({
            email: email
        });
    });
});