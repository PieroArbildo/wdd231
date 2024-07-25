let date = new Date().toISOString();

const currentUrl = window.location.href;
//console.log(currentUrl);

const everything = currentUrl.split("?");
//console.log(everything);

let formData = everything[1].split("&");
//console.log(formData);

function show(cup) {
  //console.log(cup)
  formData.forEach((element) => {
    //console.log(element);
    if (element.startsWith(cup)) {
      result = element.split('=')[1]
        .replace(/\+/g, " ") 
        .replace("%40", "@");
    }

  });
  return result;
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<div>
<p>Your Name: <strong>${show("first")} ${show("last")}</strong></p>
<p>Your Email: <strong>${show("email")}</strong></p>
<p>Organization Title: <strong>${show("organization-title")}</strong></p>
<p>Your Phone: <strong>${show("phone")}</strong></p>
<p>Your Organization Name: <strong>${show("organ-name")}</strong></p>
<p>Your Description: <strong>${show("description")}</strong></p>
<p><strong>${date}</strong></p>
</div>
`