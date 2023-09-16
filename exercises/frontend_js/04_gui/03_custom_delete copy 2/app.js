document.addEventListener('DOMContentLoaded', () => {
  const TODOS = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  let App = {
    todosTemplate: Handlebars.compile(document.querySelector('#todos-template').innerHTML),
    confirmTemplate: Handlebars.compile(document.querySelector('#confirm-template').innerHTML),
    menuTemplate: Handlebars.compile(document.querySelector('#context-menu-template').innerHTML),
    overlay: document.querySelector('.overlay'),
    confirmDiv: document.querySelector('.confirm-prompt'),
    menuDiv: document.querySelector('.context-menu'),
    todos: TODOS,

    init() {
      this.renderTodos()
      this.bindDeleteButton()
      this.bindOverlay()
      this.bindCancelMenu()
    },

    renderTodos() {
      let ul = document.querySelector('#todos')
      ul.innerHTML = ''
      ul.insertAdjacentHTML('beforeend', this.todosTemplate({todos: this.todos}))
    },

    bindDeleteButton() {
      document.querySelector('#todos').addEventListener('contextmenu', event => {
        event.preventDefault()
        if (event.target.tagName !== 'LI') return
        this.hideMenu()
        let id = event.target.dataset.id
        this.showMenu(id)
        this.menuDiv.style.top =`${event.clientY}px`
        this.menuDiv.style.left =`${event.clientX}px`
      })
    },

    bindOverlay() {
      this.overlay.addEventListener('click', () => {
        this.hideConfirm()
      })
    },

    toggleOverlay() {
      this.overlay.classList.toggle('hidden')
    },

    showConfirm(id) {
      let html = this.confirmTemplate({id: id})
      this.confirmDiv.insertAdjacentHTML('beforeend', html)
      this.confirmDiv.classList.remove('hidden')
    },

    hideConfirm() {
      this.confirmDiv.innerHTML = ''
      this.confirmDiv.classList.add('hidden')
      this.overlay.classList.toggle('hidden')
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.renderTodos()
    },

    bindConfirmButtons() {
      document.querySelector('.confirm-actions').addEventListener('click', event => {
        event.preventDefault()
        let target = event.target
        if (target.tagName !== 'A') return

        if (target.textContent.includes('Yes')) {
          let id = Number(target.parentElement.parentElement.dataset.id)
          this.deleteTodo(id)
          this.hideConfirm()
        } else {
          this.hideConfirm()
        }
      })
    },

    showMenu(id) {
      this.menuDiv.innerHTML = this.menuTemplate({id: id})
      this.menuDiv.classList.remove('hidden')
      this.menuDiv.querySelector('.remove').addEventListener('click', event => {
        this.hideMenu()
        this.toggleOverlay()
        this.showConfirm(id)
        this.bindConfirmButtons()
      })
    },

    hideMenu() {
      this.menuDiv.classList.add('hidden')
      this.menuDiv.innerHTML = ''
    },

    bindCancelMenu() {
      document.body.addEventListener('click', event => {
        if (event.target.matches('.context-menu')) return
        this.hideMenu()
      })
    }
  }
  
  App.init()
})


/*

on right click

  call template with appropriate id
  load menu in div
    set position relative: according mouse x: left, y: top

*/