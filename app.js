const openModalButton = document.querySelector('.add-book');
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('.form-modal');
const submitBookButton = document.querySelector('#submit-book');
let bookTitle;
let bookAuthor;
let bookPages;
let bookHaveRead;
let bookID = 0;

openModalButton.addEventListener('click', () => {
  modal.showModal();
})

closeModalButton.addEventListener('click', () => {
  modal.close();
})

const myLibrary = [];

function Book(title, author, pages, haveRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.id = id;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function submitBook() {
  let book;
  bookTitle = document.querySelector('.book-form').elements[0].value;
  bookAuthor = document.querySelector('.book-form').elements[1].value;
  bookPages = document.querySelector('.book-form').elements[2].value;
  bookHaveRead = document.querySelector('.book-form').elements[3].checked;
  book = new Book(bookTitle, bookAuthor, bookPages, bookHaveRead, bookID);
  addBookToLibrary(book);
  bookID++;
}

submitBookButton.addEventListener('click', submitBook);