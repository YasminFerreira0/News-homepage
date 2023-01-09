const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const menuNavegacao = document.getElementById('menuNavegacao');
    menuNavegacao.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);