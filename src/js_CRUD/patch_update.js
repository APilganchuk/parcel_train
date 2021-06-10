const BASE_URL = `http://localhost:3000`;

function updateBookById(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}
// updateBookById({ raiting: 1 }, 8);
