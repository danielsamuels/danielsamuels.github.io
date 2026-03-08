const wrapTables = () => {
    const contentWrapper = document.querySelector("#content-wrapper");

    if (!contentWrapper) {
        return;
    }

    for (const table of contentWrapper.querySelectorAll("table")) {
        if (table.parentElement?.classList.contains("table-scroll") || !table.parentNode) {
            continue;
        }

        const wrapper = document.createElement("div");
        wrapper.className = "table-scroll";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wrapTables, { once: true });
} else {
    wrapTables();
}
