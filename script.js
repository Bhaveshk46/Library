const myLibrary = [];

function Book(title,author,pages,read){
   if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };
  this.title= title;
  this.author= author;
  this.pages= pages;
  this.read= read;
  this.id = crypto.randomUUID();
  this.info = function(){
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet");
console.log(theHobbit.info());

function addBookToLibrary(){
  let title = prompt("What is the title of your book?");
  let author = prompt("What is the name of the author?");
  let pages = prompt("How many pages does the book has?");
  let read = prompt("Have you read the book?(read/not read yet");
  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
}

function showBook(){
  for(let i = 0 ; i<myLibrary.length;i++){
    
  }
}
