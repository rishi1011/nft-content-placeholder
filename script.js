const mainImgContainer = document.querySelector('.main-img');
const title = document.querySelector('.title');
const excerpt = document.querySelector('.excerpt');
const value = document.querySelector('.value');
const time = document.querySelector('.time');
const author = document.querySelector('.author');

const animatedBgElements = document.querySelectorAll('.animated-bg');

mainImgContainer.addEventListener('mouseenter', () => {
    mainImgContainer.classList.add('hovered');
});

mainImgContainer.addEventListener('mouseleave', () => {
    mainImgContainer.classList.remove('hovered');
});

setTimeout(getData, 2500);

function getData() {
    mainImgContainer.style.backgroundImage = "url('./assets/image-equilibrium.jpg')";
    mainImgContainer.style.backgroundSize = 'cover';

    title.innerHTML = 'Equilibrium #3429';
    excerpt.innerHTML = 'Our Equilibrium collection promotes balance and calm.';
    value.innerHTML = `<img src="./assets/icon-ethereum.svg" alt="">
                <p>0.041 ETH</p>`;
    time.innerHTML = `<img src="./assets/icon-clock.svg" alt="">
                <p>3 days left</p>`;
    author.innerHTML = `<img src="./assets/image-avatar.png" alt="profile-img">
            <p class="info">Creation of <span class="name">Jules Wyvern</span></p>`;
    
    animatedBgElements.forEach(item => item.classList.remove('animated-bg'));
}