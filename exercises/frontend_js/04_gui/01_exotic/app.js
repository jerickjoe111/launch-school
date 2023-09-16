document.addEventListener('DOMContentLoaded', () => {
  let App = {
    images: document.querySelectorAll('img'),

    init() {
      this.bindImages() 
    },

    bindImages() {
      this.images.forEach(image => {
        image.addEventListener('mouseenter', event => {
          this.hideAllTooltips()
          this.showTooltip(image)
        })
      })
      
      this.images.forEach(image => {
        image.addEventListener('mouseleave', event => {
          this.hideAllTooltips()
        }, true)
      })
    },

    showTooltip(image) {
      setTimeout(() => {
        image.nextElementSibling.classList.remove('hidden')
      }, 500)
    },

    hideAllTooltips() {
      document.querySelectorAll('figcaption').forEach(caption => {
        caption.classList.add('hidden')
      })
    }
  }

  App.init()
})

/*

*/