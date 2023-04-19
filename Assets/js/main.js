// Dichiara elementi html con variabili
const sliderElement = document.getElementById('slider');
const imagesBarElement = document.getElementById('imagesBar');

// CREAZIONE E AGGIUNTA IMMAGINI DEL CAROSELLO

// Lista src immagini
const imgUrls = ['./Assets/img/01.webp', './Assets/img/02.webp', './Assets/img/03.webp', './Assets/img/04.webp', './Assets/img/05.webp']

// Ciclo: Creazione immagini Slider
for (let i = 0; i < imgUrls.length; i++) {

    let currentImg = imgUrls[i];

    imgUrls[i] = document.createElement("img");
    imgUrls[i].alt = "slider-img";
    // imgUrls[i].src = `./Assets/img/${currentImg}`;
    imgUrls[i].setAttribute("src", `${currentImg}`);
    console.log(imgUrls[i].src);
    sliderElement.append(imgUrls[i]);

    if (i == 0) {
        imgUrls[i].classList.add('slide');
        imgUrls[i].setAttribute('id','firstImg');
    } else {
        imgUrls[i].classList.add('dNone', 'slide');
        if (i == imgUrls.length-1) {
            imgUrls[i].setAttribute('id', 'lastImg');
        }
    }
}

// Lista src immagini per Barra (se utilizzo il medesimo array 'imgUrls' non funziona)
const imgUrlsBar = ['./Assets/img/01.webp', './Assets/img/02.webp', './Assets/img/03.webp', './Assets/img/04.webp', './Assets/img/05.webp']

// Ciclo: Creazione immagini Barra
for (let i = 0; i < imgUrlsBar.length; i++) {

    let currentImg = imgUrlsBar[i];

    imgUrlsBar[i] = document.createElement("div");
    imgUrlsBar[i].classList.add('w100Perc', 'imagesBarCard');
    imgUrlsBar[i].setAttribute("src", `${currentImg}`);
    imgUrlsBar[i].style.backgroundImage = `url("${currentImg}")`;
    imagesBarElement.append(imgUrlsBar[i]);

    if (i == 0) {
        imgUrlsBar[i].classList.add('active');
    } else {
        imgUrlsBar[i].classList.add('inactive');
    }
}

// SCORRIMENTO IMMAGINI

// Dichiara elementi html con variabili
const slide = document.getElementsByClassName('slide');
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');
let currentSlide = 0;
// btnBack.style.display = "none";

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

        // Incrementa il valore della Variabile currentSlide, crea Loop
        if (currentSlide == imgUrls.length-1) {
            document.getElementById('firstImg').classList.remove('dNone');
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        /* // Visibilità Pulsanti
        if (currentSlide == 0) {
            btnBack.style.display = "none";
            btnNext.style.display = "block";
        } else if (currentSlide == imgUrls.length - 1) {
            btnNext.style.display = "none";
            btnBack.style.display = "block";
        } else {
            btnNext.style.display = "block";
            btnBack.style.display = "block";
        } */

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

        // Decrementa il valore della Variabile currentSlide, crea Loop
        if (currentSlide == 0) {
            console.log(currentSlide);
            document.getElementById('lastImg').classList.remove('dNone');
            currentSlide = imgUrls.length-1;
        } else {
            currentSlide--;
        }

        /* // Visibilità Pulsanti
        if (currentSlide == 0) {
            btnBack.style.display = "none";
            btnNext.style.display = "block";
        } else if (currentSlide == imgUrls.length - 1) {
            btnNext.style.display = "none";
            btnBack.style.display = "block";
        } else {
            btnNext.style.display = "block";
            btnBack.style.display = "block";
        } */

    }
);