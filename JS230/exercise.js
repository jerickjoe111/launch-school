document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.thumbcaption').forEach(caption => {
    console.log(caption.textContent.trim())
  })

})

/*

document.querySelector('#toc')
document.querySelectorAll('#toc)[0]
document.getElementById('toc')

*/