"use strict";

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    const AllCard = document.querySelectorAll(".Card");

    AllCard.forEach((buttonCards) => {
        buttonCards.addEventListener("click", () => {
            let NumCard = buttonCards.id;
            window.location.href = `infCard.html?carta=${NumCard}`;
        });
    });

    /*variables let */

});