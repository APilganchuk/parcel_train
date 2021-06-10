const BASE_URL = `http://localhost:3000`;
// function fetchBooks() {
//   return fetch(`${BASE_URL}/books/`)
//     .then(response => response.json())
//     .then(console.log);
// }

// function fetchBookById(id) {
//   return fetch(`${BASE_URL}/books/${id}`)
//     .then(response => response.json())
//     .then(console.log);
// }
// fetchBookById();

async function fetchBookById(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  const books = await response.json();
  return books;
}

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books/`);
  const books = await response.json;
  return books;
}


