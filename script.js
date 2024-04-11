// Data structures
const myLibrary = [];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get pages() {
        return this._pages;
    }

    set pages(value) {
        this._pages = value;
    }

    get read() {
        return this._read;
    }

    set read(value) {
        this._read = value;
    }
    toggleRead() {
        this.read = !this.read;
    }

}
// // Toggle read for prototype
// Book.prototype.toggleRead = function () {
//     this.read = !this.read;
// }

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// Opening and closing Modal
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#open-modal');
openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
})

const addBtn = document.querySelector('.add-book');
addBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    addBookToLibrary();
    event.preventDefault();
})

const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    event.preventDefault();
})


// Add book to library
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

// Render added books
const libraryGrid = document.querySelector('.library-grid');
function render() {
    libraryGrid.innerHTML = ''; // reset HTML before adding an element

    // Show library is empty if array is empty
    if (myLibrary.length == 0) {
        libraryGrid.innerHTML = 'Your library is empty.';
        libraryGrid.classList.add('empty');
    } else {
        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i];
            let bookEl = document.createElement('div');
            bookEl.setAttribute('class', 'book');
            bookEl.innerHTML = `<div class="book-content">
                                <div class="title">${book.title}</div>
                                    <div class="author">by ${book.author}</div>
                                    <div class="pages">${book.pages} pages</div>
                                </div>
                                <div class="book-btns">
                                    <button onclick="toggleRead(${i})">${book.read === true ? 'Read' : 'Not Read'}</button>
                                    <button class="remove" onclick="removeBook(${i})">Remove</button>
                                </div>`;
            libraryGrid.appendChild(bookEl);
        }
        libraryGrid.classList.remove('empty');
    }
}

// Remove book 
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


render(); // render once every open of page