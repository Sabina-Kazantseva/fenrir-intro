// Add elements to the footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const myName = "Sabina Kazantseva";
copyright.innerHTML = "\u00A9" + myName + " " + thisYear;
copyright.style.textAlign = "center";
footer.appendChild(copyright);

// Add skills to the skills sections
const skills = [
  { name: 'HTML', icon: 'icons/html-icon.png' },
  { name: 'CSS', icon: 'icons/css-icon.png' },
  { name: 'JavaScript', icon: 'icons/js-icon.png' },
  { name: 'GitHub', icon: 'icons/github-icon.png' }
];

// Append skills to the skills section
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.classList.add('skills-list');
skillsSection.appendChild(skillsList);
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  const img = document.createElement('img');
  img.src = skills[i].icon;
  img.alt = `${skills[i].name} Icon`;
  img.style.width = '50px'; // Adjust the width of the icon
  img.style.height = '50px'; // Adjust the height of the icon
  skill.appendChild(img);
  skill.appendChild(document.createTextNode(skills[i].name));
  skillsList.appendChild(skill);
}
// Set skills section to display flex
skillsSection.style.display = 'flex';

// Style for skills list items
skillsList.style.listStyleType = 'none';
skillsList.style.margin = '0';
skillsList.style.padding = '0';
skillsList.style.display = 'flex';
skillsList.style.justifyContent = 'center';

// Style for each skill item
const skillItems = skillsList.querySelectorAll('li');
for (let i = 0; i < skillItems.length; i++) {
  skillItems[i].style.display = 'flex';
  skillItems[i].style.alignItems = 'center';
  skillItems[i].style.backgroundColor = '#eaeaea';
  skillItems[i].style.padding = '10px';
  skillItems[i].style.margin = '0 15px';
  skillItems[i].style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
  skillItems[i].style.transition = 'box-shadow 0.3s ease-in-out';
}

// Hover effect for skill items
skillsSection.addEventListener('mouseover', function (event) {
  const target = event.target;
  if (target.matches('li')) {
    target.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 4px 8px';
  }
});

skillsSection.addEventListener('mouseout', function (event) {
  const target = event.target;
  if (target.matches('li')) {
    target.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 2px 4px';
  }
});
// Handle message form submit
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log("usersName ===> ", usersName);
  console.log("usersEmail ===> ", usersEmail);
  console.log("usersMessage ===> ", usersMessage);

  // Display messages in a list
  const messageSection = document.querySelector("#messages");
  const messageHeader = messageSection.querySelector("h2");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement(`li`);
  newMessage.classList.add("submitted-message");
  newMessage.innerHTML =
    `<a href="mailto:{email}">${usersName}</a>
    <span>${usersMessage}</span>
  </a>`
  messageList.appendChild(newMessage);
  console.log("newMessage =>>>", newMessage);
  const messageLink = document.createElement('a');
  messageLink.href = `mailto:${usersEmail}`;
  messageLink.innerText = usersName;
  //edit button
  const editButton = document.createElement('button');
  editButton.classList.add("edit-button")
  editButton.innerText = "edit";
  editButton.setAttribute('type', 'button');
  editButton.addEventListener("click", function (event) {
    event.preventDefault();
    const editedMessage = prompt('Enter the edited message:');
    const messageText = newMessage.querySelector("span");
    messageText.innerText = editedMessage;
  });
  //remove button
  const removeButton = document.createElement('button')
  removeButton.classList.add("remove-button");
  removeButton.innerText = "remove";
  removeButton.setAttribute('type', 'button');
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    const entry = removeButton.parentNode;
    entry.remove();
    if (messageList.childNodes.length === 0) {
      messageHeader.style.visibility = "hidden";
    }
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageForm.reset();
});
