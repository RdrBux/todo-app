export class Card {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }

  displayDOM() {
    const card = document.createElement("div");
    card.classList = "card";

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = this.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = this.description;

    const cardDate = document.createElement("p");
    cardDate.textContent = `Date: ${this.date}`;

    const cardDone = document.createElement("p");
    cardDone.textContent = `done`;

    const cardRemove = document.createElement("p");
    cardRemove.textContent = `x`;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDate);
    card.appendChild(cardDone);
    card.appendChild(cardRemove);

    return card;
  }
}
