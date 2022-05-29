import { allProjects, Project } from "./projects";

export class Card {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.done = false;
  }

  displayCARD() {
    const card = document.createElement("div");
    card.classList = "card";

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = this.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = this.description;

    const cardDate = document.createElement("p");
    cardDate.textContent = this.date;

    const cardDone = document.createElement("INPUT");
    cardDone.setAttribute("type", "checkbox");

    if (this.done) {
      cardDone.setAttribute("checked", "true");
      card.classList.add("done");
    }

    cardDone.addEventListener("change", (e) => {
      if (e.target.checked) {
        card.classList.add("done");
        this.done = true;
      } else {
        card.classList.remove("done");
        this.done = false;
      }
    });

    const cardRemove = document.createElement("button");
    cardRemove.classList.add("remove");
    cardRemove.textContent = `x`;
    cardRemove.addEventListener("click", () => {
      card.classList.add("removed");
      allProjects.forEach((proj) => {
        proj.removeCard(this.title);
      });
    });

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDate);
    card.appendChild(cardDone);
    card.appendChild(cardRemove);

    return card;
  }
}
