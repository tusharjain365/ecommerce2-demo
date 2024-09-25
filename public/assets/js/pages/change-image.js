var thumbimg=document.querySelector('.thumb_img')

if(thumbimg) {
var thumb = thumbimg.children;
function changeImg(event) {
    document.querySelector('.main-img').src = event.children[0].src;
    for (let i = 0; i < thumb.length; i++) {
        thumb[i].classList.remove('active');
    }
    event.classList.add('active');
}
}