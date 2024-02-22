// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: 41.628488, lng: -0.882957 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.querySelector(".searching-studio__map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
}

initMap();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    spaceBetween: 30
});

const sliderItems = document.querySelectorAll(".services__slider-item");
const example = document.querySelector(".big-example");
let exampleImage = document.querySelector(".big-example__img");

sliderItems.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        const timer = setTimeout(() => {
            item.removeEventListener("mouseleave", removeTimeout);
            exampleImage.remove();
            exampleImage = document.createElement("img");

            sliderItems.forEach((itemCopy, i) => {
                if (item === itemCopy) {
                    exampleImage.src = `images/services/${i+1}.png`;
                    exampleImage.classList.add("animation", "big-example__img");
                    example.append(exampleImage);
                }
            })}, 300);

        function removeTimeout () {
            clearTimeout(timer)
        }

        item.addEventListener("mouseleave", removeTimeout);
    })
})

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