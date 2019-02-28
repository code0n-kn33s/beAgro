function bounce(element, transform) {
  element._side = "right";
  transition.begin(element, `transform  ${transform} 1s`, {
    beginFromCurrentValue: true
  })
}
function fadeBg(element) {
  transition.begin(element, ["background-color", "#ffffff", "#376217", "500ms", "ease"]);
}
$('.ml10 .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
})

// header
anime.timeline({ loop: false })
  .add({
    targets: '#header-bottom-title .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function (el, i) {
      return 45 * i;
    }
  })

setTimeout(() => {
  bounce(document.querySelector('.header-bottom-text'), 'translateY(100px)')
}, 600);

//about
var about = new Waypoint({
  element: document.getElementById('goods-title'),
  handler: function (direction) {
    anime.timeline({ loop: false })
      .add({
        targets: '#goods-title .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: function (el, i) {
          return 45 * i;
        }
      })
  },
  offset: '500px'
})

//steps
var steps = new Waypoint({
  element: document.getElementById('steps-title'),
  offset: '500px',
  handler: function (down) {
    anime.timeline({ loop: false })
    .add({
      targets: '#steps-title .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: function (el, i) {
        return 45 * i;
      }
    })
    setTimeout(() => {
      document.querySelectorAll('.steps-item-top-id').forEach(e => fadeBg(e))
    }, 200);

    setTimeout(() => {
      document.querySelectorAll('.steps-item-top-solution span')
        .forEach(e => {
          transition.begin(e,
            ["color", "#ffffff", "#333", "500ms", "ease-out"])
          bounce(e, 'translateX(0%)')
        })
    }, 400);

    setTimeout(() => {
      document.querySelectorAll('.steps-item-bottom')
        .forEach(e => bounce(e, 'translateY(0%)'))
    }, 600);
  }
})

//production
var production = new Waypoint({
  element: document.getElementById('production-title'),
  handler: function (direction) {
    anime.timeline({ loop: false })
      .add({
        targets: '#production-title .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: function (el, i) {
          return 45 * i;
        }
      })
    setTimeout(() => {
      document.querySelectorAll('.production-item-id').forEach(e => fadeBg(e))
    }, 200);

    setTimeout(() => {
      document.querySelectorAll('.production-item-text span')
        .forEach(e => {
          transition.begin(e,
            ["color", "#ffffff", "#333", "500ms", "ease-out"])
          bounce(e, 'translateX(0%)')
        })
    }, 400);

    setTimeout(() => {
      document.querySelectorAll('.production-item-img')
        .forEach(e => bounce(e, 'translateY(0%)'))
    }, 600);
  },
  offset: '500px'
})

//geography
var geographyLine = new Waypoint({
  element: document.getElementById('geography-line'),
  handler: function (direction) {
    setTimeout(() => {
      bounce(document.querySelector('#geography-line'), 'translateX(100%)')
    }, 300);
  },
  offset: '500px'
})

// team
var team = new Waypoint({
  element: document.getElementById('photo-team'),
  handler: function (direction) {
    setTimeout(() => {
      transition.begin(document.querySelector('#photo-team img'), ["opacity", "0", "1", "1000ms", "ease"]);
    }, 200);
    setTimeout(() => {
      bounce(document.querySelector('.team-description'), 'translateY(0px)')
    }, 500);

    waypoint.destroy()
  },
  offset: '500px'
})