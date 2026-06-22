/**
 * main.js - Funcionalidades gerais do site LifeFit
 * Menu mobile, scroll do header e animações simples
 */

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function () {
  initMenuMobile();
  initHeaderScroll();
  initScrollAnimations();
});

/**
 * Controla o menu hambúrguer no mobile
 */
function initMenuMobile() {
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav--open');
    menuToggle.classList.toggle('menu-toggle--active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em um link
  var navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      menuToggle.classList.remove('menu-toggle--active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Adiciona sombra ao header quando o usuário rola a página
 */
function initHeaderScroll() {
  var header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

/**
 * Animação simples: elementos aparecem ao entrar na tela
 */
function initScrollAnimations() {
  var cards = document.querySelectorAll(
    '.feature-card, .testimonial-card, .step, .pricing-card'
  );

  if (cards.length === 0) return;

  // Define estado inicial
  cards.forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Observa quando os elementos entram na viewport
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
}
