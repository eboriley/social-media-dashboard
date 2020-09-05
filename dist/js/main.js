const _theme_selector = document.querySelector(".selector");
const _body = document.querySelector(".light");
const _text = document.getElementById("dark-text");
const _overview = document.querySelectorAll(".overview_social");
const _social = document.querySelectorAll(".social_followers");
const _header = document.querySelector(".header");
const _overview_header = document.getElementById("overview_header")

_theme_selector.addEventListener('click', event => {
    _theme_selector.classList.toggle("active")
    _body.classList.toggle("dark")
    _header.classList.toggle("dark");
    for (var i = 0; i < _overview.length; i++) {
        _overview[i].classList.toggle("dark");
    }
    for (var i = 0; i < _social.length; i++) {
        _social[i].classList.toggle("dark");
    }
    if (_body.classList.contains('dark')) {
        _text.textContent = 'Light Mode';
        _overview_header.style.color = 'hsl(0, 0%, 100%)'
    } else _text.textContent = 'Dark Mode';
});