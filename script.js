const text = document.getElementById('text');
const count = document.getElementById('count');

text.addEventListener('input', (event) => {
    count.innerText = text.value.length;
});