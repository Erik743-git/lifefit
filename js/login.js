/**
 * login.js - Validação simples do formulário de login
 */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');
    var erroUsuario = document.getElementById('erroUsuario');
    var erroSenha = document.getElementById('erroSenha');
    var valido = true;

    erroUsuario.textContent = '';
    erroSenha.textContent = '';

    if (usuario.value.trim().length < 3) {
      erroUsuario.textContent = 'Digite um usuário válido';
      valido = false;
    }

    if (senha.value.length < 4) {
      erroSenha.textContent = 'A senha deve ter pelo menos 4 caracteres';
      valido = false;
    }

    if (valido) {
      window.location.href = '../index.html';
    }
  });
});
