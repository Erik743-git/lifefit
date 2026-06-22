/**
 * contato.js - Validação do formulário de contato
 */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var isValid = true;

    // Limpa erros anteriores
    clearErrors();

    // Valida nome
    var nome = document.getElementById('nome');
    if (nome.value.trim().length < 3) {
      showError('erroNome', 'Digite seu nome completo (mínimo 3 caracteres)');
      nome.classList.add('error');
      isValid = false;
    }

    // Valida e-mail
    var email = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError('erroEmail', 'Digite um e-mail válido');
      email.classList.add('error');
      isValid = false;
    }

    // Valida assunto
    var assunto = document.getElementById('assunto');
    if (!assunto.value) {
      showError('erroAssunto', 'Selecione um assunto');
      assunto.classList.add('error');
      isValid = false;
    }

    // Valida mensagem
    var mensagem = document.getElementById('mensagem');
    if (mensagem.value.trim().length < 10) {
      showError('erroMensagem', 'A mensagem deve ter pelo menos 10 caracteres');
      mensagem.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      var successMsg = document.getElementById('formSuccess');
      successMsg.hidden = false;
      form.reset();

      // Esconde mensagem após 5 segundos
      setTimeout(function () {
        successMsg.hidden = true;
      }, 5000);
    }
  });

  // Remove erro ao digitar
  var inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      input.classList.remove('error');
      var errorId = 'erro' + input.id.charAt(0).toUpperCase() + input.id.slice(1);
      var errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = '';
    });
  });
});

function showError(elementId, message) {
  var el = document.getElementById(elementId);
  if (el) el.textContent = message;
}

function clearErrors() {
  var errors = document.querySelectorAll('.form-error');
  errors.forEach(function (el) {
    el.textContent = '';
  });

  var fields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  fields.forEach(function (field) {
    field.classList.remove('error');
  });
}
