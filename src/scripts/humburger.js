export const hamburger = (function () {
  document.querySelector('#header-dropdown').addEventListener('click',
    function () {
      document.querySelector('#nav-icon2').classList.toggle('open')})})()