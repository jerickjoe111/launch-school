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
    $todos: $('ul#todos'),
    $confirm: $('.confirm-prompt'),
  
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
      console.log(this.todos)
      this.hidePrompt()
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
  
    init() {
      this.renderTodos()
      this.$todos.on('click', '.remove', this.handleDeleteClick.bind(this))
      $('.overlay').on('click', this.hidePrompt.bind(this))
    },
  }
  
  App.init()
})


/*

*/