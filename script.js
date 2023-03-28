let myLibrary = [
  {title: "Sky Lies",
  author: "Tyler Moore",
  genre: "Fantasy",
  pages: 250,
  read: true
  }
  {title: "Hobbit",
  author: "JRR Tolkien",
  genre: "Fantasy",
  pages: 275,
  read: true
  }
];
let add_book = document.getElementById("add_book");
let modal = document.getElementById("new_book_modal");
let remove_modal = document.getElementById("remove_modal");

add_book.onclick = function () {
  modal.style.display = "flex";
};

remove_modal.onclick = function () {
  modal.style.display = "none";
};

function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + read;
  };
}
function addBookToLibrary() {
  
}

// theHobbit = new Book("The Hobbit", "J.R.R. Tolkien","295 Pages", "have read")
