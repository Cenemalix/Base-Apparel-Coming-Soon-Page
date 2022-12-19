const form = document.querySelector('#inputForm');
const input = document.querySelector('#input');
const errorIcon = document.querySelector('#errorIcon');
const errorSpan = document.querySelector('#errorSpan');
const loadingModule = document.querySelector('.loadingModule');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === '') {
        errorIcon.style.display = 'flex';
        errorSpan.style.display = 'flex';
        loadingModule.style.display = 'none';
    } else {
        errorIcon.style.display = 'none';
        errorSpan.style.display = 'none';
        loadingModule.style.display = 'flex';
    }
})