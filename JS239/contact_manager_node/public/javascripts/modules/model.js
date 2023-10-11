export default class Model {
  constructor() {
    this.contacts = [];
    this.resetCurrentContact();
  }

  async fetchContacts() {
    return fetch('/api/contacts', { method: 'GET' })
          .then(response => response.json())
          .then(contacts => {
              // console.log(contacts)
              this.contacts = this.processContacts(contacts)}
            )
          .catch((error) => new Error(`Contacts could not be fetched: REASON --> ${error.message}`));
  }

  async fetchContact(id) {
    return fetch(`/api/contacts/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(contact => this.currentContact = this.processContacts([contact])[0])
      .catch(error => new Error(`Contact could not be fetched: REASON --> ${error.message}`));
  }

  processContacts(contacts) {
    return Array.from(contacts).map(contact => {
      return {
        id: contact.id,
        full_name: contact.full_name,
        email: contact.email,
        phone_number: contact.phone_number,
        tags: contact.tags?.split(',')
      }
    });
  }

  resetCurrentContact() {
    this.currentContact = { tags: [] }
  }

  getContacts() {
    return this.contacts;
  }

  getCurrentContact() {
    return this.currentContact;
  }

  async submitContact(json) {
    let path;
    let method;

    if (this.currentContact.id) {
      path = `/api/contacts/${this.currentContact.id}`;
      method = 'PUT'
    } else {
      path = '/api/contacts';
      method = 'POST';
    }

    return fetch(path, {
              method,
              body: json,
              headers: { 'Content-Type': 'application/json; charset=utf-8'},
            }).then(response => response.ok ? true : false)
              .catch(error => error);
  }
  
  async deleteContact(id) {
    return fetch(`/api/contacts/${id}`, { method: 'DELETE' })
           .then(response => response.ok ? true : false)
           .catch(error => error);
  }
}