
function makeBold(element, callback) {
  element.classList.add('highlight')
  if (callback && typeof callback === 'function') callback(element);
}