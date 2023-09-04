document.addEventListener('DOMContentLoaded', () => {
  function clearAnimals() {
    animalsMenu.querySelectorAll('option').forEach(option => option.remove())
  }

  function clearClassifications() {
    classificationsMenu.querySelectorAll('option').forEach(option => option.remove())
  }

  let optionsNodes = {}

  document.querySelectorAll('option').forEach(option => {
    let optionName = option.value;
    // if ((/classifications|animals/iu).test(optionName)) return;

    optionsNodes[optionName] = option;
  })

  const CLASSIFICATIONS_OPTIONS = {
    'Vertebrate':	[optionsNodes[`Bear`], optionsNodes[`Turtle`], optionsNodes[`Whale`], 
                    optionsNodes[`Salmon`], optionsNodes[`Ostrich`]],
    'Warm-blooded':	[optionsNodes[`Bear`], optionsNodes[`Whale`], optionsNodes[`Ostrich`]],
    'Cold-blooded':	[optionsNodes[`Salmon`], optionsNodes[`Turtle`]],
    'Mammal': [optionsNodes[`Bear`], optionsNodes[`Whale`]],
    'Bird': [optionsNodes[`Ostrich`]],
  }

  const ANIMALS_OPTIONS = {
    'Bear':	[optionsNodes[`Vertebrate`], optionsNodes[`Warm-blooded`], optionsNodes[`Mammal`]],
    'Turtle':	[optionsNodes[`Vertebrate`], optionsNodes[`Cold-blooded`]],
    'Whale':	[optionsNodes[`Vertebrate`], optionsNodes[`Warm-blooded`], optionsNodes[`Mammal`]],
    'Salmon':	[optionsNodes[`Vertebrate`], optionsNodes[`Cold-blooded`]],
    'Ostrich':	[optionsNodes[`Vertebrate`], optionsNodes[`Warm-blooded`], optionsNodes[`Bird`]],
  }

  let classificationsMenu = document.querySelector('#animal-classifications');
  let animalsMenu = document.querySelector('#animals');

  document.querySelector('form').addEventListener('change', event => {
    let classifications = event.target.id === 'animal-classifications';
    let selectedMenu = classifications ? classificationsMenu : animalsMenu;
    let clearOptionsFunction = classifications ? clearAnimals : clearClassifications;
    let availableOptionsMenu = classifications ? animalsMenu : classificationsMenu;
    let optionsObject = classifications ? CLASSIFICATIONS_OPTIONS : ANIMALS_OPTIONS;

    let selected;
    selectedMenu.querySelectorAll('option').forEach(option => { if (option.selected) selected = option })
    clearOptionsFunction()
    availableOptionsMenu.append(...optionsObject[selected.value])
  })

  document.querySelector('#clear').addEventListener('click', event => {
    event.preventDefault();
  })
})