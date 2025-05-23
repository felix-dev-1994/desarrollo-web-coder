const btn = document.getElementById('toggleBtn');
const content = document.getElementById('contenido');

let expandido = false;

btn.addEventListener('click', () => {
    content.classList.toggle('expandido');
    btn.textContent = expandido ? 'Mostrar más' : 'Mostrar menos';
    expandido = !expandido;
});
