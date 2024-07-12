const url = "./data/members.json";
const spotlights = document.querySelector(".spotlights");
let content = "";

const displayspotlights = (members) => {
  content = "";
  let countOver2 = 0;
  let countEqual2 = 0;

  members.forEach((member) => {
    const { name, image, address, phone, website, membership_level } = member;

    if (membership_level > 2 && countOver2 < 2) {
      content += `
    <div id="content">
      <h3 id="member-name">${name}</h3>
        <figure id ="spotlights-figure">
          <img src="${image}" width="250" height="250" alt="${name} Photo" loading="lazy"/>
          <div>
            <figcaption id="address">Address: <p>${address}</p></figcaption>
            <figcaption id="phone">Phone: <p>${phone}</p></figcaption>
            <a target="_blank" id="website" href="${website}">Visit Website</a>
          </div>
        </figure>
      </div>
    
      `;
      countOver2++;
    }

    if (membership_level === 2 && countEqual2 === 0) {
      content += `
      <div id="content">
        <h3 id="member-name">${name}</h3>
          <figure>
            <img src="${image}" width="250" height="250" alt="${name} Photo" loading="lazy"/>
            <div>
              <figcaption id="address">Address: <p>${address}</p></figcaption>
              <figcaption id="phone">Phone: <p>${phone}</p></figcaption>
              <a target="_blank" id="website" href="${website}">Visit Website</a>
            </div>
          </figure>
      </div>
        `;
      countEqual2++;
    }

    if (countOver2 === 2 && countEqual2 > 0) {
      return;
    }
  });

  spotlights.innerHTML = content;
};

async function getMembersData2() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayspotlights(data.members);
  } catch (error) {
    console.error("Error parsing data: ", error);
  }
}

getMembersData2();
