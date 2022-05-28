export function buttonConfig(strOfDomElement, functionToApply) {
  const button = document.querySelector(strOfDomElement);
  button.addEventListener("click", () => {
    functionToApply();
  });
}

// MAIN INTERACTIONS

const main = document.querySelector(".main");

export function addToMain(project) {
  main.appendChild(project.displayDOM());
}

export function clearMain() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}

// FORM CONTAINER
export const form = document.querySelector("#form-container");

export function displayForm() {
  form.style.display = "flex";
}

export function hideForm() {
  form.style.display = "none";
}

export function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  addBookToLibrary(
    formProps.author,
    formProps.title,
    formProps.pages,
    formProps.read
  );
  form.reset();
  hideForm();
}
