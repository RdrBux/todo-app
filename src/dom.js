export function buttonConfig(strOfDomElement, functionToApply) {
  const button = document.querySelector(strOfDomElement);
  button.addEventListener("click", () => {
    functionToApply();
  });
}

const main = document.querySelector(".main");

export function addToMain(project) {
  main.appendChild(project.displayDOM());
}

export function clearMain() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}

export function displayForm() {}
