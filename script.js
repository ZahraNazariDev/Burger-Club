
//header//

const menu = document.querySelector('.menu')
const closeIcon = document.querySelector('.close')
const list = document.querySelector('.list')

menu.addEventListener('click', showList)

function showList() {
    menu.classList.add('hidden')
    closeIcon.classList.remove('hidden')
    list.style.height = '245px'
}


closeIcon.addEventListener('click', hideList)

function hideList() {
    menu.classList.remove('hidden')
    closeIcon.classList.add('hidden')
    list.style.height = '0'
}

//imgs//

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')


const png1 = document.querySelector('.png1')
const png2 = document.querySelector('.png2')
const png3 = document.querySelector('.png3')
const png4 = document.querySelector('.png4')

img2.addEventListener('click', showimg)
img3.addEventListener('click', showphoto)
img4.addEventListener('click', showpic)
img1.addEventListener('click', showpng)


function showpng() {
    png1.classList.remove('hidden')
    png4.classList.add('hidden')
    png3.classList.add('hidden')
    png2.classList.add('hidden')

}

function showimg() {
    png1.classList.add('hidden')
    png2.classList.remove('hidden')
    png4.classList.add('hidden')
    png3.classList.add('hidden')
}

function showphoto() {
    png2.classList.add('hidden')
    png3.classList.remove('hidden')
    png4.classList.add('hidden')
    png1.classList.add('hidden')
}
function showpic() {
    png3.classList.add('hidden')
    png4.classList.remove('hidden')
    png2.classList.add('hidden')
    png1.classList.add('hidden')
}



let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//input//

const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const inp3 = document.querySelector('#inp3')
const inp4 = document.querySelector('#inp4')
const inp5 = document.querySelector('#inp5')


inp1.addEventListener('input', () => {

    if (inp1.value.length > 10) {
        let copy = inp1.value.slice(0, 10)
        inp1.value = copy
    }

})


inp2.addEventListener('input', () => {
    if (inp2.value.length > 10) {
        let copy = inp2.value.slice(0, 10)
        inp2.value = copy
    }
})


inp3.addEventListener('input', () => {
    if (inp3.value.length > 20) {
        let copy = inp3.value.slice(0, 20)
        inp3.value = copy
    }
})

inp4.addEventListener('input', () => {
    if (inp4.value.length > 15) {
        let copy = inp4.value.slice(0, 15)
        inp4.value = copy
    }
})

inp5.addEventListener('input', () => {
    if (inp5.value.length > 30) {
        let copy = inp5.value.slice(0, 30)
        inp5.value = copy
    }
})


