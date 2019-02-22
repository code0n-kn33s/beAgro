export const bublingLable = (function () {
  document.querySelectorAll('.floatLabel').forEach(input => {
    input.addEventListener('focus', function () {
      this.nextElementSibling.classList.toggle('active')
    })
    input.addEventListener('blur', function () {
      this.nextElementSibling.classList.toggle('active')
    })
  })
})()