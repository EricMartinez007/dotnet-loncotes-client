import { useEffect, useState } from "react";
import { getAvailableMaterials } from "../../data/materialsData";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function Browse() {
    const [availableMaterials, setAvailableMaterials] = useState([]);

    useEffect(() => {
        getAvailableMaterials().then(setAvailableMaterials);
    }, [])

    return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {availableMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}/checkout`} className="btn btn-primary">Checkout</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}