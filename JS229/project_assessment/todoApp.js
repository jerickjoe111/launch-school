const Todo = (() => {
  const TODO_TEMPLATE = {}
  
  const generateId = (() => {
    let id = 0;
    return () => id++;
  })();
  
  return function(todoData) {
    this.completed = false;
    // validate todoData
    Object.assign(this, todoData); // add each property with unwritable attributes ??? 
    // validate month + year (add current month and year if invalid or string empty)
    this.id = generateId();;
  }
})()

const todoList = (() => {
  const ID_ERROR_MESSAGE = 'There is no todo object with that id!';
  const TODO_ADDED = 'Todo added!';
  const TODO_DELETED = 'Todo deleted!';
  const TODO_UPDATED = 'Todo updated!';
  const TODO_COMPLETED = 'Todo completed!';

  function findTodoIndex(idToFind) {
    return todos.findIndex( todo => todo.id === idToFind );
  }

  function logErrorMessage() {
    console.log(ID_ERROR_MESSAGE);
  }
  
  let todos = [];

  return {
    init(todoSet) {
      todoSet.forEach(todoData => todos.push(new Todo(todoData)));
      return this;
    },

    add(todoData) {
      // validate todoData
      todos.push(new Todo(todoData));
      console.log(TODO_ADDED);
      return true;
    },

    delete(id) {
      let todoIndex = findTodoIndex(id); 
      if (todoIndex === -1) {
        logErrorMessage();
        return false;
      }

      todos.splice(todoIndex,1);
      console.log(TODO_DELETED);
      return true
    },

    update(id, todoData) {
      let todoIndex = findTodoIndex(id);
      if (todoIndex === -1) {
        logErrorMessage();
        return false;
      }

      Object.assign(todos[todoIndex], todoData) // validate todoData first
      console.log(TODO_UPDATED);
    },

    get(id) {
      let todoIndex = findTodoIndex(id);
      if (todoIndex === -1) {
        logErrorMessage();
        return false;
      }

      return {...todos[todoIndex]};
    },

    complete(id) {
      let todoIndex = findTodoIndex(id);
      if (todoIndex === -1) {
        logErrorMessage();
        return false;
      }

      todos[todoIndex].completed = true;
      console.log(TODO_COMPLETED);
      return true;
    },

    copy() {
      return todos.map(todo => { 
        return {...todo} 
      })
    }
  }
})();


const todoManager = (() => {
  let todoList;
  return {
    init(list) {
      todoList = list.copy();
      return this;
    },
    all() {
      return todoList;
    },
    completed() {
      return todoList.filter(todo => todo.completed );
    },
    byDate(month, year) {
      return todoList.filter(todo => todo.month === month && todo.year === year);
    },
    byDateCompleted(month, year) {
      return todoList.filter(todo => todo.completed && todo.month === month && todo.year === year);
    },
  }
})();

let todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

let todoSet = [todoData1, todoData2, todoData3, todoData4];

let list = todoList.init(todoSet)

let t = {
  title: 'OK',
  month: 'OK',
  year: 'OK',
  description: 'OK',
};

let manager = todoManager.init(list);

manager

