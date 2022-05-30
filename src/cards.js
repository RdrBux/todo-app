import { allProjects, Project } from "./projects";

const today = new Date();
const currentDate =
  today.getFullYear() +
  "-" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + today.getDate()).slice(-2);
const dayFilter = "Today";

export class Card {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.done = false;
  }

  displayCARD() {
    if (
      dayFilter === "All time" ||
      (dayFilter === "Today" && this.date === currentDate)
    ) {
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
    } else {
      return document.createElement("div");
    }
  }
}

/* export function filterByDate(filter, card) {
  if (filter === "All time") {
    card.displayCARD();
  }
  if (filter === "Today") {
    if (new Date(card.date).withoutTime() === new Date(thisDay).withoutTime()) {
      card.displayCARD();
    }
  }
}
 */
