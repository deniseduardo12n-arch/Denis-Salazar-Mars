 
// Handle Message Form Submit
// ==========================

// Select the form by name
const messageForm = document.getElementsByName("leave_message")[0];

// Add submit event listener
messageForm.addEventListener("submit", function (event) {

  // Prevent page refresh
  event.preventDefault();

  // Get form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log values to console
  console.log(usersName, usersEmail, usersMessage);

  
  // Display Messages in List
  // ==========================

  // Select messages section
  const messageSection = document.getElementById("messages");

  // Select the <ul> inside the section
  const messageList = messageSection.querySelector("ul");

  // Create new list item
  const newMessage = document.createElement("li");

  // Add content to list item
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage}</span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Add click event to remove button
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Append button to message
  newMessage.appendChild(removeButton);

  // Append message to list
  messageList.appendChild(newMessage);

  // Reset form
  messageForm.reset();
});


