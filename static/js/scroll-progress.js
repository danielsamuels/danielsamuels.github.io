const progressBar = document.querySelector(".scroll-position");
const header = document.querySelector(".site-header");

if (progressBar && header) {
    let animationFrame = null;

    const updateProgress = () => {
        document.documentElement.style.setProperty("--header-offset", `${header.offsetHeight}px`);

        const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        const progress = scrollableHeight === 0 ? 0 : Math.min(window.scrollY / scrollableHeight, 1);

        progressBar.style.transform = `scaleX(${progress})`;
        animationFrame = null;
    };

    const requestUpdate = () => {
        if (animationFrame === null) {
            animationFrame = requestAnimationFrame(updateProgress);
        }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
}
