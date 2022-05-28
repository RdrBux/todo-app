import { Card } from "./cards";
import {
  Project,
  allProjects,
  projectSelected,
  handleSubmit,
} from "./projects";
import {
  formContainer,
  form,
  displayForm,
  hideForm,
  buttonConfig,
  addToMain,
  clearMain,
  navSelected,
} from "./dom";

const today = new Date();
const currentDate =
  today.getFullYear() +
  "-" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + today.getDate()).slice(-2);
const card1 = new Card("Comida", "Comprar comida", currentDate, "High");

const card2 = new Card("Comida2", "Comprar comida", currentDate, "High");

const project0 = new Project("Default Project");
allProjects.push(project0);
project0.appendToNav();
project0.addCard(card1);
project0.addCard(card2);
addToMain("Default Project");
projectSelected[0] = project0.name;
navSelected();

const btnAddProject = buttonConfig("#js-add-project", () => {
  const projectName = window.prompt("Project name:");
  const project = new Project(projectName);
  allProjects.push(project);
  project.appendToNav();
  clearMain();
  addToMain(project.name);
  projectSelected[0] = project.name;
  navSelected();
});

const btnRemoveCard = document.querySelectorAll(".card button");
btnRemoveCard.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    project.removeCard(btn.classList[1]);
  })
);

const btnAddCard = document.querySelector("#js-btn-cards");
btnAddCard.addEventListener("click", () => {
  displayForm();
});

formContainer.addEventListener("click", (e) => {
  if (e.target.id !== "form-container") {
    return;
  }
  hideForm();
});

form.addEventListener("submit", (e) => {
  handleSubmit(e);
  form.reset();
  hideForm();
  clearMain();
  addToMain(projectSelected[0]);
});
