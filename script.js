document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');

    nameElement.addEventListener('mouseover', () => {
        nameElement.style.color = '#007BFF';
    });

    nameElement.addEventListener('mouseout', () => {
        nameElement.style.color = '#444';
    });

    titleElement.addEventListener('mouseover', () => {
        titleElement.style.color = '#007BFF';
    });

    titleElement.addEventListener('mouseout', () => {
        titleElement.style.color = '#444';
    });
});