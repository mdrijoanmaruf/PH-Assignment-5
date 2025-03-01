document.getElementById("themeChanger").addEventListener("click", function () {
  function getRandomLightColor() {
    const r = Math.floor(200 + Math.random() * 56);
    const g = Math.floor(200 + Math.random() * 56);
    const b = Math.floor(200 + Math.random() * 56);
    return `rgb(${r}, ${g}, ${b})`;
  }

  document.body.style.backgroundColor = getRandomLightColor();
});
