import { allProjects, Project } from "./projects";

// Get dates to apply filter in displayed in left nav
export function transformDate(date) {
  date =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  return date;
}

const today = new Date();
const currentDate = transformDate(today);
const lastDayOfWeek = transformDate(
  new Date(today.setDate(today.getDate() - today.getDay() + 7))
);

const thisWeek = [];
let day = new Date();
thisWeek.push(transformDate(day));
let transformedDay = "";
do {
  day.setDate(day.getDate() + 1);
  transformedDay = transformDate(day);
  thisWeek.push(transformedDay);
} while (transformedDay !== lastDayOfWeek);

const nextWeek = [];
const baseDay = new Date();
const nextWeekDay = new Date(
  baseDay.setDate(baseDay.getDate() - baseDay.getDay() + 7)
);
let transformedNextWeekDay = "";
for (let i = 0; i < 7; i++) {
  nextWeekDay.setDate(nextWeekDay.getDate() + 1);
  transformedNextWeekDay = transformDate(nextWeekDay);
  nextWeek.push(transformedNextWeekDay);
}

export const dayFilter = ["All time"];

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
      dayFilter[0] === "All time" ||
      (dayFilter[0] === "Today" && this.date === currentDate) ||
      (dayFilter[0] === "This Week" && thisWeek.includes(this.date)) ||
      (dayFilter[0] === "Next Week" && nextWeek.includes(this.date))
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
