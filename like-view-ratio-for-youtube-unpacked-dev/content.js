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

}
