$(document).ready(() => {
  // JavaScript код здесь
  ibg()

  $('.gallery-list').slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 4500,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3500,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 3000,
        }
      }
    ]
  })

  $('.gallery-slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})

// Функции здесь
function ibg() {
  let ibg = document.querySelectorAll('.ibg')
  ibg.forEach(item => {
    if(item.querySelector('img'))
      item.style.backgroundImage = `url(${item.querySelector('img').getAttribute('src')})`
  })
}