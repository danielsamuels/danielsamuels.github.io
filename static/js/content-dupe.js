var orig = document.getElementById('content-wrapper'),
    dupe = document.getElementById('content-dupe');

dupe.innerHTML = '<div class="expander"></div>' + orig.innerHTML;

dupe.scrollTop = window.scrollY;
window.addEventListener('scroll', function() {
    dupe.scrollTop = window.scrollY;
});
