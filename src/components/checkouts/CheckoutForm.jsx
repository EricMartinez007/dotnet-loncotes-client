import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCheckout } from "../../data/checkoutsData";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckoutForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [patronId, setPatronId] = useState(0);

    const submit = () => {
        const newCheckout = {
            materialId: parseInt(id),
            patronId
        };

        createCheckout(newCheckout).then(() => {
            navigate("/browse")
        })
    }

    return (
        <div className="container">
            <h4>Checkout Form</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="patronId">Patron Id</Label>
                    <Input
                        type="text"
                        placeholder="Id #"
                        name="patronId"
                        value={patronId}
                        onChange={(e) => {
                            setPatronId(parseInt(e.target.value));
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>

            </Form>
        </div>
    )
}