import { Card } from "./cards";
import { addToMain, clearMain, navSelected } from "./dom";

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
    btn.addEventListener("click", (e) => {
      projectSelected[0] = this.name;
      clearMain();
      addToMain(this.name);
      navSelected();
    });

    liProject.appendChild(btn);

    if (this.name !== "Default Project") {
      const removeBtn = document.createElement("button");
      removeBtn.classList = "remove";
      removeBtn.textContent = "x";
      removeBtn.addEventListener("click", () => {
        navProjects.removeChild(liProject);
        const index = allProjects.findIndex((proj) => proj.name === this.name);
        allProjects.splice(index, 1);
        clearMain();
        displayAllCards();
      });
      liProject.appendChild(removeBtn);
    }
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
  if (projectSelected[0] === "All Projects") {
    allProjects[0].addCard(formCard);
  }
}

const main = document.querySelector(".main");

export function displayAllCards() {
  const project = document.createElement("div");
  project.classList = "project";

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = "All Projects";

  project.appendChild(projectTitle);

  allProjects.forEach((proj) => {
    proj.cardlist.forEach((card) => {
      project.appendChild(card.displayCARD());
    });
  });
  clearMain();
  main.appendChild(project);
  projectSelected[0] = "All Projects";
  navSelected();
}
