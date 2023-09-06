$(() => {
  $('form').on('submit', event => {
    event.preventDefault();

    let character = $('#key').val();
    
    $(document)
      .off('keypress')
      .on('keypress', event => {
        if (event.key !== character) return
        $('a').trigger('click')
    })
  })

  $('a').on('click', event => {
    event.preventDefault();
    $('#accordion').slideToggle();
  })
})