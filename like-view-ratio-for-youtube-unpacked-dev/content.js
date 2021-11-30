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
  console.log("test fn");
  var text = document.querySelector("#top-level-buttons-computed #text");
  console.log("text", text);

  // var label = text.ariaLabel;
  var likes = text.ariaLabel.replace(/\D/g, "");
  console.log("~ likes", likes);

  // var views = document.querySelector("ytd-video-view-count-renderer .view-count");
  var views = document.querySelector(".view-count");

  views = views.textContent.replace(/\D/g, "");
  console.log("~ views", views);

  var ratio = (likes / views) * 100;
  ratio = Number.parseFloat(ratio).toPrecision(3);
  console.log("~ ratio", ratio);

  insertRatio(ratio);
}

function insertRatio(ratio) {
  // #info #top-level-buttons-computed.ytd-menu-renderer

  var container = document.querySelector(
    "#info #top-level-buttons-computed.ytd-menu-renderer"
  );

  var ratioDisplay = document.createElement("div");

  ratioDisplay.innerHTML = `L/V ${ratio}&#37;`;
  ratioDisplay.style.fontSize = "14px";
  ratioDisplay.style.fontWeight = 500;
  ratioDisplay.style.height = "40px";
  ratioDisplay.style.lineHeight = "40px";

  // eElement.insertBefore(newFirstElement, eElement.firstChild);

  container.insertBefore(ratioDisplay, container.firstChild);
}
