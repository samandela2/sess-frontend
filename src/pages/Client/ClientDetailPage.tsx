import React, { useState, useEffect } from "react";
import Client, { ClientProps } from "../../components/Client_Component/Client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ClientDetailPage() {
  let { id } = useParams();

  const [client, setClient] = useState<ClientProps | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isValidateData, setIsValidateData] = useState(true);
  const navigate = useNavigate();

  const validateStringFields = (
    client: { [key: string]: any },
    fields: string[]
  ): boolean => {
    const alphaRegex = /^[a-zA-Z]+$/;
    const result = fields.every((field) => {
      const fieldValue = client[field];
      const isFieldDefined = fieldValue !== undefined;
      const isValid = alphaRegex.test(fieldValue);

      // Log information about the field and its validation status
      console.log(
        `Checking field: ${field}; Field value: '${fieldValue} ; Is defined: ${isFieldDefined} ; Passes regex: ${isValid}`
      );
      // console.log(`Field value: '${fieldValue}'`);
      // console.log(`Is defined: ${isFieldDefined}`);
      // console.log(`Passes regex: ${isValid}\n`);

      return isFieldDefined && isValid;
    });
    console.log("Overall result is: " + result);
    return result;
  };

  const validateData = (client: {
    firstName?: string;
    lastName?: string;
    gender?: string;
    ethnicity?: string;
    language?: string;
  }) => {
    const isValidClient = validateStringFields(client, [
      "firstName",
      "lastName",
      "gender",
      "ethnicity",
      "language",
    ]);

    setIsValidateData(isValidClient);
    console.log("isValidClient: " + isValidClient);
  };

  const handleSubmit = () => {
    if (client) {
      validateData(client);
    }
    if (isValidateData) {
      setIsEditable(false);
    }
  };

  const handleDelete = () => {
    console.log("Deleting Client:", client);
    setClient(null);
    navigate("/clients/search");
  };

  useEffect(() => {
    fetch("/clientData.json")
      .then((response) => response.json())
      .then((data) => setClient(data))
      .catch((error) => console.error("Error fetching Client data", error));
  }, []);

  useEffect(() => {
    if (client) {
      console.log("Client is now editable:", isEditable);
      setClient({ ...client, editable: isEditable });
    }
  }, [isEditable]);

  if (!client) {
    return <div>Loading Client...</div>;
  }

  return (
    <div>
      <section className="clientInfo">
        <h2>Client</h2>
        {client && <Client {...client} />}
      </section>
      <section className="actionSection">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsEditable(true)}
        >
          Modify
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default ClientDetailPage;
