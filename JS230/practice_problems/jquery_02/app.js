$(() => {
  function reset() {
    $(document).off('keypress');
    $heading.text(HEADING_TEXT);
  }

  let $heading = $('h1');
  let $anchor = $('a');

  const HEADING_TEXT = $heading.text();

  $('form').on('submit', event => {
    event.preventDefault();

    let inputKey = $('#key').val();
    reset();
    $(document).on('keypress', event => {
      if (event.key !== inputKey) return;

      $anchor.trigger('click');
    })
    $('input[type="text"]').val('');
    $heading.append(`<em> ${inputKey.toUpperCase()}</em>`);
  })
  
  $anchor.on('click', () => {
    $('#accordion').slideToggle();
  })
})