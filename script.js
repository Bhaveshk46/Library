const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.status = function () {
  if (this.read == "Read") {
    this.read = "Not read yet";
  }
  else {
    this.read = "Read";
  }
}

//inp means input
function addBookToLibrary(inpTitle, inpAuthor, inpPages, inpRead) {
  let newBook = new Book(inpTitle, inpAuthor, inpPages, inpRead);
  myLibrary.push(newBook);
}

//Creates an parent div like a container
const groupOfBooks = document.createElement("div");

function showBook() {
  const latestBook = myLibrary[myLibrary.length - 1];
  // creates cards
  const card = document.createElement("div");
  groupOfBooks.appendChild(card);
  card.classList.add("dispCard");
  card.dataset.id = latestBook.id;  //assigns unique id to the card 
  groupOfBooks.classList.add("groupOfBook");
  document.body.appendChild(groupOfBooks);

  //Creates a div containing the title of the book and displays it
  const dispTitle = document.createElement("div");
  dispTitle.classList.add("title");
  dispTitle.textContent = `Title:${latestBook.title}`;
  card.appendChild(dispTitle);

  //Creates a div containing the author of the book and displays it
  const dispAuthor = document.createElement("div");
  dispAuthor.classList.add("author");
  dispAuthor.textContent = `Author:${latestBook.author}`;
  card.appendChild(dispAuthor);

  //Creates a div containing the pages of the book and displays it
  const dispPages = document.createElement("div");
  dispPages.classList.add("pages");
  dispPages.textContent = `Pages:${latestBook.pages}`;
  card.appendChild(dispPages);

  //Creates a div containing the status of the book and displays it
  const dispStatus = document.createElement("div");
  dispStatus.classList.add("status");
  dispStatus.textContent = `Status:${latestBook.read}`;
  card.appendChild(dispStatus);

  //A container for the change status button and delete button
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("container");
  card.appendChild(btnContainer);

  //Creation of changing status button
  const statusBtn = document.createElement("button");
  statusBtn.textContent = "Change status";
  statusBtn.id = "status"
  btnContainer.appendChild(statusBtn);

  //Creation of change status button logic
  statusBtn.addEventListener("click", () => {
    latestBook.status();
    dispStatus.textContent = `Status:${latestBook.read}`;
  })

  //Creation of delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "Delete";
  deleteBtn.dataset.id = latestBook.id;
  deleteBtn.textContent = "Delete";
  btnContainer.appendChild(deleteBtn);

  //Delete button logic
  const deleteLogic = document.querySelector(`[data-id="${latestBook.id}"]`);
  deleteBtn.addEventListener("click", () => {
    deleteLogic.remove();
  })

}

//Creation of buttons logic
const newBook = document.querySelector(".open-button");
const bookDetails = document.querySelector(".book-details");
const close = document.querySelector(".close-button");

newBook.addEventListener("click", () => {
  bookDetails.showModal();
})

close.addEventListener("click", () => {
  bookDetails.close();
})

//Logic for the submit button
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  bookDetails.close();
  const inpTitle = document.getElementById("bookTitle").value;
  const inpAuthor = document.getElementById("bookAuthor").value;
  const inpPages = document.getElementById("bookPages").value;
  const dropdown = document.getElementById("bookStatus");
  const value = dropdown.value;
  const inpRead = dropdown.options[dropdown.selectedIndex].text;
  addBookToLibrary(inpTitle, inpAuthor, inpPages, inpRead);
  showBook();
  document.getElementById("myForm").reset();  //reset the form inputs after submitting
})