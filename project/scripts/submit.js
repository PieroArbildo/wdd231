function countSubmits() {
    const submitDisplay = document.querySelector(".displayReview");
    let numSubmit = Number(window.localStorage.getItem("numVisits"));
    numSubmit++;
    submitDisplay.textContent = numSubmit;
    localStorage.setItem("numVisits", numSubmit);
  }
  countSubmits();