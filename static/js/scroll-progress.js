window.onscroll = function() {
    // Calculate the 100% progress scroll position.
    complete = document.getElementById('content-wrapper').clientHeight - window.innerHeight;

    // Get the current scroll position as a percentage of the complete.
    calculation = (window.scrollY / complete * 100).toFixed(2);
    document.querySelector('.scroll-position').style.width = calculation + "%";
}
