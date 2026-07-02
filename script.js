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


//inp means input
function addBookToLibrary(inpTitle, inpAuthor, inpPages, inpRead) {
  let newBook = new Book(inpTitle, inpAuthor, inpPages, inpRead);
  myLibrary.push(newBook);
}

//Creates an parent div like a container
const groupOfBooks = document.createElement("div");

function showBook() {
  latestBook = myLibrary[myLibrary.length-1];
    // creates cards
    const card = document.createElement("div");
    groupOfBooks.appendChild(card);
    card.classList.add("dispCard");
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
  const inpTitle = document.getElementById("bookTitle").value;
  const inpAuthor = document.getElementById("bookAuthor").value;
  const inpPages = document.getElementById("bookPages").value;
  const dropdown = document.getElementById("bookStatus");
  const value = dropdown.value;
  const inpRead = dropdown.options[dropdown.selectedIndex].text;
  addBookToLibrary(inpTitle,inpAuthor,inpPages,inpRead);
  showBook();
})


