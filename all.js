let imgs = document.querySelectorAll('.list-item img')
let modal = document.querySelector('.modal')
let modalImage = document.querySelector('.modal-img img')
let closeButton = document.querySelector('#close-btn')
let [prev, next] = [document.querySelector('#prev'), document.querySelector('#next')]
let contentIndex = document.querySelector('#current-index')
let index

imgs.forEach(function (img, i) {
  img.addEventListener('click', (img) => {
    modalImage.src = img.target.src
    modal.style.display = "flex"
    index = i
    contentIndex.innerHTML = index + 1
    animation()
  })
})

let closeModal = function () {
  modal.style.display = "none"
}

let prevSlide = function () {
  index > 0 ? index-- : index = imgs.length - 1
  modalImage.src = imgs[index].src
  contentIndex.innerHTML = index + 1
  animation()
}

let nextSlide = function () {
  index < imgs.length - 1 ? index++ : index = 0
  modalImage.src = imgs[index].src
  contentIndex.innerHTML = index + 1
  animation()
}

let closeOutside = function (e) {
  if (e.target === modal) {
    modal.style.display = "none"
  }
}

let animation = function () {
  modalImage.classList.remove('active')
  setTimeout(() => {
    modalImage.classList.add('active')
  }, 200);
}

closeButton.addEventListener('click', closeModal)
prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)
window.addEventListener('click', closeOutside)
