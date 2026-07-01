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
  myLibrary.map((storedBook) => {
    // creates cards
    const card = document.createElement("div");
    groupOfBooks.appendChild(card);
    card.classList.add("dispCard");
    groupOfBooks.classList.add("groupOfBook");
    document.body.appendChild(groupOfBooks);

    //Creates a div containing the title of the book and displays it
    const dispTitle = document.createElement("div");
    dispTitle.classList.add("title");
    dispTitle.textContent = `Title:${storedBook.title}`;
    card.appendChild(dispTitle);

    //Creates a div containing the author of the book and displays it
    const dispAuthor = document.createElement("div");
    dispAuthor.classList.add("author");
    dispAuthor.textContent = `Author:${storedBook.author}`;
    card.appendChild(dispAuthor);

    //Creates a div containing the pages of the book and displays it
    const dispPages = document.createElement("div");
    dispPages.classList.add("pages");
    dispPages.textContent = `Pages:${storedBook.pages}`;
    card.appendChild(dispPages);

    //Creates a div containing the status of the book and displays it
    const dispStatus = document.createElement("div");
    dispStatus.classList.add("status");
    dispStatus.textContent = `Status:${storedBook.read}`;
    card.appendChild(dispStatus);

  })
}
addBookToLibrary("Hogwarts", "Bhavesh", 45, "read");
addBookToLibrary("magic", "kumawat", 64, "not read yet");
addBookToLibrary("magic", "kumawat", 64, "not read yet");
addBookToLibrary("magic", "kumawat", 64, "not read yet");
addBookToLibrary("magic", "kumawat", 64, "not read yet");
addBookToLibrary("magic", "kumawat", 64, "not read yet");
addBookToLibrary("magic", "kumawat", 64, "not read yet");



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


