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
    cardDate.textContent = this.date;

    const cardDone = document.createElement("INPUT");
    cardDone.setAttribute("type", "checkbox");
    cardDone.addEventListener("change", (e) => {
      if (e.target.checked) {
        card.classList.add("done");
      } else {
        card.classList.remove("done");
      }
    });

    const cardRemove = document.createElement("button");
    cardRemove.classList.add("remove");
    cardRemove.classList.add(this.title);
    cardRemove.textContent = `x`;
    cardRemove.addEventListener("click", () => {
      card.classList.add("removed");
    });

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDate);
    card.appendChild(cardDone);
    card.appendChild(cardRemove);

    return card;
  }
}
