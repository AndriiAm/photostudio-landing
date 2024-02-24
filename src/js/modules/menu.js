const menu = () => {
    const listTriggers = document.querySelectorAll(".list-trigger");
    const dropdownLists = document.querySelectorAll(".dropdown-list");

    listTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            listTriggers.forEach((item, i) => {
                if (item == e.target) {
                    (i === 2) ?
                        dropdownLists[i].classList.toggle("show--small-list") :
                        dropdownLists[i].classList.toggle("show--big-list");
                    listTriggers[i].classList.toggle("opened")
                }
            })
        })
    })

    const menuLinks = document.querySelectorAll("[data-goto]");

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        })

        function onMenuLinkClick(e) {
            const menuLink = e.target;

            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBLock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBLock.getBoundingClientRect().top + pageYOffset;

                if (iconMenu.classList.contains("_active")) {
                    document.body.classList.remove("_lock");
                    iconMenu.classList.remove("_active");
                    menuBody.classList.remove("_active");
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        }
    }

    const iconMenu = document.querySelector(".menu-icon");
    const menuBody = document.querySelector(".header__menu");

    if (iconMenu) {
        iconMenu.addEventListener("click", (e) => {
            document.body.classList.toggle("_lock");
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        })
    }
}

export default menu;