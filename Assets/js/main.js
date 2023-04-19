// Dichiara elementi html con variabili
const sliderElement = document.getElementById('slider'); 

// CREAZIONE E AGGIUNTA IMMAGINI DEL CAROSELLO

// Lista src immagini
const imgUrls = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp' ]

// Creazione immagini 
for (let i = 0; i < imgUrls.length; i++) {

    let currentImg = imgUrls[i];

    imgUrls[i] = document.createElement("img");
    imgUrls[i].alt = "slider-img";
    imgUrls[i].src = `./Assets/img/${currentImg}`;
    console.log(imgUrls[i].src);
    sliderElement.append(imgUrls[i]);

    if (i == 0) {
        imgUrls[i].classList.add('dBlock', 'slide');
    } else {
        imgUrls[i].classList.add('dNone', 'slide');
    }
}