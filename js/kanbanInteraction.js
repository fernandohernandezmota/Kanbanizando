const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.cards');

cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        column.appendChild(draggingCard);
    });
});