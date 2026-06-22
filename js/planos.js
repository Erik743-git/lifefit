/**
 * planos.js - Alternância entre preços mensais e anuais
 */

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('billingToggle');
  var labelMensal = document.getElementById('labelMensal');
  var labelAnual = document.getElementById('labelAnual');
  var priceElements = document.querySelectorAll('.pricing-card__amount');

  if (!toggle) return;

  var isAnual = false;

  toggle.addEventListener('click', function () {
    isAnual = !isAnual;
    toggle.classList.toggle('billing-toggle__switch--active', isAnual);
    labelMensal.classList.toggle('billing-toggle__label--active', !isAnual);
    labelAnual.classList.toggle('billing-toggle__label--active', isAnual);

    priceElements.forEach(function (el) {
      var mensal = el.getAttribute('data-mensal');
      var anual = el.getAttribute('data-anual');
      el.textContent = isAnual ? anual : mensal;
    });
  });
});
