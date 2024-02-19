const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// User Interface
const addBtn = document.querySelector('#add-button');
const libraryGrid = document.querySelector('.library-grid');

