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
    overlay: document.querySelector('.overlay'),
    confirmDiv: document.querySelector('.confirm-prompt'),
    todos: TODOS,

    init() {
      this.renderTodos()
      this.bindDeleteButton()
      this.bindOverlay()
    },

    renderTodos() {
      let ul = document.querySelector('#todos')
      ul.innerHTML = ''
      ul.insertAdjacentHTML('beforeend', this.todosTemplate({todos: this.todos}))
    },

    bindDeleteButton() {
      document.querySelector('#todos').addEventListener('click', event => {
        if (event.target.tagName !== 'SPAN') return
        this.toggleOverlay()
        let id = event.target.parentElement.dataset.id
        this.showConfirm(id)
        this.bindConfirmButtons()
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
  }
  
  App.init()
})


/*
show overlay
render confirm template passing parent id
bind confirm button
yes
  delete todos with that id
  hide overlay
  hide confirm template
no
  hide overlay
  hide confirm template

*/