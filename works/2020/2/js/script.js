$(document).ready(() => {
  // JavaScript
  ibg()

  $("img, a").on("dragstart", (e) => { e.preventDefault() })
})

// functions
function ibg() {
  let ibg = document.querySelectorAll('.ibg')
  ibg.forEach(item => {
    if(item.querySelector('img'))
      item.style.backgroundImage = `url(${item.querySelector('img').getAttribute('src')})`
  })
}