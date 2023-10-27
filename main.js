const btnMenu = document.getElementById('btn-menu');
const modalMobile = document.getElementById('modal-mobile');
const closeModalMobile = document.getElementById('close-modal-mobile');

btnMenu.addEventListener('click', function() {
    modalMobile.style.display = 'block';
    btnMenu.style.display = 'none';
});

closeModalMobile.addEventListener('click', function() {
    modalMobile.style.display = 'none';
    btnMenu.style.display = 'block';
});