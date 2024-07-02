const url = "./data/members.json";
const cards = document.querySelector("#cards");
let content = "";

const displayMembers = (members) => {
  content = "";
  members.forEach((member) => {
    let membership = "";

    switch (member.membership_level) {
      case 1:
        membership = "Member";
        break;
      case 2:
        membership = "Silver";
        break;
      case 3:
        membership = "Gold";
        break;
      default:
        membership = "Unknown";
        break;
    }

    content += `
            <figure>
                <h3 id="member-name">${member.name}</h3>
                <img src="${member.image}" width=250 height=250  alt="${member.name} Photo" loading="lazy"/>
                <figcaption id="address">Address: <p>${member.address}</p></figcaption>
                <figcaption id="phone">Phone: <p>${member.phone}</p></figcaption>
                <a target="_blank" id="website" href="${member.website}">Visit Website</a>
                <figcaption id="membership">Membership: <p>${membership}</p></figcaption>
            </figure>
        `;
  });
  cards.innerHTML = content;
};
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMembersData();

/*as table*/
const displayMembersAsTable = (members) => {
  let tableContent = "";

  members.forEach((member) => {
    let membership = "";

    switch (member.membership_level) {
      case 1:
        membership = "Member";
        break;
      case 2:
        membership = "Silver";
        break;
      case 3:
        membership = "Gold";
        break;
      default:
        membership = "Unknown";
        break;
    }

    tableContent += `
        <tr id="table">
          <td>${member.name}</td>
          <td>${member.address}</td>
          <td>${member.phone}</td>
          <td><a target="_blank" href="${member.website}">Visit Website</a></td>
          <td>${membership}</td>
        </tr>
      `;
  });

  cards.innerHTML = `
      <table>
        <tbody>
          ${tableContent}
        </tbody>
      </table>
    `;
};

async function getMembersDataTable() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembersAsTable(data.members);
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
  getMembersData();
});

listButton.addEventListener("click", () => {
  getMembersDataTable();
});
