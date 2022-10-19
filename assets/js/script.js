// DOM references
var gameFinderEl = document.getElementById('game-finder');

// function to handle location change after click on element
function handleWindowLocation() {
    window.location.href="https://ianmosur06.github.io/Project-1-Game-Finder-by-Adam-Larue-Sangki-Jun-and-Ian-Mosur/";
}

// event listener for click on game-finder
gameFinderEl.addEventListener("click", handleWindowLocation);