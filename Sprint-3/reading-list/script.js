// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

//render books function
function renderBooks() {
  books.forEach((book) => {
    const bookList = document.getElementById("reading-list");
    const listItem = document.createElement("li");
    const bookInfo = document.createElement("p");
    const bookImage = document.createElement("img");
    bookInfo.textContent = book.title + " by " + book.author  ;
    bookImage.src = book.bookCoverImage;
    listItem.appendChild(bookInfo);
    listItem.appendChild(bookImage);
    book.alreadyRead ? (listItem.style.backgroundColor = "green")
                     : (listItem.style.backgroundColor = "red");
    bookList.appendChild(listItem);
  });
}

//render the books on page load
document.addEventListener("DOMContentLoaded", renderBooks);