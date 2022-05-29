import { allProjects, projectSelected } from "./projects";

export function buttonConfig(strOfDomElement, functionToApply) {
  const button = document.querySelector(strOfDomElement);
  button.addEventListener("click", () => {
    functionToApply();
  });
}

// MAIN INTERACTIONS

const main = document.querySelector(".main");

export function addToMain(projectName) {
  allProjects.forEach((proj) => {
    if (proj.name === projectName) {
      main.appendChild(proj.displayDOM());
    }
  });
}

export function clearMain() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}

export function navSelected() {
  const navAllProjects = document.querySelectorAll(".project-btn");
  navAllProjects.forEach((proj) => {
    if (proj.textContent === projectSelected[0]) {
      proj.classList.add("selected");
    } else {
      proj.classList.remove("selected");
    }
  });
}

// FORM CONTAINER
export const formContainer = document.querySelector("#form-container");
export const form = document.querySelector(".form");

export function displayForm() {
  formContainer.style.display = "flex";
}

export function hideForm() {
  formContainer.style.display = "none";
}

/* export function addProjectMenu() {
  const projMenu = document.createElement('div');
  projMenu.classList.add('project-menu');


} */
