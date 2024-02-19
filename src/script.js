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

let screenWidth = window.innerWidth;

const links = document.querySelectorAll(".footer__list-link--short");

if (screenWidth < 768 && screenWidth >= 480) {
    links.forEach((item, i) => {
        if (item.innerText.length > 25) {
            item.innerText = item.innerText.slice(0, 25) + "...";
        }
    })
}

const listTriggers = document.querySelectorAll(".list-trigger");
const dropdownLists = document.querySelectorAll(".dropdown-list");

listTriggers.forEach((trigger, i) => {
    trigger.addEventListener("click", (e) => {
        listTriggers.forEach((item, i) => {
            if (item == e.target) {
                dropdownLists[i].classList.toggle("show");

                if (dropdownLists[i].classList.contains('show')) {
                    dropdownLists[i].style.maxHeight = dropdownLists[i].scrollHeight + "px";
                } else {
                    dropdownLists[i].style.maxHeight = null;
                }
            }
        })
    })
})
