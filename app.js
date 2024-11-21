let slider = document.querySelector('.slider');
let nextBnt = document.getElementById('next');
let prevBnt = document.getElementById('prev');
nextBnt.onclick = () =>{
    slider.appendChild(slider.querySelector ('img:first-child'));
}

prevBnt.onclick = () => {
    slider.prepend(slider.querySelector('img:last-child'));
}