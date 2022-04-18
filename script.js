const mainImgContainer = document.querySelector('.main-img');

mainImgContainer.addEventListener('mouseenter', () => {
    mainImgContainer.classList.add('hovered');
});

mainImgContainer.addEventListener('mouseleave', () => {
    mainImgContainer.classList.remove('hovered');
});