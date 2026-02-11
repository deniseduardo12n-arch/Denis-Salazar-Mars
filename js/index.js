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


//  Skills Section 

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

// Loop through skills
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}



