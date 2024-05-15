document.querySelectorAll('.rectangle').forEach(rectangle => {
    rectangle.addEventListener('click', () => {
        const link = rectangle.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
