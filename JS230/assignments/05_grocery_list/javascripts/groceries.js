document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let nameInput = document.querySelector('#name');
  let quantityInput = document.querySelector('#quantity');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let itemName = nameInput.value.trim();
    if (!itemName) return;

    let itemQuantity = quantityInput.value.trim() || '1';
    let listElement = document.createElement('li')
    listElement.textContent = `${itemQuantity} ${itemName}`
    document.querySelector('#grocery-list').append(listElement);
    form.reset();
  })
})