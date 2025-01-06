const myLibrary = [];

function Book (title, author, noOfPages, readStatus) {
	this.title = title;
	this.author = author;
	this.noOfPages = noOfPages;
	this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus = function () {
  this.readStatus = this.readStatus === "Read" ? "Not Read" : "Read";
};

//Adds book to the library array.
function addBookToLibrary(title, author, noOfPages, readStatus) {
	const newBook = new Book(title, author, noOfPages, readStatus);
	myLibrary.push(newBook);
	displayBooks(myLibrary);
}

//This displays all the books currently present in the array.
//Creates a div and adds all the information about the book.
function displayBooks() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "card";
    bookCard.setAttribute("data-index", index);

    bookCard.innerHTML = `
      <h3>${book.title}<button class="cross-btn">X</button></h3>
      by <h4>${book.author}</h4>
      <p>${book.noOfPages} pages</p>
      <button class="book-button">${book.readStatus}</button>
    `;
    container.appendChild(bookCard);
  });
	  addReadBtnStyle();

  addEventListeners(); // Add event listeners after re-rendering
}

//listens for 'remove book' and 'toggleread' events.
function addEventListeners() {
  const removeBookBtns = document.querySelectorAll('.cross-btn');
  const toggleReadBtns = document.querySelectorAll('.book-button');

  removeBookBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.closest(".card").getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });

  toggleReadBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.closest(".card").getAttribute('data-index');
      myLibrary[index].toggleReadStatus();
      displayBooks();
    });
  });
}

function addReadBtnStyle() {
  const readBtns = document.querySelectorAll('.book-button');
	readBtns.forEach((btn) => {
		if(btn.innerHTML === 'Read') {
			btn.classList.add("read");
			btn.classList.remove("notread");
		}
		else {
			btn.classList.add("notread");
			btn.classList.remove("read");
		}
	});
}

//for the form that shows up on clicking add book btn.

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector('.addBookBtn');
const closeFormBtn = document.querySelector(".header button");

addBookBtn.addEventListener('click', () => {
	dialog.showModal();
});

closeFormBtn.addEventListener('click', () => {
	dialog.close();
})

//to add the filled form to library

const form = document.querySelector('form');
form.addEventListener('submit', event => {

	event.preventDefault();

	addBookToLibrary(event.target.bookTitle.value, event.target.bookAuthor.value, event.target.pages.value , event.target.read.value);

  	form.reset();
  	dialog.close();
});

//to let some books be by default in library

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 694, "Not Read");
addBookToLibrary("A Good Girl's Guide to Murder", "Holly Jackson", 400, "Read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, "Not Read");
// addBookToLibrary("Moby Dick", "Herman Melville", 635, "Not Read");
// addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Read");
// addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, "Read");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
// addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, "Read");
// addBookToLibrary("The Alchemist", "Paulo Coelho", 208, "Not Read");


//USING CLASSES

class book {
  constructor (title, author, noOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
  }

  toggleReadStatus() {
    this.readStatus = this.readStatus === "Read" ? "Not Read" : "Read"; 
  }
}