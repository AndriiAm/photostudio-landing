const slider = () => {
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
}

export default slider;