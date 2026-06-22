/**
 * main.js - Funcionalidades gerais do LifeFit Gym
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
});

function initMobileMenu() {
  var menuToggle = document.getElementById('menuToggle');
  var subnav = document.getElementById('subnav');

  if (!menuToggle || !subnav) return;

  menuToggle.addEventListener('click', function () {
    subnav.classList.toggle('subnav--open');
  });

  var links = subnav.querySelectorAll('.subnav__link');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      subnav.classList.remove('subnav--open');
    });
  });
}
