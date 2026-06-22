/**
 * planos.js - Navegação entre seleção e detalhe dos planos
 */

document.addEventListener('DOMContentLoaded', function () {
  var plansSelect = document.getElementById('plansSelect');
  var planButtons = document.querySelectorAll('[data-plan]');
  var backButtons = document.querySelectorAll('[data-back]');
  var planSections = document.querySelectorAll('.plan-detail');

  // Abre detalhe do plano ao clicar
  planButtons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      var planId = btn.getAttribute('data-plan');
      showPlan(planId);
    });
  });

  // Botão voltar
  backButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showPlanSelect();
    });
  });

  // Se a URL tiver #basic, #pro ou #elite, abre direto
  var hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showPlan(hash);
  }

  function showPlan(planId) {
    if (plansSelect) plansSelect.hidden = true;
    planSections.forEach(function (section) {
      section.hidden = section.id !== planId;
    });
    window.location.hash = planId;
  }

  function showPlanSelect() {
    if (plansSelect) plansSelect.hidden = false;
    planSections.forEach(function (section) {
      section.hidden = true;
    });
    window.location.hash = '';
  }
});
