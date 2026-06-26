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
  this.info = function () {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(theHobbit.info());

//inp means input
function addBookToLibrary(inpTitle,inpAuthor,inpPages,inpRead) {
  let title = inpTitle;
  let author = inpAuthor;
  let pages = inpPages;
  let read = inpRead;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function showBook() {
  myLibrary.map((storedBook)=>{
    //Creates an parent div or card like container
    const groupOfBooks = document.createElement("div");
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
addBookToLibrary("Hogwarts","Bhavesh",45,"read");
addBookToLibrary("magic","kumawat",64,"not read yet");
console.log(myLibrary);
showBook()



