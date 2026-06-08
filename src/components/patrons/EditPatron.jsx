import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editPatron, getPatronById } from "../../data/patronsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function EditPatron() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [patron, setPatron] = useState(null);
    const [patronAddress, setPatronAddress] = useState("");
    const [patronEmail, setPatronEmail] = useState("");

    useEffect(() => {
        getPatronById(id).then(setPatron);
    }, [])

    useEffect(() => {
        if (patron) {
            setPatronAddress(patron.address);
            setPatronEmail(patron.email);
        }
    }, [patron]);


    const submit = () => {
        const updatedPatron = {
            address : patronAddress,
            email: patronEmail
        };

        editPatron(id, updatedPatron).then(() => {
            navigate(`/patrons/${id}`)
        })
    }

    if(!patron){
        return null;
    }

    return (
        <div className="container">
            <h4>Edit Details for {patron.firstName} {patron.lastName}</h4>
            <Form>
                <FormGroup>
                <Label htmlFor="patronAddress">Address</Label>
                <Input
                    type="text"
                    placeholder={patron.address}
                    name="patronAddress"
                    value={patronAddress}
                    onChange={(e) => {
                    setPatronAddress(e.target.value);
                    }}
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="patronEmail">Email</Label>
                <Input
                    type="text"
                    placeholder={patron.email}
                    name="patronEmail"
                    value={patronEmail}
                    onChange={(e) => {
                    setPatronEmail(e.target.value);
                    }}
                />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form>
        </div>
    )
}