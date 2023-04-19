// Dichiara elementi html con variabili
const sliderElement = document.getElementById('slider');

// CREAZIONE E AGGIUNTA IMMAGINI DEL CAROSELLO

// Lista src immagini
const imgUrls = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp' ]

// Ciclo: Creazione immagini 
for (let i = 0; i < imgUrls.length; i++) {

    let currentImg = imgUrls[i];

    imgUrls[i] = document.createElement("img");
    imgUrls[i].alt = "slider-img";
    imgUrls[i].src = `./Assets/img/${currentImg}`;
    console.log(imgUrls[i].src);
    sliderElement.append(imgUrls[i]);

    if (i == 0) {
        imgUrls[i].classList.add('slide');
        imgUrls[i].setAttribute('id','firstImg');
    } else {
        imgUrls[i].classList.add('dNone', 'slide');
    }
}

// SCORRIMENTO IMMAGINI

// Dichiara elementi html con variabili
const slide = document.getElementsByClassName('slide');
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');
let currentSlide = 0;
btnBack.style.display = "none";

// Click sul Pulsante 'Next'
btnNext.addEventListener("click",
    function slideNext(){

        // Ciclo Next: Scorrimento immagini
        for (let i = 0; i < imgUrls.length; i++) {
            const slide = imgUrls[i];
            
            if (i == currentSlide+1) {
                slide.classList.remove('dNone');
            } else {
                slide.classList.add('dNone');
            }

        }

        // Incrementa il valore della Variabile currentSlide
        currentSlide++;

        // Visibilità Pulsanti
        if (currentSlide == 0) {
            btnBack.style.display = "none";
            btnNext.style.display = "block";
        } else if (currentSlide == imgUrls.length - 1) {
            btnNext.style.display = "none";
            btnBack.style.display = "block";
        } else {
            btnNext.style.display = "block";
            btnBack.style.display = "block";
        }

    }
);

// Click sul Pulsante 'Back'
btnBack.addEventListener("click",
    function slideBack() {

        // Ciclo Back: Scorrimento immagini
        for (let i = 0; i < imgUrls.length; i++) {
            const slide = imgUrls[i];

            if (i == currentSlide - 1) {
                slide.classList.remove('dNone');
            } else {
                slide.classList.add('dNone');
            }

        }

        // Decrementa il valore della Variabile currentSlide 
        currentSlide--;

        // Visibilità Pulsanti
        if (currentSlide == 0) {
            btnBack.style.display = "none";
            btnNext.style.display = "block";
        } else if (currentSlide == imgUrls.length - 1) {
            btnNext.style.display = "none";
            btnBack.style.display = "block";
        } else {
            btnNext.style.display = "block";
            btnBack.style.display = "block";
        }

    }
);