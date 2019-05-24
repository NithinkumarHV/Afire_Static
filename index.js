<<<<<<< HEAD
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transition: 500,
  interval: 6000
});

$(document).ready(function() {
  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    indicators: true,
    duration: 100
  });
});

M.AutoInit();
=======
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transition: 500,
  interval: 6000
});

$(document).ready(function() {
  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    indicators: true,
    duration: 100
  });
});

M.AutoInit();
>>>>>>> acc40463d4187af695ed78beaa92983ae57388e2
