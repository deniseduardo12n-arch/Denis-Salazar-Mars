 // =============================
// Footer Section
// =============================

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Denis Salazar © " + thisYear;

footer.appendChild(copyright);


// =============================
// Skills Section
// =============================

const skills = [
  "SolidWorks",
  "Fusion 360",
  "FEA Analysis",
  "CAD Modeling",
  "CAM Programming",
  "Data Analysis",
  "Suspension Design",
  "Vehicle Dynamics",
  "Manufacturing Drawings"
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

skills.forEach(function (skillText) {
  const skill = document.createElement("li");
  skill.innerText = skillText;
  skillsList.appendChild(skill);
});


// =============================
// Message Form Section
// =============================

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage} </span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    newMessage.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});


// =============================
// Open-Meteo Weather API
// =============================

const weatherButton = document.getElementById("getWeather");

if (weatherButton) {

  weatherButton.addEventListener("click", function () {

    let latitude = 34.0336;
    let longitude = -117.0431;

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(url)
      .then(response => response.json())
      .then(data => {

        let temperature = data.current_weather.temperature;
        let windSpeed = data.current_weather.windspeed;

        document.getElementById("temperature").textContent =
          "Temperature: " + temperature + "°C";

        document.getElementById("wind").textContent =
          "Wind Speed: " + windSpeed + " km/h";

      })
      .catch(error => {
        console.error("Error fetching weather:", error);
      });

  });

}


// =============================
// GitHub Repositories Fetch
// =============================

fetch("https://api.github.com/users/deniseduardo12n-arch/repos")

  .then(response => response.json())

  .then(data => {

    let repositories = data;
    console.log(repositories);

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    // Clear existing list items
    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {

      let project = document.createElement("li");
      project.innerText = repositories[i].name;

      projectList.appendChild(project);
    }

  })

  .catch(error => {
    console.error("Error fetching repositories:", error);
  });