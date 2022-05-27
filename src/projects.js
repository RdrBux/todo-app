export class Project {
  cardlist = [];

  constructor(name) {
    this.name = name;
  }

  addCard(card) {
    this.cardlist.push(card);
  }

  removeCard(index) {
    this.cardlist.splice(index, 1);
  }

  displayDOM() {
    const project = document.createElement("div");
    project.classList = "project";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = this.name;

    project.appendChild(projectTitle);

    this.cardlist.forEach((card) => {
      project.appendChild(card.displayDOM());
    });

    return project;
  }

  appendToNav() {
    const navProjects = document.querySelector(".project-btns");
    const liProject = document.createElement("li");
    liProject.classList = "js-li-project";
    const btn = document.createElement("button");
    btn.textContent = this.name;

    const removeBtn = document.createElement("button");
    removeBtn.classList = "remove";
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => {
      navProjects.removeChild(liProject);
    });

    liProject.appendChild(btn);
    liProject.appendChild(removeBtn);
    navProjects.appendChild(liProject);
  }
}