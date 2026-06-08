import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getMaterials, removeMaterialFromCirculation } from "../../data/materialsData";
import { Link } from "react-router-dom";
import { getGenres } from "../../data/genresData";
import { getMaterialTypes } from "../../data/materialTypesData";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [genres, setGenres] = useState([]);
  const [materialTypes, setMaterialTypes] = useState([]);
  const [genreId, setGenreId] = useState("");
  const [materialTypeId, setMaterialTypeId] = useState("");

  useEffect(() => {
    getGenres().then(setGenres)
    getMaterialTypes().then(setMaterialTypes)
  }, [])

  useEffect(() => {
    getMaterials(genreId, materialTypeId).then(setMaterials)
  }, [genreId, materialTypeId]);

  const handleRemoveMaterial = (materialId) => {
    removeMaterialFromCirculation(materialId).then(() => {
      getMaterials(genreId, materialTypeId).then(setMaterials);
    });
  }

  const handleGenreSelect = (e) => {
    setGenreId(e.target.value);
  };

  const handleMaterialTypeSelect = (e) => {
    setMaterialTypeId(e.target.value);
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
      </div>
      <select
        value={genreId}
        onChange={handleGenreSelect}
      >
        <option value="">All</option>
        {genres.map((g) => 
          <option key={g.id} value={g.id}>
            {g.name}
          </option>)}
      </select>
      <select
        value={materialTypeId}
        onChange={handleMaterialTypeSelect}
      >
        <option value="">All</option>
        {materialTypes.map((m) => 
          <option key={m.id} value={m.id}>
            {m.name}
          </option>)}
      </select>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`} className="btn btn-primary">Details</Link>
              </td>
              <td>
                {!m.outOfCirculationSince ? <Button onClick={() => handleRemoveMaterial(m.id)}>Remove from Circulation</Button> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/materials/create" className="btn btn-primary">Add</Link>
    </div>
  );
}
