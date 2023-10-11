import Model from './modules/model.js'
import View from './modules/view.js';
import Controller from './modules/controller.js'

class App {
  init() {
    document.addEventListener('DOMContentLoaded', async () => {
      const model = new Model();
      await model.fetchContacts();
      const view = new View(model.getContacts());
      new Controller(model, view)
    })
  }
}

const app = new App();
app.init();
