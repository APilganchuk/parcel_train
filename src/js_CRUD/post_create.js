const BASE_URL = `http://localhost:3000`;

const newBook = {
  title: 'Test Book',
  author: 'I',
  genres: ['js'],
  raiting: 10,
};
function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options)
    .then(response => response.json())
    .then();
}
// addBook({
//   title: 'WoW',
//   author: 'I',
//   genres: ['html'],
//   raiting: 10,
// }).then(renderBook);

function renderBook(book) {
  console.log('render book');
  console.log(book);
}
