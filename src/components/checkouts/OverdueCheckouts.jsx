import { useEffect, useState } from "react";
import { getOverdueCheckouts } from "../../data/checkoutsData";
import { Table } from "reactstrap";

export default function OverdueCheckouts() {
    const [overdueCheckouts, setOverdueCheckouts] = useState([]);

    useEffect(() => {
        getOverdueCheckouts().then(setOverdueCheckouts);
    }, [])

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Overdue Checkouts</h4>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Patron Name</th>
                    <th>Checkout Date</th>
                    
                </tr>
                </thead>
                <tbody>
                {overdueCheckouts.map((c) => (
                    <tr key={`materials-${c.id}`}>
                        <th scope="row">{c.id}</th>
                        <td>{c.material.materialName}</td>
                        <td>{c.patron.firstName} {c.patron.lastName}</td>
                        <td>{c.checkoutDate?.split("T")[0]}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}