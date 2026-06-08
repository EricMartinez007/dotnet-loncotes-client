import { useEffect, useState } from "react";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData";
import { Button, Table } from "reactstrap";

export default function CheckoutList() {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, []);

    const handleReturnCheckout = (checkoutId) => {
        returnCheckout(checkoutId).then(() => {
            getCheckouts().then(setCheckouts);
        });
    }
    
    return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Item Name</th>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((c) => (
            <tr key={`checkouts-${c.id}`}>
              <th scope="row">{c.id}</th>
              <td>{c.material.materialName}</td>
              <td>{c.patron.firstName} {c.patron.lastName}</td>
              <td>{c.checkoutDate?.split("T")[0]}</td>
              <td>
                <Button onClick={() => handleReturnCheckout(c.id)}>Return</Button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}