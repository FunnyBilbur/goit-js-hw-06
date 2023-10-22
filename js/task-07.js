const size = document.querySelector('#font-size-control');
const text_content = document.querySelector('#text');

console.dir(size);

size.addEventListener('input', (event) => {
    console.log('Value:', event.currentTarget.value);
    text_content.setAttribute('style', `font-size:${event.currentTarget.value}px`);
})



