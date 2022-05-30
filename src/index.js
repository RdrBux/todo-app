import { Card, dayFilter, transformDate } from "./cards";
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
  filterSelected,
} from "./dom";

/// DEFAULT CARDS
const today = new Date();
const currentDate = transformDate(today);

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

const projectMenu = document.querySelector(".project-menu");

const btnAddProject = buttonConfig("#js-add-project", () => {
  projectMenu.style.display = "flex";
});

projectMenu.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const project = new Project(formProps["proj-title"]);
  allProjects.push(project);
  project.appendToNav();
  clearMain();
  addToMain(project.name);
  projectSelected[0] = project.name;
  navSelected();
  projectMenu.reset();
  projectMenu.style.display = "none";
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

const btnFilters = document.querySelectorAll(".filter-btn");
btnFilters.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    dayFilter[0] = btn.textContent;
    filterSelected();
    clearMain();
    if (projectSelected[0] === "All Projects") {
      displayAllCards();
    } else {
      addToMain(projectSelected[0]);
    }
  })
);
