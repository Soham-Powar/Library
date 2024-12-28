const myLibrary = [];

function Book (title, author, noOfPages, readStatus) {
	this.title = title;
	this.author = author;
	this.noOfPages = noOfPages;
	this.readStatus = readStatus;
}

function addBookToLibrary(title, author, noOfPages, readStatus) {
	const newBook = new Book(title, author, noOfPages, readStatus);
	myLibrary.push(newBook);
displayBooks(myLibrary);
}

function displayBooks(myLibrary) {
	const container = document.querySelector('.container');
	container.innerHTML = '';
	for (const Book of myLibrary) {
		const bookCard = document.createElement("div");
		bookCard.className = "card";
		bookCard.innerHTML = `
		<h3>${Book.title}</h3>
			by <h4>${Book.author}</h4>
			<p>${Book.noOfPages} pages</p>
			<p>${Book.readStatus}</p>`
		;
		container.appendChild(bookCard);
	}
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Not Read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, "Not Read");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "Not Read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Read");
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, "Read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, "Read");
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, "Not Read");