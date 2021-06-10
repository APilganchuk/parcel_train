const BASE_URL = `http://localhost:3000`;

function deleteBooksById(id) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${id}`, options).then(r => r.json());
}
// deleteBooksById(8).catch(console.log);
