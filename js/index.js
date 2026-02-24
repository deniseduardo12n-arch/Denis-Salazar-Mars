 // =============================
// Footer Section
// =============================

// Create date object
let today = new Date();

// Get current year
let thisYear = today.getFullYear();

// Select footer
let footer = document.querySelector("footer");

// Create paragraph element
let copyright = document.createElement("p");

// Add name + copyright symbol + year
copyright.innerHTML = "Denis Salazar © " + thisYear;

// Append to footer
footer.appendChild(copyright);


// =============================
// Skills Section
// =============================

// Array of skills
let skills = [
  "SolidWorks",
  "FEA",
  "Fusion 360",
  "CNC Machining",
  "HTML",
  "CSS",
  "JavaScript",
  "Git & GitHub"
];

// Select skills section
let skillsSection = document.getElementById("skills");

// Select ul inside skills section
let skillsList = skillsSection.querySelector("ul");

// Loop through skills and add to page
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}


// =============================
// Message Form Section
// =============================

// Select the form by name
const messageForm = document.querySelector('form[name="leave_message"]');

// Add submit event listener
messageForm.addEventListener("submit", function (event) {

  // Prevent page refresh
  event.preventDefault();

  // Get values from form
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  // Select messages section and list
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  // Create new list item
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage} </span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Remove message when clicked
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Append button to message
  newMessage.appendChild(removeButton);

  // Append message to list
  messageList.appendChild(newMessage);

  // Reset form after submit
  messageForm.reset();
});
 