$(document).ready(() => {
  // JavaScript
  ibg()
})

// functions
function ibg() {
  let ibg = document.querySelectorAll('.ibg')
  ibg.forEach(item => {
    if(item.querySelector('img'))
      item.style.backgroundImage = `url(${item.querySelector('img').getAttribute('src')})`
  })
}