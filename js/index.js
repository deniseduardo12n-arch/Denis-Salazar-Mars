 // Footer

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "© Denis Salazar " + thisYear;

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

skills.forEach(function(skill){

let li = document.createElement("li");
li.innerText = skill;

skillsList.appendChild(li);

});


// Message Form

const form = document.querySelector('form[name="leave_message"]');

form.addEventListener("submit", function(event){

event.preventDefault();

let name = event.target.usersName.value;
let email = event.target.usersEmail.value;
let message = event.target.usersMessage.value;

let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

let newMessage = document.createElement("li");

newMessage.innerHTML =
`<a href="mailto:${email}">${name}</a> wrote: ${message}`;

let removeButton = document.createElement("button");

removeButton.innerText = "Remove";
removeButton.type = "button";

removeButton.addEventListener("click", function(){

newMessage.remove();

});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

form.reset();

});


// Projects

let projectSection = document.querySelector("#projects ul");

let project1 = document.createElement("li");
project1.innerHTML = `<a href="https://sites.google.com/d/1m6Mm_tC_qsNpCRy5CcBcGLWTf1xHyzGl/p/1T7oOWiStsyEdsmRhY8UfDEIaCUmD7iZx/edit" target="_blank">CSUF Baja SAE Project</a>`;

projectSection.appendChild(project1);

let project2 = document.createElement("li");
project2.innerHTML = `<a href="https://sites.google.com/d/1m6Mm_tC_qsNpCRy5CcBcGLWTf1xHyzGl/p/1I5AiqG8FVN_97u_uP0H7lajkbwb1LwVB/edit" target="_blank">Other Mechanical Engineering Projects</a>`;

projectSection.appendChild(project2);


// GitHub Projects

 fetch("https://api.github.com/users/deniseduardo12n-arch/repos")

.then(response => response.json())

.then(data => {

data.forEach(function(repo){

let project = document.createElement("li");

let link = document.createElement("a");

link.href = repo.html_url;
link.innerText = repo.name;
link.target = "_blank";

project.appendChild(link);

projectSection.appendChild(project);

});

});