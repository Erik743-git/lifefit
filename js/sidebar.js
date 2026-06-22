/**
 * sidebar.js - Menu lateral esquerdo rebatível
 */

document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  var isInPages = window.location.pathname.indexOf('/pages/') !== -1;
  var root = isInPages ? '../' : '';
  var pages = isInPages ? '' : 'pages/';
  var currentPage = document.body.getAttribute('data-page') || '';

  var menuItems = [
    { id: 'home', href: root + 'index.html', icon: '🏠', label: 'Início' },
    { id: 'depoimentos', href: pages + 'depoimentos.html', icon: '⭐', label: 'Depoimentos' },
    { id: 'infraestrutura', href: pages + 'infraestrutura.html', icon: '🏢', label: 'Infraestrutura' },
    { id: 'planos', href: pages + 'planos.html', icon: '💳', label: 'Planos' },
    { id: 'sobre', href: pages + 'sobre.html', icon: '📋', label: 'Sobre' },
    { id: 'perfil', href: pages + 'perfil.html', icon: '👤', label: 'Perfil' },
    { id: 'configuracoes', href: pages + 'configuracoes.html', icon: '⚙️', label: 'Configurações' },
    { id: 'contato', href: pages + 'contato.html', icon: '📧', label: 'Contato' }
  ];

  var linksHtml = menuItems.map(function (item) {
    var active = item.id === currentPage ? ' sidebar__link--active' : '';
    return '<a href="' + item.href + '" class="sidebar__link' + active + '" title="' + item.label + '">' +
      '<span class="sidebar__link-icon">' + item.icon + '</span>' +
      '<span class="sidebar__link-text">' + item.label + '</span>' +
      '</a>';
  }).join('');

  sidebar.innerHTML =
    '<div class="sidebar__header">' +
      '<button type="button" class="sidebar__toggle" id="sidebarToggle" aria-label="Recolher menu" aria-expanded="true">' +
        '<span class="sidebar__toggle-icon" aria-hidden="true">◀</span>' +
      '</button>' +
    '</div>' +
    '<nav class="sidebar__nav" aria-label="Menu lateral">' + linksHtml + '</nav>' +
    '<div class="sidebar__footer">' +
      '<a href="' + pages + 'login.html" class="sidebar__link" title="Login">' +
        '<span class="sidebar__link-icon">🔑</span>' +
        '<span class="sidebar__link-text">Login</span>' +
      '</a>' +
    '</div>';

  initSidebarToggle(sidebar);
});

function initSidebarToggle(sidebar) {
  var toggle = document.getElementById('sidebarToggle');
  var layout = document.querySelector('.app-layout');
  if (!toggle) return;

  if (localStorage.getItem('lifefit-sidebar-collapsed') === 'true') {
    sidebar.classList.add('sidebar--collapsed');
    if (layout) layout.classList.add('app-layout--collapsed');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    var collapsed = sidebar.classList.toggle('sidebar--collapsed');
    if (layout) layout.classList.toggle('app-layout--collapsed', collapsed);
    toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    localStorage.setItem('lifefit-sidebar-collapsed', collapsed);
  });
}
