$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});


function scrollHome() {
    $('html, body').animate({ scrollTop: $('#landing-content').offset().top }, 'slow');
    return false;
}

function scrollFacility() {
    $('html, body').animate({ scrollTop: $('#facility-content').offset().top }, 'slow');
    return false;
}

function scrollInfo() {
    $('html, body').animate({ scrollTop: $('#information-content').offset().top }, 'slow');
    return false;
}

function scrollPlace() {
    $('html, body').animate({ scrollTop: $('#place-content').offset().top }, 'slow');
    return false;
}
