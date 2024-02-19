// Data structures
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// User interface
const addBtn = document.querySelector('.add-button');
const openModalBtn = document.querySelector('#open-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-button');
const libraryGrid = document.querySelector('.library-grid');

// Opening and closing Modal
openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

addBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    addBookToLibrary();
    event.preventDefault();
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    event.preventDefault();
})


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
}