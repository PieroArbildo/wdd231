/*Start Menu*/
const hamburguerElement = document.querySelector("#menu-button");
const navElement = document.querySelector("#navigation");
hamburguerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburguerElement.classList.toggle('open');
});
/*End Menu*/