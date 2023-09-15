document.addEventListener('DOMContentLoaded', () => {
  let App = {
    teamList: document.querySelector('article > ul'),
    modal: document.querySelector('.modal'),
    modalLayer: document.querySelector('.modal-layer'),

    init() {
      this.registerListeners()
    },

    registerListeners() {
      this.teamList.addEventListener('click', event => {
        event.preventDefault()
        let target = event.target
        if (target.tagName === 'LI') return

        this.loadModal(this.findMember(target))
      })

      this.modal.querySelector('.close').addEventListener('click', event => {
        event.preventDefault()
        this.closeModal()
      })

      document.querySelector('body').addEventListener('click', event => {
        // if (!this.modal.classList.contains('hidden')) return
        // this.closeModal()
      })
    },

    findMember(element) {
      return element.tagName === 'A' ? element.querySelector('img') : element
    },

    loadModal(memberImage) {
      this.modal.querySelector('img').src = memberImage.src
      this.modal.querySelector('img').alt = memberImage.alt
      this.modal.querySelector('h3').textContent = memberImage.alt
      this.modalLayer.classList.toggle('hidden')
      this.modal.classList.toggle('hidden')

    },

    closeModal() {
      this.modal.querySelector('img').src = ''
      this.modal.querySelector('img').alt = ''
      this.modal.querySelector('h3').textContent = '' 
      this.modal.classList.toggle('hidden')
    },
  }
  
  App.init()
})