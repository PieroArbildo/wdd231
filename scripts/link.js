//start menu
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const title = document.querySelector("#title");

const headerDiv = document.querySelector("header div");
const dinamicHeading = document.querySelector("main h2");
const liA = document.querySelectorAll("header nav ul li a");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

  if (title.style.display === "none") {
    title.style.display = "block";
    hambutton.style.position = "";
    hambutton.style.right = "0";
    hambutton.style.marginTop = "0px";
    headerDiv.style.height = "80px";
  } else {
    title.style.display = "none";
    hambutton.style.position = "fixed";
    hambutton.style.right = "3px";
    hambutton.style.marginTop = "50px";
    headerDiv.style.height = "20px";
  }
});

const photo = document.querySelector("#photo");
hambutton.addEventListener("click", () => {
  if (photo.style.display === "none") {
    photo.style.display = "";
  } else {
    photo.style.display = "none";
  }
});
//end menu

//start footer
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span
  class="highlight">&copy;${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML = `Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;
//end footer
