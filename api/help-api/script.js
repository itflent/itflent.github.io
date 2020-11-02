document.addEventListener('keydown', (e) => {
  const help = document.querySelector('.js-help')
  if (e.code == 'KeyH')
    help.toggleAttribute('data-none')
})