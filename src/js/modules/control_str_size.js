const control_str_size = () => {
    const links = document.querySelectorAll(".footer__list-link--resources");
    let linksCopy = [];
    let screenWidth = window.innerWidth;

    links.forEach((item, i) => {
        linksCopy[i] = item.innerText;
    })

    changeStringSize(links);

    window.addEventListener("resize", () => {
        screenWidth = window.innerWidth;
        changeStringSize(links);
    })

    function changeStringSize (array) {
        array.forEach((item, i) => {
            if (screenWidth < 768) {
                if (item.innerText.length > 25) {
                    item.innerText = item.innerText.slice(0, 25) + "...";
                }
            } else {
                item.innerText = linksCopy[i];
            }
        })
    }
}

export default control_str_size;