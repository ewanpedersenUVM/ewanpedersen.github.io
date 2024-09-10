document.addEventListener("DOMContentLoaded", () => {
  const figureData = [
    { name: "Blazing Inferno", imgSrc: "images/figure1.jpg" },
    { name: "Flame Master", imgSrc: "images/figure2.jpg" },
    { name: "Torch Bearer", imgSrc: "images/figure3.jpg" },
    { name: "Firestorm", imgSrc: "images/figure4.jpg" },
  ];

  const figureGrid = document.querySelector(".figure-grid");

  figureData.forEach((figure) => {
    const figureElement = document.createElement("div");
    figureElement.classList.add("figure");
    figureElement.innerHTML = `
            <img src="${figure.imgSrc}" alt="${figure.name}">
            <p>${figure.name}</p>
        `;
    figureGrid.appendChild(figureElement);
  });

  const revealButton = document.getElementById("reveal-btn");
  const favoriteFigure = document.getElementById("favorite-figure");

  revealButton.addEventListener("click", () => {
    favoriteFigure.classList.remove("hidden");
  });
});
