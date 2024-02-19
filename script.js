const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// User Interface
const addBtn = document.querySelector('.add-button');
const libraryGrid = document.querySelector('.library-grid');
const openModalBtn = document.querySelector('#open-modal');
const modal = document.querySelector('.modal');


openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
    console.log('clicked');
})

addBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})