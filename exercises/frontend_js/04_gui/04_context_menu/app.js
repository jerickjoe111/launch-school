$(() => {
  const TODOS = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  let App = {
    todos: TODOS,
    todosTemplate: Handlebars.compile($('#todos-template').html()),
    confirmTemplate: Handlebars.compile($('#confirm-template').html()),
    contextTemplate: Handlebars.compile($('#cmenu-template').html()),
    $todos: $('ul#todos'),
    $confirm: $('.confirm-prompt'),
    $contextMenu: $('.context-menu'),
  
    renderTodos() {
      this.$todos.html(this.todosTemplate({ todos: this.todos }))
    },
  
    handleDeleteClick(event) {
      let todoId = event.target.parentElement.dataset.id
      this.showPrompt(todoId)
    },
    
    handleConfirmYes(event) {
      let todoId = $(event.target).closest('.confirm-wrapper').attr('data-id');
      this.removeTodo(Number(todoId))
    },
    
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId)
      this.hidePrompt()
      this.hideContextMenu();
      this.renderTodos()
    },
  
    showPrompt(todoId) {
      this.$confirm.html(this.confirmTemplate({id: todoId}));
      this.$confirm.add('.overlay').show() // confirm + overlay show
      this.bindPromptEvents();
    },
  
    bindPromptEvents() {
      this.$confirm.find('.confirm-no').one('click', this.hidePrompt.bind(this));
      this.$confirm.find('.confirm-yes').one('click', this.handleConfirmYes.bind(this));
    },
  
    hidePrompt() {
      this.$confirm.add('.overlay').hide()
      this.$confirm.html('')
    },

    displayContextMenu(event) {
      event.preventDefault();
      let todoId = event.target.dataset.id
      this.$contextMenu.html(this.contextTemplate({id: todoId}))
      this.$contextMenu.find('.remove').one('click', this.showPrompt.bind(this, todoId))
      $('body').one('click', this.hideContextMenu.bind(this))
      this.$contextMenu.css({
        display: 'block',
        position: 'absolute',
        top: `${event.clientY}px`,
        left: `${event.clientX}px`,
      })
      this.$contextMenu.fadeIn(300)
    },

    hideContextMenu() {
      this.$contextMenu.hide()
      this.$contextMenu.html('')
    },
  
    init() {
      this.renderTodos()
      this.$todos.on('click', '.remove', this.handleDeleteClick.bind(this))
      $('.overlay').on('click', this.hidePrompt.bind(this))
      this.$todos.on('contextmenu', 'li', this.displayContextMenu.bind(this))
    },
  }
  
  App.init()
})


/*
*/