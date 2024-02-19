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
    console.log('clicked');
})

addBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})
