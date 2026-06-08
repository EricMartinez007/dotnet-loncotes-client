const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((r) => r.json());
};


export const getPatronById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const editPatron = (id, editedPatron) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  })
};

export const deactivatePatron = (id) => {
  return fetch(`${_apiUrl}/${id}/deactivate`, {
    method: "PUT",
  })
};

export const activatePatron = (id) => {
  return fetch(`${_apiUrl}/${id}/activate`, {
    method: "PUT",
  })
}