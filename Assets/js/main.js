/*********************************************
                VARIABLES
*********************************************/

const sliderElement = document.getElementById('slider');
const imagesBarElement = document.getElementById('imagesBar');
const slide = document.getElementsByClassName('slide');
const card = document.querySelectorAll(".imagesBarCard");
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');
let currentSlide = 0;
var imgNumb = 0;

// CREAZIONE E AGGIUNTA IMMAGINI DEL CAROSELLO

// Lista src immagini Slide (Array) 
const imgUrls = [
    './Assets/img/01.webp', 
    './Assets/img/02.webp', 
    './Assets/img/03.webp', 
    './Assets/img/04.webp', 
    './Assets/img/05.webp', 
    './Assets/img/01.webp', 
    './Assets/img/02.webp', 
    './Assets/img/03.webp', 
    './Assets/img/04.webp', 
    './Assets/img/05.webp'
];

// Lista src immagini Thumbnails (Array) 
// (se utilizzo il medesimo Array, alcune logiche non funzionano correttamente, per esempio lo scorrimento immagini con pulsanti Back/Next)
const imgUrlsBar = [
    './Assets/img/01.webp',
    './Assets/img/02.webp',
    './Assets/img/03.webp',
    './Assets/img/04.webp',
    './Assets/img/05.webp',
    './Assets/img/01.webp',
    './Assets/img/02.webp',
    './Assets/img/03.webp',
    './Assets/img/04.webp',
    './Assets/img/05.webp'
];

/*********************************************
                INIT
*********************************************/

// Ciclo: Creazione immagini Slider da Array 'imgUrls'
for (let i = 0; i < imgUrls.length; i++) {

    let currentImg = imgUrls[i];

    // Creazioni Immagini Slider
    imgUrls[i] = document.createElement("img");
    imgUrls[i].alt = "slider-img";
    imgUrls[i].setAttribute("id", `img-${i}`);
    imgUrls[i].setAttribute("src", `${currentImg}`);
    sliderElement.append(imgUrls[i]);

    // Gestione Condinazionale Immagini
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

// Ciclo: Creazione Thumbnails Barra da Array 'imgUrls'
// (Affinché funzioni, bisogna sostituire nel ciclo 'Creazione immagini Slider', imgUrls[i] con variabile tipo 'imgSlide'. Però poi attenzione perché lo scorrimento immagini con pulsanti non funziona.)
// for (let i = 0; i < imgUrls.length; i++) {

//     let currentImgBar = imgUrls[i];

//     // Creazione Immagini Thumbnails Barra
//     const thumb = document.createElement("div");
//     thumb.classList.add('w100Perc', 'imagesBarCard', 'cPointer');
//     // thumb.setAttribute("src", `${currentImgBar}`);
//     thumb.setAttribute("id", `imgBar-${i}`);
//     // thumb.setAttribute("value", `${i}`);
//     thumb.style.backgroundImage = `url("${currentImgBar}")`;
//     thumb.style.height = `calc( 100% / ${imgUrls.length} * 3)`;
//     thumb.style.backgroundSize = "cover";
//     thumb.style.backgroundPosition = "center";
//     imagesBarElement.append(thumb);

//     // Gestione Condinazionale Immagini
//     if (i == 0) {
//         thumb.classList.add('active');
//         thumb.setAttribute('id', 'firstImgBar');
//         document.getElementById('firstImgBar').style.marginTop = "-26px";
//     } else {
//         thumb.classList.add('inactive');
//         if (i == imgUrls.length - 1) {
//             thumb.setAttribute('id', 'lastImgBar');
//             document.getElementById('lastImgBar').style.marginBottom = "26px";
//         }
//     }
// }

// Ciclo: Creazione immagini Thumbnails Barra da Array 'imgUrlsBar'
for (let i = 0; i < imgUrlsBar.length; i++) {

    let currentImg = imgUrlsBar[i];

    imgUrlsBar[i] = document.createElement("div");
    imgUrlsBar[i].classList.add('w100Perc', 'imagesBarCard' ,'cPointer');
    imgUrlsBar[i].setAttribute("src", `${currentImg}`);
    imgUrlsBar[i].setAttribute("id", `imgBar-${i}`);
    // imgUrlsBar[i].setAttribute("value", `${i}`);
    imgUrlsBar[i].style.backgroundImage = `url("${currentImg}")`;
    imgUrlsBar[i].style.height = `calc( 100% / ${imgUrlsBar.length} * 3)`;
    imgUrlsBar[i].style.backgroundSize = "cover";
    imgUrlsBar[i].style.backgroundPosition = "center";
    imagesBarElement.append(imgUrlsBar[i]);

    if (i == 0) {
        imgUrlsBar[i].classList.add('active');
        imgUrlsBar[i].setAttribute('id', 'firstImgBar');
        document.getElementById('firstImgBar').style.marginTop = "-26px";
    } else {
        imgUrlsBar[i].classList.add('inactive');
        if (i == imgUrlsBar.length - 1) {
            imgUrlsBar[i].setAttribute('id', 'lastImgBar');
            document.getElementById('lastImgBar').style.marginBottom = "26px";
        }
    }
}

// btnBack.style.display = "none";

/*********************************************
                EVENTS
*********************************************/

// SCORRIMENTO IMMAGINI

// Click sul Pulsante 'Next'
btnNext.addEventListener("click",
    function slideNext(){

        // Ciclo Next: Scorrimento immagini
        for (let i = 0; i < imgUrls.length; i++) {
            const slide = imgUrls[i];
            // console.log(slide);
            const card = imgUrlsBar[i];
            // console.log(card);
            
            if (i == currentSlide+1) {
                slide.classList.remove('dNone');
                card.classList.remove('inactive');
                card.classList.add('active');
            } else {
                slide.classList.add('dNone');
                card.classList.add('inactive');
                card.classList.remove('active');
            }

        }

        // Incrementa il valore della Variabile currentSlide, crea Loop
        if (currentSlide == imgUrls.length-1) {
            document.getElementById('firstImg').classList.remove('dNone');
            document.getElementById('firstImgBar').classList.remove('inactive');
            document.getElementById('firstImgBar').classList.add('active');
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
            const card = imgUrlsBar[i];

            if (i == currentSlide - 1) {
                slide.classList.remove('dNone');
                card.classList.remove('inactive');
                card.classList.add('active');
            } else {
                slide.classList.add('dNone');
                card.classList.add('inactive');
                card.classList.remove('active');
            }

        }

        // Decrementa il valore della Variabile currentSlide, crea Loop
        if (currentSlide == 0) {
            document.getElementById('lastImg').classList.remove('dNone');
            document.getElementById('lastImgBar').classList.remove('inactive');
            document.getElementById('lastImgBar').classList.add('active');
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

// CLICK SULLE SINGOLE IMMAGINI THUMBNAILS DI IMAGESBAR
// Funzione All Img
function cardBarClick() {
    document.querySelector(".active").classList.add('inactive');
    document.querySelector('img[class="slide"]').classList.add('dNone');
    document.querySelector(".active").classList.remove('active');
}

// Funzione First Img
function cardClickFirstImg() {
    document.getElementById('firstImgBar').classList.add('active');
    document.getElementById('firstImgBar').classList.remove('inactive');
    document.getElementById('firstImg').classList.remove('dNone');
    currentSlide = 0;
}

// Funzione All Imgs (First and Last Excluded)
function cardClickImgs() {
    document.getElementById(`imgBar-${imgNumb}`).classList.add('active');
    document.getElementById(`imgBar-${imgNumb}`).classList.remove('inactive');
    document.getElementById(`img-${imgNumb}`).classList.remove('dNone');
    currentSlide = imgNumb;
}

// Funzione Last Img
function cardClickLastImg() {
    document.getElementById('lastImgBar').classList.add('active');
    document.getElementById('lastImgBar').classList.remove('inactive');
    document.getElementById('lastImg').classList.remove('dNone');
    currentSlide = 9;
}

// Click 1° Img Slide Bar
document.getElementById('firstImgBar').addEventListener("click", () => {
    cardBarClick();
    cardClickFirstImg();
});

// Click 2° Img Slide Bar
document.getElementById('imgBar-1').addEventListener("click", function () { imgNumb = 1; });
document.getElementById('imgBar-1').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 3° Img Slide Bar
document.getElementById('imgBar-2').addEventListener("click", function() { imgNumb = 2; });
document.getElementById('imgBar-2').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 4° Img Slide Bar
document.getElementById('imgBar-3').addEventListener("click", function () { imgNumb = 3; });
document.getElementById('imgBar-3').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 5° Img Slide Bar
document.getElementById('imgBar-4').addEventListener("click", function () { imgNumb = 4; });
document.getElementById('imgBar-4').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 6° Img Slide Bar
document.getElementById('imgBar-5').addEventListener("click", function () { imgNumb = 5; });
document.getElementById('imgBar-5').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 7° Img Slide Bar
document.getElementById('imgBar-6').addEventListener("click", function () { imgNumb = 6; });
document.getElementById('imgBar-6').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 8° Img Slide Bar
document.getElementById('imgBar-7').addEventListener("click", function () { imgNumb = 7; });
document.getElementById('imgBar-7').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 9° Img Slide Bar
document.getElementById('imgBar-8').addEventListener("click", function () { imgNumb = 8; });
document.getElementById('imgBar-8').addEventListener("click", () => {
    cardBarClick();
    cardClickImgs();
});

// Click 10° Img Slide Bar
document.getElementById('lastImgBar').addEventListener("click", () => {
    cardBarClick();
    cardClickLastImg();
});