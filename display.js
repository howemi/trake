let graph = document.getElementById("graph");
for (let i = 0; i < 365; i++) {
  let add = document.createElement("div");
  add.classList.add("box");
  graph.appendChild(add);
}

chrome.storage.sync.get("color", ({ color }) => {
  graph.style.backgroundColor = color;
});
