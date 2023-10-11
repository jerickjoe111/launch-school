export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.bindListeners();
  }

  bindListeners() {
    document.addEventListener('click', this.handleContactActions.bind(this));
    document.addEventListener('submit', this.handleFormSubmission.bind(this));
    document.addEventListener('keyup', this.handleSearch.bind(this));
  }

  handleContactActions(event) {
    switch(event.target.id) {
      case 'add-contact':
        this.handleAddContact(event);
        break;
      case 'delete-contact':
        this.handleDeleteContact(event);
        break;
      case 'edit-contact':
        this.handleEditContact(event);
        break;
      case 'cancel':
        this.handleCancelContact(event)
        break;
    }
  }

  handleAddContact(event) {
    event.preventDefault();
    this.view.hideMainUI();
    this.view.renderAddContact(this.model.getContacts(), this.model.getCurrentContact());
  }

  async handleFormSubmission(event) {
    event.preventDefault();

    // let invalid = this.invalidInputs(event);
    // if (invalid.length > 0) {
    //   this.view.displayError(invalid);
    //   return;
    // };

    let currentContact = this.model.getCurrentContact();
    let formData = new FormData(document.querySelector('#add-contact-form'));
    formData.set('tags', currentContact.tags.join(', '));

    let json = this.formDataToJSON(formData)
    console.log(json)

    try {
      let submitted = await this.model.submitContact(json);
      let contacts = await this.model.fetchContacts();

      if (!submitted) {
        throw new Error(`Contact could not be saved: REASON --> ${error.message}`);
      } else {
        this.view.hideAddContact();
        this.view.displayMainUI(contacts);
        this.model.resetCurrentContact();
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

  formDataToJSON(formData) {
    let json = {};
    for (let [name, value] of formData) {
      json[name] = value;
    }
  
    return JSON.stringify(json);
  }

  async handleDeleteContact(event) {
    event.preventDefault();

    let answer = window.confirm('Are you sure you want to delete this user?');
    if (!answer) return;

    let contactId = event.target.closest('.contact-card').dataset.id;
    try {
      let deleted = await this.model.deleteContact(contactId);
      let contacts = await this.model.fetchContacts();
      if (!deleted) {
        throw new Error(`Contact could not be deleted: REASON --> ${error.message}`);
      } else {
        this.view.hideMainUI();
        this.view.displayMainUI(contacts);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async handleEditContact(event) {
    event.preventDefault();

    let contactId = event.target.closest('.contact-card').dataset.id;
    this.view.hideMainUI();

    let currentContact = await this.model.fetchContact(contactId);

    this.view.renderAddContact(this.model.getContacts(), currentContact);
  }

  async handleCancelContact(event) {
    event.preventDefault();
    this.view.hideAddContact();

    try {
      let contacts = await this.model.fetchContacts();
      if (!contacts) throw new Error(`Contact could not be deleted: REASON --> ${error.message}`);

      this.model.resetCurrentContact();
      this.view.displayMainUI(contacts);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSearch(event) {
    if (event.target.id !== 'search') return;

    let contacts = document.querySelectorAll('.contact-card');
    document.querySelectorAll('.contact-card').forEach(contact => {
      let validName = this.view.isSearchedFor(contact);
      this.view.hideContact(contact, !validName);
    });
  }

}