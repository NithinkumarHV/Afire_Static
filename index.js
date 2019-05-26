const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: true,
  height: 400,
  transition: 500,
  interval: 6000
});

$(document).ready(function() {
  $(".carousel").carousel({
    dist: -100,
    padding: 0,
    numVisible: 3,
    shift: 100,
    indicators: false,
    duration: 100
  });
});

M.AutoInit();
