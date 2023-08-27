const Slideshow = {
  init(renderPhotoInformation, renderComments) {
    this.renderPhotoInformation = renderPhotoInformation;
    this.renderComments = renderComments
    this.slideshow = document.querySelector('#slideshow');
    let pictures = this.slideshow.querySelectorAll('figure');
    this.firstPicture = pictures[0];
    this.lastPicture = pictures[pictures.length - 1];
    this.currentPicture = this.firstPicture;
    this.registerListeners();
  },

  registerListeners() {
    let prevArrow = this.slideshow.querySelector('a.prev');
    let nextArrow = this.slideshow.querySelector('#nextArrow');
    prevArrow.addEventListener('click', event => this.prevSlide(event));
    nextArrow.addEventListener('click', event => this.nextSlide(event));
  },

  prevSlide(event) {
    event.preventDefault();
    let prevPicture = this.currentPicture.previousElementSibling || this.lastPicture;
    this.displayPictureContent(prevPicture.dataset.id);
    this.hide(this.currentPicture);
    this.show(prevPicture)
    this.currentPicture = prevPicture;
  },

  nextSlide(event) {
    event.preventDefault();
    let nextPicture = this.currentPicture.nextElementSibling || this.firstPicture;
    this.displayPictureContent(nextPicture.dataset.id);
    this.hide(this.currentPicture);
    this.show(nextPicture);
    this.currentPicture = nextPicture;
  },

  hide(picture) {
    picture.classList.add('hide');
    picture.classList.remove('show');
  },
  
  show(picture) {
    picture.classList.add('show')
    picture.classList.remove('hide')
  },

  displayPictureContent(index) {
    this.renderPhotoInformation(Number(index));
    this.renderComments(index);
  },
}

export default Slideshow;