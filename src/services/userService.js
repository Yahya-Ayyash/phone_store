export const getUser = (id) => {
  return fetch(`/api/users/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error;
    });
};