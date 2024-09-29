let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let preview = document.querySelectorAll('.preview .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }

    showSlider();
};

prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

let refreshInterval = setInterval(() => {
    next.click();
}, 6000);

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let previewActiveOld = document.querySelector('.preview .item.active');
    itemActiveOld.classList.remove('active');
    previewActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    preview[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
}

preview.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
