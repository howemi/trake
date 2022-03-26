let graph = document.getElementById("graph");

chrome.storage.sync.get("color", ({ color }) => {
  graph.style.backgroundColor = color;
});
