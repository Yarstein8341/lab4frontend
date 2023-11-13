const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-item-header');
    const content = item.querySelector('.accordion-item-content');
    const toggleIcon = header.querySelector('.toggle-icon');

    header.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            toggleIcon.textContent = '-';
            item.classList.add('active');
        } else {
            content.style.display = 'none';
            toggleIcon.textContent = '+';
            item.classList.remove('active');
        }
    });
});