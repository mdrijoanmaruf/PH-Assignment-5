document.getElementById("clearHistory").addEventListener("click", function () {
  document.getElementById("removedHistory").style.display = "block";
  document.getElementById("noHistory").style.display = "none";
  document.getElementById("history").innerHTML = "";
});
