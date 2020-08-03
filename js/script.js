$(document).ready(() => {
  // JavaScript код здесь
  ibg()
})

// Функции здесь
function ibg() {
  let ibg = document.querySelectorAll('.ibg')
  ibg.forEach(item => {
    if(item.querySelector('img'))
      item.style.backgroundImage = `url(${item.querySelector('img').getAttribute('src')})`
  })
}