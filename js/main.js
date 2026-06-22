/**
 * main.js - Funcionalidades gerais do LifeFit Gym
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initScrollAnimations();
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

function initScrollAnimations() {
  var elements = document.querySelectorAll('[data-animate]');
  if (elements.length === 0) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.1) + 's';
    observer.observe(el);
  });
}
