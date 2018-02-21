document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('button_subscribe').addEventListener('click', function() {
      document.getElementById('button_subscribe').setAttribute('disabled', 'disabled');
      document.getElementById('input_email').setAttribute('disabled', 'disabled');
      document.getElementById('button_subscribe').innerHTML = 'Top! Dank voor je aanmelding';
      var email = document.getElementById('input_email').value;
      var url = "https://script.google.com/macros/s/AKfycbwcXYjElC-P6qyAl1BNPItw3PSJa9pG1_HFeK7JlO3Qo1ZVwC84/exec?email=" + encodeURI(email)
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.send();
  });

  var nav = document.getElementById('navigation');
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
    document.body.setAttribute('class', className);
  }

  for (var i = 0; i < nav.children.length; i++) {
    nav.children[i].addEventListener('click', function(e) {
      e.preventDefault();
      activateClass(this.getAttribute('href'));
      return false;
    });
  }

  activateClass(activeNavItem);

  $('.landing').addClass('active');

  $('.navitem').click(function() {
    $('.navitem.active').removeClass('active');
    $(this).toggleClass('active');
  });

});
