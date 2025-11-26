document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('show-button');
    const hideButton = document.getElementById('hide-button');
    const hiddenImageContainer = document.getElementById('hiddenImageContainer');

    // URL de imagen alternativa (puedes cambiarla por tu Catrina Coder)
    const secondaryImageUrl = 'https://i.pinimg.com/originals/95/83/a0/9583a07c56c87b0680950c6e0aac7705.jpg';

    const calaveraImg = document.createElement('img');
    calaveraImg.src = secondaryImageUrl;
    calaveraImg.alt = "Imagen de Catrina Coder";
    calaveraImg.style.maxWidth = '100%'; 
    calaveraImg.style.height = 'auto';

    const mostrarCalavera = () => {
        if (!hiddenImageContainer.contains(calaveraImg)) {
            hiddenImageContainer.appendChild(calaveraImg);
        }
        hiddenImageContainer.style.display = 'block';
        showButton.style.display = 'none';
        hideButton.style.display = 'block';
    };

    const ocultarCalavera = () => {
        hiddenImageContainer.style.display = 'none';
        showButton.style.display = 'block';
        hideButton.style.display = 'none';
    };

    showButton.addEventListener('click', mostrarCalavera);
    hideButton.addEventListener('click', ocultarCalavera);
});