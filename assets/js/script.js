// DOM references
var gameFinderEl = document.getElementById('game-finder');
var cinemafilesEl = document.getElementById('cinemafiles');

// function to handle location change after click on element
function handleGameFinderLocation() {
    window.location.href="https://ianmosur06.github.io/Project-1-Game-Finder-by-Adam-Larue-Sangki-Jun-and-Ian-Mosur/";
};

function handleCinemafilesLocation() {
    window.location.href="https://cinemafiles.herokuapp.com/";
};

// event listener for click on game-finder
gameFinderEl.addEventListener("click", handleGameFinderLocation);
cinemafilesEl.addEventListener("click", handleCinemafilesLocation);