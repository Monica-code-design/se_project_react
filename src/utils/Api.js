import { baseUrl } from "./constants";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// GET Items
export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(res);
}

// POST Items
export async function postItems({ name, imageUrl, weather }) {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
  return checkResponse(res);
}

// DELETE Items
export async function deleteItems(_id) {
  try {
    const res = await fetch(`${baseUrl}/items/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}
