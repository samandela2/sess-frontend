import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ClientSearchPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const searchClients = async (searchParams: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
  }) => {
    console.log("Searching with these params:", searchParams);
    return [];
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = { firstName, lastName, phoneNumber };
    try {
      const results = await searchClients(searchParams);

      console.log("result is " + results);
    } catch (error) {
      alert("Error searching clients");
    }
  };

  return (
    <div>
      <h1 className="display-5">Search Clients</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default ClientSearchPage;
