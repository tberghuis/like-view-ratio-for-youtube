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
  // button.onclick = insertRatio;

  document.body.append(button);
}

function getLikes() {
  var likesText = document.querySelector("#top-level-buttons-computed #text");
  var likes = likesText.ariaLabel.replace(/\D/g, "");

  var views = document.querySelector(".view-count");
  views = views.textContent.replace(/\D/g, "");

  var ratio = (likes / views) * 100;
  ratio = Number.parseFloat(ratio).toPrecision(3);

  insertRatio(ratio);
}

function insertRatio(ratio) {
  var container = document.querySelector(
    "#info #top-level-buttons-computed.ytd-menu-renderer"
  );

  var ratioDisplay = document.createElement("div");
  ratioDisplay.innerHTML = `L/V ${ratio}&#37;`;
  ratioDisplay.style.fontSize = "14px";
  ratioDisplay.style.fontWeight = 500;
  ratioDisplay.style.height = "40px";
  ratioDisplay.style.lineHeight = "40px";

  container.insertBefore(ratioDisplay, container.firstChild);
}
