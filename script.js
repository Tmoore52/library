let myLibrary = [];
let add_book = document.getElementById("add_book")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      return title + " by " + author + ", " + pages + ", " + read
    }
}
function addBookToLibrary() {}



// theHobbit = new Book("The Hobbit", "J.R.R. Tolkien","295 Pages", "have read")

