$(() => {
  $('form').on('submit', event => {
    event.preventDefault()
    let key = $('#key').val()
    
    $(document).off('keypress').on('keypress', event => {
      if (event.key !== key) return
      $('p a').trigger('click')
    });
  })

  $('p a').on('click', event => {
    event.preventDefault()
    $('#accordion').slideToggle()
  })
})