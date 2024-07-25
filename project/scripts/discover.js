async function getPlaceInfo(query) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query
  )}&format=json&addressdetails=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching place information:", error);
    return null;
  }
}

function openModal(place) {
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modal-title");
  const modalAddress = document.getElementById("modal-address");

  modalTitle.innerText = place.display_name;

  const addressContent = `
        <div>
            <p><strong>Address:</strong></p>
            <ul>
                <li><strong>Road:</strong> ${place.address.road || "N/A"}</li>
                <li><strong>City:</strong> ${place.address.city || "N/A"}</li>
                <li><strong>County:</strong> ${
                  place.address.county || "N/A"
                }</li>
                <li><strong>State:</strong> ${place.address.state || "N/A"}</li>
                <li><strong>Postcode:</strong> ${
                  place.address.postcode || "N/A"
                }</li>
                <li><strong>Country:</strong> ${place.address.country}</li>
                <li><strong>Country Code:</strong> ${
                  place.address.country_code
                }</li>
            </ul>
        </div>
        `;

  modalAddress.innerHTML = addressContent;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

async function displayPlaces(queries) {
  const placesContainer = document.getElementById("places-info");
  let content = "";

  for (const query of queries) {
    const place = await getPlaceInfo(query);
    if (place) {
      const googleMapsLink = `https://www.google.com/maps/@${place.lat},${place.lon},17z?entry=ttu`;

      content += `
                    <div class="place">
                        <h3>${place.display_name}</h3>
                        <p><strong>Type:</strong> ${place.class || "N/A"} - ${
        place.type || "N/A"
      }</p>
                        <p><strong>Latitude:</strong> ${place.lat}</p>
                        <p><strong>Longitude:</strong> ${place.lon}</p>
                        <p><strong>Google Maps:</strong> <a href="${googleMapsLink}" target="_blank">View on Google Maps</a></p>
                        <button onclick="openModal(${JSON.stringify(
                          place
                        ).replace(/"/g, "&quot;")})">More Information</button>
                    </div>
                `;
    } else {
      content += `<div class="place">No information found for ${query}.</div>`;
    }
  }

  placesContainer.innerHTML = content;

  const modalClose = document.querySelector(".close");
  modalClose.onclick = closeModal;

  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

const touristPlaces = [
  "Machu Picchu, Peru",
  "Cusco, Peru",
  "Arequipa, Peru",
  "Lima, Peru",
  "Huacachina, Peru",
  "Mancora, Peru",
  "Iquitos, Peru",
  "Lake Titicaca, Peru",
  "Nazca, Peru",
  "Puno, Peru",
  "Ballestas Islands, Peru",
  "Tarapoto, Peru",
  "Colca Canyon, Peru",
  "Marcahuasi, Peru",
  "Huaraz, Peru",
];

displayPlaces(touristPlaces);
