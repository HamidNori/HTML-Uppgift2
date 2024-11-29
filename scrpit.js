let text = document.getElementById('text');
let back = document.getElementById('bild1');
let front = document.getElementById('bild2');

if (text && back && front) {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        back.style.top = value * -1.5 + 'px';
        front.style.left = value * 3.5 + 'px';
    }); 
} else {
    console.error("Ett eller flera element hittades inte. Kontrollera ID:n i din HTML.");
}
