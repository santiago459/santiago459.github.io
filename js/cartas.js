"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const moreInformationTitle = document.querySelector(".more-information-title");
    const moreInformationParrafo = document.querySelector(".main-P");
    const conteinerImg = document.querySelector(".conteiner-conteiner-img");

    const urlParams = new URLSearchParams(window.location.search);
    const cartaValue = parseInt(urlParams.get("carta"));

    fetch("../json/informacion.json")
        .then(response => response.json())
        .then(data => {
            displayInformation(data, cartaValue);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });

    function displayInformation(data, cartaValue) {
        let title;
        let parrafo;
        let imgArray;
        switch (cartaValue) {
            case 1:
                title = data.tituloOne;
                imgArray = data.imgOne;
                break;
            case 2:
                title = data.tituloTwo;
                parrafo = data.parrafotwo;
                imgArray = data.imgTwo;
                break;
            case 3:
                title = data.tituloThree;
                parrafo = data.parrafoThree;
                imgArray = data.imgThree;
                break;
            case 4:
                title = data.tituloFour;
                parrafo = data.parrafoFour;
                imgArray = data.imgFour;
                moreInformationTitle.style = ` font-size: 40px`
                break;
            case 5:
                title = data.tituloFive;
                parrafo = data.parraFofive;
                imgArray = data.imgFive;
                break;
            case 6:
                title = data.tituloSix;
                parrafo = data.parrafoSix;
                imgArray = data.imgSix;
                moreInformationTitle.style = `font-size:35px`;
                moreInformationParrafo.style = `font-size:22px`
                break;
            default:
                console.error("Invalid carta value");
                return;
        }
        try {
            moreInformationTitle.innerHTML = title;
            if (cartaValue === 1) {
                const newImg = document.createElement("img");
                newImg.setAttribute("src", "../img/imgtwo/table-card-1.jpg");
                newImg.classList.add("img");
                moreInformationParrafo.appendChild(newImg);
            } else { moreInformationParrafo.innerHTML = parrafo; }
            imgArray.forEach(imgSrc => {
                const containerImg = document.createElement("div");
                const newImg = document.createElement("img");
                containerImg.appendChild(newImg);
                containerImg.classList.add("C-I")
                newImg.setAttribute("src", imgSrc);
                newImg.classList.add("item-img-gallery");
                conteinerImg.appendChild(containerImg);
                newImg.addEventListener("click", () => {
                    containerImg.classList.toggle("open-container-img");
                    newImg.classList.toggle("open-img");
                })
            });
        } catch (err) {
            document.body.style = `display:flex; width:100%; height:100vh;justify-content:center;align-items:center`;
            document.write(`se ha producido un error de cargar de multimedia ${err} porfarvor reincie la pagina`)
        }

    }
});