var url = '//formspree.io/tomklav@gmail.com';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button_subscribe").addEventListener("click", function() {
            document.getElementById("button_subscribe").setAttribute('disabled', 'disabled');
            var email = document.getElementById("input_email").value;
            var req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.setRequestHeader("Content-type", "application/json");
            req.send(JSON.stringify({
                name: email,
                email: email,
                message: email
            }));
    });
});