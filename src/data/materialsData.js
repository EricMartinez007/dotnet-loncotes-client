const _apiUrl = "/api/materials";

export const getMaterials = (genreId, materialTypeId) => {
  const params = new URLSearchParams();
  if (genreId) params.append("genreId", genreId);
  if (materialTypeId) params.append("materialTypeId", materialTypeId);
  const query = params.toString();
  return fetch(query ? `${_apiUrl}?${query}` : _apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

export const removeMaterialFromCirculation  = (materialId) => {
  return fetch(`${_apiUrl}/${materialId}/withdraw`, {
    method: "PUT",
  });
}

export const getAvailableMaterials = () => {
  return fetch(`${_apiUrl}/available`).then((r) => r.json());
}