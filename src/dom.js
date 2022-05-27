export function buttonConfig(strOfDomElement, functionToApply) {
  const button = document.querySelector(strOfDomElement);
  button.addEventListener("click", () => {
    functionToApply();
  });
}
