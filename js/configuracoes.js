/**
 * configuracoes.js - Toggle switches das configurações
 */

document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('[data-toggle]');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('toggle--on');
    });
  });
});
