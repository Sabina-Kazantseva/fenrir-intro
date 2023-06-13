// Add elements to the footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const myName = "Sabina Kazantseva";
copyright.innerHTML = "\u00A9" + myName + " " + thisYear;
footer.appendChild(copyright);

// Add skills to the skills sections
const skills = ["HTML", "CSS", "JavaScript", "Git"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Message form
console.log("blablabla");
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log("usersName ===> ", usersName);
  console.log("usersEmail ===> ", usersEmail);
  console.log("usersMessage ===> ", usersMessage);
});
