const contents = document.getElementById("contents");
const header = document.querySelector(".site-header");

if (contents) {
    const imageWidth = 273;
    const imageHeight = 90;
    const logoRows = [
        [
            '<img src="/static/images/django.svg" height="50" alt="" aria-hidden="true">',
            '<img src="/static/images/python.svg" height="50" alt="" aria-hidden="true">'
        ],
        [
            '<img src="/static/images/python.svg" height="50" alt="" aria-hidden="true">',
            '<img src="/static/images/django.svg" height="50" alt="" aria-hidden="true">'
        ]
    ];

    const buildBackdrop = () => {
        const headerHeight = header ? header.offsetHeight : 0;
        const vertical = Math.ceil((window.innerHeight - headerHeight) / imageHeight) + 1;
        const horizontal = Math.ceil(window.innerWidth / imageWidth) + 2;
        const output = [];

        contents.style.width = `${horizontal * imageWidth}px`;
        contents.style.height = `${vertical * imageHeight}px`;

        for (let row = 0; row < vertical; row += 1) {
            const rowImages = logoRows[row % logoRows.length];
            output.push(row % 2 === 1 ? '<div class="row" style="margin-left: -214px;">' : '<div class="row">');

            for (let column = 0; column < horizontal; column += 1) {
                output.push(rowImages.join(""));
            }

            output.push("</div>");
        }

        contents.innerHTML = output.join("");
    };

    let resizeFrame = null;

    const rebuildBackdrop = () => {
        if (resizeFrame !== null) {
            cancelAnimationFrame(resizeFrame);
        }

        resizeFrame = requestAnimationFrame(() => {
            buildBackdrop();
            resizeFrame = null;
        });
    };

    window.addEventListener("resize", rebuildBackdrop);
    buildBackdrop();
}
