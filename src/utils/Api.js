const baseUrl =
  "https://my-json-server.typicode.com/monica-code-design/se_project_react";
// const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// GET Items
export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

// POST Items
export function postItems({ name, link, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  }).then(checkResponse);
}

// DELETE Items
export function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((error) => {
      console.error("Error deleting item:", error);
      throw error;
    });
}