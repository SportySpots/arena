var url = '//formspree.io/team@sportyspots.com';

function sendFormspreeMail(obj) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(obj));
}
