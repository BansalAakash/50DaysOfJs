const container = document.querySelector('.container');
document.getElementById('open').addEventListener('click', () => {
    console.log('open');
    container.classList.add('show-nav');
});
document.getElementById('close').addEventListener('click', () => {
    console.log('close');
    container.classList.remove('show-nav');
});

