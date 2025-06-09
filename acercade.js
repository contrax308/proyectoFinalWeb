document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Cambiar Color de Fondo';
    changeColorButton.style.margin = '20px auto';
    changeColorButton.style.display = 'block';
    changeColorButton.style.padding = '10px 20px';
    changeColorButton.style.fontSize = '16px';

    document.body.insertBefore(changeColorButton, document.querySelector('footer'));

    changeColorButton.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});
