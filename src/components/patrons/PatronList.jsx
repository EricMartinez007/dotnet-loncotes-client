import { useEffect, useState } from "react";
import { getPatrons } from "../../data/patronsData";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Active</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {patrons.map((p) => (
                    <tr key={`patrons-${p.id}`}>
                    <th scope="row">{p.id}</th>
                    <td>{p.firstName}</td>
                    <td>{p.lastName}</td>
                    <td>{p.isActive ? "yes" : "no"}</td>
                    <td>
                        <Link to={`${p.id}`} className="btn btn-primary">Details</Link>
                    </td>
                    <td>
                        <Link to={`${p.id}`} className="btn btn-primary">Deactivate</Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}