// element = document.querySelector(selectors);

console.log("hello content fdsfsd");

createButton();

/////////////////////////////// fns ////////////////////

function createButton() {
  var button = document.createElement("button");

  button.setAttribute("id", "lvrfy-button");
  button.innerHTML = "Press me";
  button.style.zIndex = 10000;
  button.style.position = "fixed";
  button.onclick = getLikes;

  document.body.append(button);
}

function getLikes() {
  console.log("test fn");
  var text = document.querySelector("#top-level-buttons-computed #text");
  console.log("text", text);
}
