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
        let currentEl = e.target.parentElement.querySelector('.gallery .active')
        let prevElem = currentEl.previousElementSibling
        let firstElem = currentEl.parentElement.querySelectorAll('.gallery-item')[0]
        let len = currentEl.parentElement.querySelectorAll('.gallery-item').length - 1
        let lastElem = currentEl.parentElement.querySelectorAll('.gallery-item')[len]

        if (currentEl === firstElem) {
            lastElem.classList.add('active');
            this.setBg(lastElem)
        } else {
            prevElem.classList.add('active');
            this.setBg(prevElem)
        }
        currentEl.classList.toggle('active')
    }
    slideRight(e) {
        let currentEl = e.target.parentElement.querySelector('.gallery .active')
        let nextElem = currentEl.nextElementSibling
        let firstElem = currentEl.parentElement.querySelectorAll('.gallery-item')[0]
        let len = currentEl.parentElement.querySelectorAll('.gallery-item').length - 1
        let lastElem = currentEl.parentElement.querySelectorAll('.gallery-item')[len]

        if (currentEl === lastElem) {
            firstElem.classList.add('active')
            this.setBg(firstElem)
        } else {
            nextElem.classList.add('active')
            this.setBg(nextElem)
        }
        currentEl.classList.remove('active')
    }
    init() {
        this.setBg(this.galleryItems[0])
        this.leftBtn.addEventListener('click', this.slideLeft.bind(this))
        this.rightBtn.addEventListener('click', this.slideRight.bind(this))
        this.galleryItems.forEach(slide => slide.addEventListener('click', this.selectItem.bind(this)))
    }
}

new Slider(document.querySelector('#slider1'))
new Slider(document.querySelector('#slider2'))
new Slider(document.querySelector('#slider3'))