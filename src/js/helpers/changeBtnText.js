export const changeBtnText = (event) => {
  event.target.textContent = 'Btn is ' + (event.target.textContent === 'Btn is Off' ? 'On' : 'Off');
};
