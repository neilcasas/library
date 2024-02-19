// Data structures
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Opening and closing Modal
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#open-modal');
openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

const addBtn = document.querySelector('.add-book');
addBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    addBookToLibrary();
    event.preventDefault();
})
const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    event.preventDefault();
})


// Add book to library
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
}

// Render added books
function render() {
    const libraryGrid = document.querySelector('.library-grid');
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}