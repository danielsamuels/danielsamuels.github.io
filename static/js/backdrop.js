// We need to fill up the backdrop container with the initial logos.
backdrop = document.getElementById('backdrop');
contents = document.getElementById('contents');

image_width = 273;
image_height = 90;

image_string_0 = '<img src="/static/images/python.svg" height="50"><img src="/static/images/django.svg" height="50">';
image_string_1 = '<img src="/static/images/django.svg" height="50"><img src="/static/images/python.svg" height="50">';

function build_backdrop() {
    // Divide the contents height by the image height.
    vertical = Math.ceil((document.body.clientHeight - 95) / image_height);

    // Divide the contents width by the image width.
    horizontal = Math.ceil(document.body.clientWidth/ image_width) + 2;

    contents.style.width = horizontal * image_width + "px";
    contents.style.height = vertical * image_height + "px";

    output = []
    for (var row = 1; row <= vertical; row++) {
        string = window['image_string_' + row % 2]


        if (row % 2 === 0) {
            output.push('<div class="row" style="margin-left: -214px;">');
        }
        else {
            output.push('<div class="row">');
        }

        for (var column = 1; column <= horizontal; column++) {
            output.push(string)
        }
        output.push('</div>');
    }

    contents.innerHTML = output.join("")
}

function rebuild_backdrop() {
    contents.innerHTML = '';
    build_backdrop();
}

window.addEventListener('resize', function () {
    rebuild_backdrop();
});

build_backdrop();
