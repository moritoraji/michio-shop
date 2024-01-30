export function acodion() {
  const faq = document.querySelectorAll('.js-accordion')
  function showToggle() {
    const content = this.nextElementSibling
    content.classList.toggle('is-open')
    const faq = this
    faq.classList.toggle('is-open')
  
    if (content.style.height) {
      content.style.height = null
    } else {
      content.style.height = content.scrollHeight + 'px'
    }
  }
  
  for (let i = 0; i < faq.length; i++) {
    // for文でjs-acメニューをループ処理
    faq[i].addEventListener('click', showToggle)
  }
}
