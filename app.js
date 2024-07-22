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

defaultBook = new Book('Galatians', 'Paul', 5, true, bookID);
addBookToLibrary(defaultBook);
addBookCard(myLibrary[bookID]);

function addBookCard(book) {
  const nodeBookCard = document.createElement('div');
  const nodeBookInfo = document.createElement('div');
  const nodeBookTitle = document.createElement('h3');
  const nodeBookAuthor = document.createElement('span');
  const nodeBookPages = document.createElement('span');
  const nodeBookAction = document.createElement('div');
  const nodeBookHaveRead = document.createElement('button');
  const nodeBookRemove = document.createElement('button');

  nodeBookCard.classList.add('book-card');
  nodeBookInfo.classList.add('book-info');
  nodeBookTitle.classList.add('book-title');
  nodeBookAuthor.classList.add('book-author');
  nodeBookPages.classList.add('book-pages');
  nodeBookAction.classList.add('book-action');
  nodeBookHaveRead.classList.add('toggle-read');
  nodeBookRemove.classList.add('remove-book');

  nodeBookTitle.textContent = book.title;
  nodeBookAuthor.textContent = book.author;
  nodeBookPages.textContent = `${book.pages} Pages`;
  if(book.haveRead) {
    nodeBookHaveRead.classList.add('read');
    nodeBookHaveRead.textContent = 'Read'
  } else {
    nodeBookHaveRead.classList.add('not-read');
    nodeBookHaveRead.textContent = 'Not Read'
  }
  nodeBookRemove.textContent = 'Remove';
  nodeBookCard.dataset.id = book.id;

  appendBookCard(nodeBookCard, nodeBookInfo, nodeBookTitle, nodeBookAuthor, nodeBookPages, nodeBookAction, nodeBookHaveRead, nodeBookRemove);
}

function appendBookCard(nodeBook, nodeInfo, nodeTitle, nodeAuhor, nodePages, nodeAction, nodeRead, nodeRemove ) {
  document.querySelector('.card-ctn').appendChild(nodeBook);
  nodeBook.appendChild(nodeInfo);
  nodeBook.appendChild(nodeAction);
  nodeInfo.appendChild(nodeTitle);
  nodeInfo.appendChild(nodeAuhor);
  nodeInfo.appendChild(nodePages);
  nodeAction.appendChild(nodeRead);
  nodeAction.appendChild(nodeRemove);
}

function submitBook() {
  let book;
  bookID++;
  bookTitle = document.querySelector('.book-form').elements[0].value;
  bookAuthor = document.querySelector('.book-form').elements[1].value;
  bookPages = document.querySelector('.book-form').elements[2].value;
  bookHaveRead = document.querySelector('.book-form').elements[3].checked;
  book = new Book(bookTitle, bookAuthor, bookPages, bookHaveRead, bookID);
  addBookToLibrary(book);
  addBookCard(myLibrary[bookID]);
}

submitBookButton.addEventListener('click', submitBook);