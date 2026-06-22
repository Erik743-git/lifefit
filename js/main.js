/**
 * main.js - Funcionalidades gerais do LifeFit Gym
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initScrollAnimations();
  initMobileSidebar();
});

function initMobileSidebar() {
  var menuToggle = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  if (!menuToggle || !sidebar) return;

  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('sidebar--mobile-open');
    overlay.classList.add('sidebar-overlay--visible');
  }

  function closeSidebar() {
    sidebar.classList.remove('sidebar--mobile-open');
    overlay.classList.remove('sidebar-overlay--visible');
  }

  menuToggle.addEventListener('click', function () {
    if (window.innerWidth < 1024) {
      if (sidebar.classList.contains('sidebar--mobile-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
      return;
    }
    var subnav = document.getElementById('subnav');
    if (subnav) subnav.classList.toggle('subnav--open');
  });

  overlay.addEventListener('click', closeSidebar);

  sidebar.addEventListener('click', function (event) {
    if (event.target.closest('.sidebar__link') && window.innerWidth < 1024) {
      closeSidebar();
    }
  });
}

function initMobileMenu() {
  var menuToggle = document.getElementById('menuToggle');
  var subnav = document.getElementById('subnav');

  if (!menuToggle || !subnav) return;

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
