import { changeBtnText } from '../src/js/helpers';

// EXAMPLE: Simulate user interaction 

it('displays a text after a click', () => {
  const button = document.createElement('button');
  button.className = 'js-button';
  button.textContent = 'Btn is Off';
  button.addEventListener('click', changeBtnText);
  document.body.appendChild(button);
  
  const jsButton = document.querySelector('.js-button');
  button.click();
  
  expect(jsButton.textContent).toBe('Btn is On');
});
