const url = "./data/events.json";
const eventsContainer = document.querySelector("#events");

const displayEvents = (events) => {
    let content = "";

    events.forEach((event) => {
        content += `
            <div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
    });

    eventsContainer.innerHTML = content;
};

async function getEventsData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayEvents(data.events);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

getEventsData();