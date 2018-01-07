document.addEventListener("DOMContentLoaded", function() {
  // document.getElementById("button_subscribe").addEventListener("click", function() {
  //     document.getElementById("button_subscribe").setAttribute('disabled', 'disabled');
  //     document.getElementById("button_subscribe").innerHTML = 'Thank you!';
  //     var email = document.getElementById("input_email").value;
  //     sendFormspreeMail({
  //         email: email
  //     });
  // });

  var nav = document.getElementById("navigation");
  var activeNavItem = nav.children[0].getAttribute('href');

  function activateClass(className) {
    var elms = document.getElementsByClassName('toggle');
    for (var i = 0; i < elms.length; i++) {
      elms[i].classList.remove('active');
    }
    elms = document.getElementsByClassName(className);
    for (var i = 0; i < elms.length; i++) {
      elms[i].classList.add('active');
    }
  }

  for (var i = 0; i < nav.children.length; i++) {
    nav.children[i].addEventListener('click', function(e) {
      e.preventDefault();
      activateClass(this.getAttribute('href'));
      return false;
    });
  }

  activateClass(activeNavItem);
});