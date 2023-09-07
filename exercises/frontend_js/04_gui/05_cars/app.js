$(() => {
  Handlebars.registerPartial('car-template', $('#car-template').html());
  
  const CARS = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];
  
  let App = {
    allCars: CARS,
    filtersTemplate: Handlebars.compile($('#filters-template').html()),
    carsTemplate: Handlebars.compile($('#cars-template').html()),
    $filters: $('#filters'),
    $cars: $('#cars'),
    
    init() {
      Handlebars.registerPartial('car-template', $('#car-template').html());
      this.renderFiltersMenu();
      this.renderCars();
    },
    
    generateFilters() {
      let makes = this.uniqueOptions('make');
      let models = this.uniqueOptions('model');
      let prices = this.uniqueOptions('price');
      let years = this.uniqueOptions('year');

      return {makes: makes, models: models, prices: prices, years: years};
    },
    
    renderFiltersMenu() {
      this.$filters.html(this.filtersTemplate(this.generateFilters()))
      this.$filters.find('.filter-btn').on('click', this.handleFilterButton.bind(this))
    },

    uniqueOptions(option) {
      return [...new Set(this.allCars.map(car => car[option]))];
    },

    renderCars() {
      this.$cars.html(this.carsTemplate({cars: this.allCars}))
    },

    handleFilterButton() {
      let filter = {
        make: this.$filters.find('#make-select').val(),
        model: this.$filters.find('#model-select').val(),
        price: this.$filters.find('#price-select').val(),
        year: this.$filters.find('#year-select').val(),
      }

      this.filterCars(filter)
    },

    filterCars(filter) {
      $('.car').each((_, car) => this.filterCar(filter, $(car)) )
      this.updateModelOptions(!$('#make-select').val());
    },

    filterCar(filter, car) {
      let carProperties = {
        make: car.find('h2').text().match(/\w+/g)[0],
        model: car.find('h2').text().match(/\w+/g)[1],
        price: car.find('p.price').text().match(/\d+/)[0],
        year: car.find('p.year').text().match(/\d+/)[0],
      }

      for (let property in filter) {
        if (filter[property] && carProperties[property] !== filter[property]) {
          $(car).hide()
          return
        } else $(car).show()
      }
    },

    updateModelOptions(resetFilter) {
      $('#model-select option').each((_, option) => $(option).show() )

      if (resetFilter) return

      let models = [];
      $('.car:visible').each((_, carDiv) => {
        models.push($(carDiv).find('h2').text().match(/\w+/g)[1])
      })

      $('#model-select option').each((_, option) => {
        if (!models.includes($(option).val())) $(option).hide()
      })
    }
  }

  App.init()
})


/*
*/