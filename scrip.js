//  elementos del DOM
const caja = document.querySelector('.caja');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Mostrar / Ocultar caja 
document.querySelector('img').addEventListener('click', () => {
    caja.style.display = 'block';
});

caja.addEventListener('click', () => {
    caja.style.display = 'none';
});

// Mostrar / Ocultar menú desplegable 
dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

