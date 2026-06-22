/**
 * perfil.js - Modal de confirmação para encerrar matrícula
 */

document.addEventListener('DOMContentLoaded', function () {
  var btnEncerrar = document.getElementById('btnEncerrar');
  var modal = document.getElementById('modalOverlay');
  var btnSim = document.getElementById('btnSim');
  var btnNao = document.getElementById('btnNao');

  if (!btnEncerrar || !modal) return;

  btnEncerrar.addEventListener('click', function () {
    modal.classList.add('modal-overlay--open');
  });

  btnNao.addEventListener('click', function () {
    modal.classList.remove('modal-overlay--open');
  });

  btnSim.addEventListener('click', function () {
    modal.classList.remove('modal-overlay--open');
    alert('Matrícula encerrada com sucesso.');
    window.location.href = 'login.html';
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('modal-overlay--open');
    }
  });
});
