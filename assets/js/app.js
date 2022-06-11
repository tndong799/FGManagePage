const collapseBtn = document.querySelector('.sidebar__collapse');
const submenu = document.querySelector('.submenu');

collapseBtn.addEventListener('click', () => {
    submenu.classList.toggle('hide');
})