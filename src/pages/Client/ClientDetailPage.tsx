import React, { useState, useEffect } from "react";
import Client, { ClientProps } from "../../components/Client_Component/Client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ClientDetail.css";

function ClientDetailPage() {
  let { id } = useParams();

  const [client, setClient] = useState<ClientProps | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isValidateData, setIsValidateData] = useState(true);
  const navigate = useNavigate();

  const validateData = () => {};
  const handleSubmit = () => {
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
