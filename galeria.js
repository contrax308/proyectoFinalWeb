// galeria.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const items = document.querySelectorAll('.gallery-item');

    function setActiveCategory(category) {
        buttons.forEach(btn => {
            const selected = btn.dataset.category === category;
            btn.classList.toggle('active', selected);
            btn.setAttribute('aria-selected', selected);
            btn.tabIndex = selected ? 0 : -1;
        });

        items.forEach(item => {
            item.style.display = item.dataset.category === category ? 'block' : 'none';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveCategory(button.dataset.category);
        });
    });

    // Inicializar mostrando "dibujos"
    setActiveCategory('dibujos');
});
