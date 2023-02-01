let input = document.querySelector('input');
let button = document.querySelector('button');
let section = document.querySelector('section');
let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let text = input.value;
  let paragraph = document.createElement('P');
  let spanCloseButton = document.createElement('SPAN');

  spanCloseButton.innerText = 'X';
  paragraph.innerText = text;
  
  paragraph.appendChild(spanCloseButton);
  section.appendChild(paragraph);

  input.value = '';

  spanCloseButton.addEventListener('click', ()=> {
    paragraph.remove();
  });
});

