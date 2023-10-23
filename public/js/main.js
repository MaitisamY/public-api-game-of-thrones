// Books Modal Scripting

// Get Modals
var booksModal = document.getElementById("booksModal");
var charactersModal = document.getElementById("charactersModal");
var housesModal = document.getElementById("housesModal");

// Get the buttons that opens and closes Modals
var openBooks = document.getElementById("openBooks");
var closeBooks = document.getElementsByClassName("close")[0];

var openCharacters = document.getElementById("openCharacters");
var closeCharacters = document.getElementsByClassName("close")[1];

var openHouses = document.getElementById("openHouses");
var closeHouses = document.getElementsByClassName("close")[2];

// <-- Books modal manipulation 

openBooks.onclick = function() {
    booksModal.style.display = "block";
}
closeBooks.onclick = function() {
    booksModal.style.display = "none";
}

// Books modal manipulation -->

openCharacters.onclick = function() {
    charactersModal.style.display = "block";
}
closeCharacters.onclick = function() {
    charactersModal.style.display = "none";
}

// Characters modal manipulation -->

// <-- Houses modal manipulation 

openHouses.onclick = function() {
    housesModal.style.display = "block";
}
closeHouses.onclick = function() {
    housesModal.style.display = "none";
}

// Houses modal manipulation -->

// If clicked outside of modal

window.onclick = function(event) {
  if (event.target === booksModal || event.target === charactersModal || event.target === housesModal) {
    booksModal.style.display = "none";
    charactersModal.style.display = "none";
    housesModal.style.display = "none";
  }
}