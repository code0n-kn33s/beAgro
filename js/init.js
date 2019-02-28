function bounce(element, transform) {
  element._side = "right";
  transition.begin(element, `transform  ${transform} 1s`, {
    beginFromCurrentValue: true
  })
}
function fadeBg(element) {
  transition.begin(element, ["background-color", "#ffffff", "#376217", "500ms", "ease"]);
}
setTimeout(() => {
  bounce(document.querySelector('.header-bottom-text'), 'translateY(100px)')
}, 500);
setTimeout(() => {
  bounce(document.querySelector('#geography-line'), 'translateX(100%)')
}, 500);

setTimeout(() => {
  document.querySelectorAll('.steps-item-top-id').forEach(e => fadeBg(e))
  document.querySelectorAll('.production-item-id').forEach(e => fadeBg(e))
}, 300);

setTimeout(() => {
  document.querySelectorAll('.steps-item-top-solution span')
    .forEach(e => {
      transition.begin(e,
        ["color", "#ffffff", "#333", "500ms", "ease-out"])
      bounce(e, 'translateX(0%)')
    })
  document.querySelectorAll('.production-item-text span')
    .forEach(e => {
      transition.begin(e,
        ["color", "#ffffff", "#333", "500ms", "ease-out"])
      bounce(e, 'translateX(0%)')
    })
}, 1000);

setTimeout(() => {
  document.querySelectorAll('.steps-item-bottom')
    .forEach(e => bounce(e, 'translateY(0%)'))
  document.querySelectorAll('.production-item-img')
    .forEach(e => bounce(e, 'translateY(0%)'))
}, 1500);

setTimeout(() => {
  transition.begin(document.querySelector('#photo-team img'), ["opacity", "0", "1", "1000ms", "ease"]);
}, 500);
setTimeout(() => {
  bounce(document.querySelector('.team-description'), 'translateY(0px)')
}, 700);
// var waypoint = new Waypoint({
//   element: document.querySelector('#geography-line'),
//   handler: function (direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

// waypoint()