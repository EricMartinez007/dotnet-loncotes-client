import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPatronById } from "../../data/patronsData";
import { Table } from "reactstrap";

export default function PatronDetails() {
    const { id } = useParams();

    const [patron, setPatron] = useState(null);

    useEffect(() => {
        getPatronById(id).then(setPatron);
    }, [])

    if(!patron){
        return null;
    }

    return (
        <div className="container">
        <h2>{patron.firstName} {patron.lastName} </h2>
        <Table>
            <tbody>
            <tr>
                <th scope="row">Address</th>
                <td>{patron.address}</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>{patron.email}</td>
            </tr>
            <tr>
                <th scope="row">Active</th>
                <td>
                {patron.isActive ? "yes" : "no"}
                </td>
            </tr>
            <tr>
                <th scope="row">Balance</th>
                <td>
                {patron.balance ? `$${patron.balance}` : "$0.00"}
                </td>
            </tr>
            </tbody>
        </Table>
        <Link to="edit" className="btn btn-primary">Edit</Link>
        </div>
    )
}