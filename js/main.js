// Slaider 
const indicators = document.querySelectorAll(".slaider__indicators");
const banners = document.querySelector(".slaider__images");
const slider = document.querySelector('.slaider');
const prev = document.querySelector(".prev-arrow");
const next = document.querySelector(".next-arrow");
const slides = Array.from(banners.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prev.addEventListener('click', showPreviousSlide);
next.addEventListener('click', showNextSlide);



// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
            let indicator = document.querySelector(`.slaider__indicator${index+1}`);
            document.querySelector(`.slaider__indicators .active`).classList.remove("active");
            indicator.classList.add("active");
        } else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера
updateSlider();

//Форма поиска

function formSearchBy() {

    let searchByNumber = document.querySelector('.by-number')
    let searchByMark = document.querySelector('.by-mark')
    let searchByName = document.querySelector('.by-name')
    let inputBySearch = document.querySelector('.input-by-search')
    let labelsSearch = document.querySelectorAll('.by-search');
    labelsSearch.forEach ((label) =>{
        if (label == searchByNumber) {
            searchByNumber.onclick = function(){
                document.querySelector('.by-search .active-label').classList.remove('active-label')
                this.classList.add('active-label')
                inputBySearch.setAttribute('type', "number")
                inputBySearch.setAttribute('placeholder', "Введите номер товара")
                inputBySearch.setAttribute('name', "number")
            }
            
        }
        else if (label == searchByMark) {
            searchByMark.onclick = function(){
                document.querySelector('.by-search .active-label').classList.remove('active-label')
                this.classList.add('active-label')
                inputBySearch.setAttribute('type', "text")
                inputBySearch.setAttribute('placeholder', "Введите марку товара")
                inputBySearch.setAttribute('name', "mark")
            }
        }
        else if (label == searchByName) {
            searchByName.onclick = function(){
                document.querySelector('.by-search .active-label').classList.remove('active-label')
                this.classList.add('active-label')
                inputBySearch.setAttribute('type', "text")
                inputBySearch.setAttribute('placeholder', "Введите название товара")
                inputBySearch.setAttribute('name', "name")
            }
        }
    })
}
formSearchBy();

