document.addEventListener('DOMContentLoaded', () => {
  let App = {
    bigImage: document.querySelector('figure img'),
    thumbnails: document.querySelector('ul'),
    currentActive: null,

    init() {
      this.loadFirstImage()
      this.bindThumbnails()
    },
    
    loadFirstImage() {
      let firstImage = document.querySelector('ul img')
      this.bigImage.src = firstImage.src
      this.bigImage.alt = firstImage.alt
      this.currentActive = firstImage
    },

    bindThumbnails() {
      this.thumbnails.addEventListener('click', event => {
        let target = event.target
        if (this.currentActive === target || target.tagName !== 'IMG') return
        this.currentActive.classList.remove('active')
        this.currentActive = target
        this.currentActive.classList.add('active')
        this.loadBigImage()        
      })
    },

    loadBigImage() {
      this.bigImage.src = this.currentActive.src
    }
  }

  App.init()
})