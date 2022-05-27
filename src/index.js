import { Card } from "./cards";
import { Project } from "./projects";
import { buttonConfig } from "./dom";

const project1 = new Project("Proyecto uno");

const card1 = new Card("Comida", "Comprar comida", 232323, "High");

const card2 = new Card("Comida2", "Comprar comida", 232323, "High");

project1.addCard(card1);
project1.addCard(card2);

const main = document.querySelector(".main");
main.appendChild(project1.displayDOM());

const btnAddProject = buttonConfig("#js-add-project", () => {
  const projectName = window.prompt("Project name:");
  const project = new Project(projectName);
  project.appendToNav();
});

const btnRemoveCard = document.querySelectorAll(".card button");
btnRemoveCard.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    project1.removeCard(btn.classList[1]);
  })
);
