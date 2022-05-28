import { Card } from "./cards";

export const allProjects = [];
export const projectSelected = [];

export class Project {
  cardlist = [];

  constructor(name) {
    this.name = name;
  }

  addCard(card) {
    this.cardlist.push(card);
  }

  removeCard(cardTitle) {
    this.cardlist.forEach((card, index) => {
      if (card.title === cardTitle) {
        this.cardlist.splice(index, 1);
      }
    });
  }

  displayDOM() {
    const project = document.createElement("div");
    project.classList = "project";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = this.name;

    project.appendChild(projectTitle);

    this.cardlist.forEach((card) => {
      project.appendChild(card.displayCARD());
    });

    return project;
  }

  appendToNav() {
    const navProjects = document.querySelector(".project-btns");
    const liProject = document.createElement("li");
    liProject.classList = "js-li-project";
    const btn = document.createElement("button");
    btn.classList.add("project-btn");
    btn.textContent = this.name;

    const removeBtn = document.createElement("button");
    removeBtn.classList = "remove";
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => {
      navProjects.removeChild(liProject);
      const index = allProjects.findIndex((proj) => proj.name === this.name);
      allProjects.splice(index, 1);
    });

    liProject.appendChild(btn);
    liProject.appendChild(removeBtn);
    navProjects.appendChild(liProject);
  }
}

export function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const formCard = new Card(
    formProps.title,
    formProps.description,
    formProps.date,
    formProps.priority
  );
  allProjects.forEach((project) => {
    if (project.name === projectSelected[0]) {
      project.addCard(formCard);
    }
  });
}
