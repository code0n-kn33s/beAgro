class Slider {
  constructor(target) {
    this.slider = target;
    this.gallery = this.slider.querySelector('.gallery');
    this.galleryItems = this.slider.querySelectorAll('.gallery-item');
    this.itemWidth = 24;

    this.featured = this.slider.querySelector('.featured-item');
    this.leftBtn = this.slider.querySelector('.move-btn.left');
    this.rightBtn = this.slider.querySelector('.move-btn.right');

    this.init()
  }
  setBg(item) {
    let background = item.querySelector('figure').style.backgroundImage

    this.featured.style.backgroundImage = background
  }
  selectItem(e) {
    let currentEl = e.target.parentElement

    if (currentEl.classList.contains('active')) return;

    this.setBg(currentEl)

    for (let i = 0; i < this.galleryItems.length; i++) {
      if (this.galleryItems[i].classList.contains('active'))
        this.galleryItems[i].classList.remove('active');
    }

    currentEl.classList.toggle('active');
  }
  slideLeft(e) {
    let nextElem = this.gallery.querySelector('.active').previousElementSibling
    let lastElem = this.gallery.lastChild
    let currentEl = this.gallery.querySelector('.active')

    currentEl.classList.remove('active')

    if(nextElem !== null) {
      nextElem.classList.add('active')
      this.setBg(nextElem)
    } else {
      lastElem.classList.add('active')
      this.setBg(lastElem)
    }

    e.stopPropagation()
  }
  slideRight(e) {
    let prevElem = this.gallery.querySelector('.active').nextElementSibling
    let firstElem = this.gallery.firstChild
    let currentEl = this.gallery.querySelector('.active')

    currentEl.classList.remove('active')

    if (prevElem !== null) {
      prevElem.classList.add('active')
      this.setBg(prevElem)
    } else {
      firstElem.classList.add('active')
      this.setBg(firstElem)
    }

    e.stopPropagation()
  }
  init() {
    this.setBg(this.galleryItems[0])
    this.leftBtn.addEventListener('click', this.slideLeft.bind(this) )
    this.rightBtn.addEventListener('click', this.slideRight.bind(this) )
    this.galleryItems.forEach( slide => slide.addEventListener('click', this.selectItem.bind(this)) )
  }
}

new Slider(document.querySelector('#slider1'))
new Slider(document.querySelector('#slider2'))
new Slider(document.querySelector('#slider3'))
