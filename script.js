const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        }else{
            entry.target.classList.remove("show2")
        }
    })
})

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer2.observe(el))


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

let innovations = document.querySelector(".innovations")

let temp = document.getElementsByTagName("template")[0]
let clone = temp.content.cloneNode(true)


const imgsInContent = clone.querySelectorAll(".imgInContent");
const links = clone.querySelectorAll(".explore_innovation");

const first_in_a = clone.querySelector(".first_in_a")
const second_in_a = clone.querySelector(".second_in_a")
const third_in_a = clone.querySelector(".third_in_a")
const fourth_in_a = clone.querySelector(".fourth_in_a")

function showPhisic(){
    imgsInContent[0].src = "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[0].href = "https://nplus1.ru/news/2024/03/11/submg-particle-gravitation"
    first_in_a.textContent = "Физики измерили гравитацию субмиллиграммовой частицы"

    imgsInContent[1].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[1].href = "https://nplus1.ru/news/2024/03/02/proton-strangeness"
    second_in_a.textContent = "Физики уточнили странность протона"

    imgsInContent[2].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[2].href = "https://nplus1.ru/news/2024/02/19/schroedinger-cats"
    third_in_a.textContent = "Физики заставили танцевать котов Шрёдингера"

    imgsInContent[3].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[3].href = "https://nplus1.ru/news/2024/02/19/five-new-isotopes"
    fourth_in_a.textContent = "Физики зарегистрировали пять новых изотопов"

    innovations.appendChild(clone);
}

function showMath(){
    imgsInContent[0].src = "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[0].href = "https://nplus1.ru/news/2023/12/02/sch-china-math"
    first_in_a.textContent = "Российские школьники завоевали три золотые медали на Китайской олимпиаде по математике"

    imgsInContent[1].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[1].href = "https://nplus1.ru/news/2023/03/22/aperiodic-tile"
    second_in_a.textContent = "Математики нашли многоугольник для апериодического паркета"

    imgsInContent[2].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[2].href = "https://nplus1.ru/news/2023/06/27/dedekind-nine"
    third_in_a.textContent = "Математики нашли девятое дедекиндово число. В нем оказалось 42 знака"

    imgsInContent[3].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[3].href = "https://nplus1.ru/news/2023/06/26/childcare-stem"
    fourth_in_a.textContent = "Ответственное родительство связали с успехами детей в инженерии и математике"

    innovations.appendChild(clone);
}

function showHistory(){
    imgsInContent[0].src = "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[0].href = "https://nplus1.ru/blog/2023/11/10/histoire-de-la-fatigue"
    first_in_a.textContent = "История усталости от Средневековья до наших дней"

    imgsInContent[1].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[1].href = "https://nplus1.ru/blog/2024/01/10/crusaders"
    second_in_a.textContent = "Крестоносцы: Полная история"

    imgsInContent[2].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[2].href = "https://nplus1.ru/blog/2023/07/03/pirates-a-new-history"
    third_in_a.textContent = "История пиратства: от викингов до наших дней"

    imgsInContent[3].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[3].href = "https://nplus1.ru/blog/2023/07/20/inventing-human-rights"
    fourth_in_a.textContent = "Изобретение прав человека: история"

    innovations.appendChild(clone);
}

function showChemistry(){
    imgsInContent[0].src = "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[0].href = "https://nplus1.ru/blog/2022/05/19/chemical-laboratory"
    first_in_a.textContent = "Лаборатория химических историй. От электрона до молекулярных машин"

    imgsInContent[1].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[1].href = "https://nplus1.ru/blog/2023/08/11/what-happened-to-the-climate"
    second_in_a.textContent = "Что случилось с климатом"

    imgsInContent[2].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[2].href = "https://nplus1.ru/news/2023/03/09/menthol-from-citral"
    third_in_a.textContent = "Химики получили ментол из цитраля в две стадии"

    imgsInContent[3].src =  "img/main/" + getRandomInt(1, 20).toString() + ".jpeg"
    links[3].href = "https://nplus1.ru/material/2022/11/02/dna-computations"
    fourth_in_a.textContent = "Почему не получились ДНК-компьютеры"

    innovations.appendChild(clone);
}