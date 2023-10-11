export default class View {
  constructor(contacts) {
    this.displayMainUI(contacts);
  }
  
  displayMainUI(contacts) {
    this.renderContacts(contacts);
  }

  hideMainUI() {
    [...document.querySelectorAll('.contact-card')].forEach(contact => contact.remove());
  }

  async renderContacts(contactsData) { // array of contact objects
   
    // const contacts = document.querySelector('.contacts');

    // if (contacts) contacts.remove();

    //test:
    // contactsData = [{full_name: 'Luke', phone_number: '3123', email: '3213123', tags: [] }]

    Handlebars.registerPartial('contact-card-template', document.querySelector('#contact-card-template').innerHTML)

    let contactsHTML = document.querySelector('#contacts-template').innerHTML;
    let contactsTemplateCompiler = Handlebars.compile(contactsHTML);
    let contactsCompiledHTML = contactsTemplateCompiler({ contacts: contactsData });
    
    let contactsContainer = document.querySelector('#contacts-container');
    contactsContainer.insertAdjacentHTML('beforeend', contactsCompiledHTML);
    return true;
  }

  renderAddContact(contacts, currentContact) {
    let addContactHTML = document.querySelector('#add-contact-template').innerHTML;
    let container = document.querySelector('#contacts-container');
    let addContactTemplateCompiler = Handlebars.compile(addContactHTML);
    // let allTags = this.getTags(contacts);

    let contactCopy = JSON.parse(JSON.stringify(currentContact));
    // contactCopy.tags = allTags;

    let addContactCompiledHTML = addContactTemplateCompiler(contactCopy)
    container.insertAdjacentHTML('beforeend', addContactCompiledHTML);

    // this.highlightCurrentTags(currentContact);
  }

  hideAddContact() {
    document.querySelector('#add-contact-container').remove();
  }

  isSearchedFor(contact) {
    let search = document.querySelector('#search').value;
    let contactName = contact.querySelector('.contact-card-heading h3').textContent
    return contactName.toLowerCase().startsWith(search.toLowerCase());
  }

  hideContact(contact, condition) {
    contact.classList.toggle('hidden', condition);
  }
}