//start footer
const today = new Date();
const year = document.querySelector("#currentyear");
function getDate(){
year.innerHTML = `<span
  class="highlight">&copy;${today.getFullYear()} Lima Chamber of Commerce</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML = `Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;
}
getDate();
//end footer