const header = document.getElementById("header")
const openBtn = document.getElementById("mobile-open-btn")
const closeBtn = document.getElementById("mobile-close-btn")



openBtn.addEventListener('click', () => {
    header.classList.toggle('active')
    if (header.classList.contains('unactive')) header.classList.toggle('unactive')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    header.classList.toggle('active')
    header.classList.toggle('unactive')
    closeBtn.style.display = 'none'
    openBtn.style.display = 'block'
})