import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ClientSearchPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clientId, setClientId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Pseudo function to simulate an API call
  const searchClients = async (searchParams: {
    firstName: string;
    lastName: string;
    clientId: string;
    phoneNumber: string;
  }) => {
    // This would be replaced with your actual API call
    console.log("Searching with these params:", searchParams);
    return []; // This would be replaced with the actual search results
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = { firstName, lastName, clientId, phoneNumber };
    try {
      const results = await searchClients(searchParams);
      // handle your search results here
    } catch (error) {
      // handle any errors here
    }
  };

  return (
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
        <Form.Label>Client ID</Form.Label>
        <Form.Control
          type="text"
          pattern="\d{4}"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
        <Form.Text className="text-muted">
          Client ID must be 4 digits.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default ClientSearchPage;
