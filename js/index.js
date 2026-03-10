 // Footer

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Denis Salazar © " + thisYear;

footer.appendChild(copyright);


// Skills

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


// Message Form

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


// GitHub Projects

fetch("https://api.github.com/users/deniseduardo12n-arch/repos")

.then(response => response.json())

.then(data => {

let repositories = data;

let projectSection = document.getElementById("projects");

let projectList = projectSection.querySelector("ul");

projectList.innerHTML = "";

for (let i = 0; i < repositories.length; i++) {

let project = document.createElement("li");

let link = document.createElement("a");

link.href = repositories[i].html_url;

link.innerText = repositories[i].name;

link.target = "_blank";

project.appendChild(link);

projectList.appendChild(project);

}

})

.catch(error => {
console.error("Error fetching repositories:", error);
});