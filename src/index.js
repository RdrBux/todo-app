import { Card } from "./cards";
import {
  Project,
  allProjects,
  projectSelected,
  handleSubmit,
  displayAllCards,
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

/// DEFAULT CARDS
const today = new Date();
const currentDate =
  today.getFullYear() +
  "-" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + today.getDate()).slice(-2);
const card1 = new Card("Comida 1", "Comprar comida", currentDate, "high");

const card2 = new Card("Comida 2", "Comprar más comida", currentDate, "medium");

const project0 = new Project("Default Project");
allProjects.push(project0);
project0.appendToNav();
project0.addCard(card1);
project0.addCard(card2);
projectSelected[0] = "All Projects";
displayAllCards();
navSelected();
///

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
  if (projectSelected[0] === "All Projects") {
    displayAllCards();
  } else {
    addToMain(projectSelected[0]);
  }
});

const btnAllProjects = document.querySelector(".all-projects");
btnAllProjects.addEventListener("click", () => {
  projectSelected[0] = "All Projects";
  displayAllCards();
  navSelected();
});
