const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
let myName = "Sabina Kazantseva";
const currentYear = new Date().getFullYear();
copyright.innerHTML =  "\u00A9"  + myName + " " + currentYear;
footer.appendChild(copyright);
const skills = ["HTML", "CSS", "JavaScript", "Git"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }

