import React, { useState, useEffect } from "react";
import ClientForm, {
  ClientFormProps,
} from "../../components/Client_Component/ClientForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ClientDetailPage() {
  let { id } = useParams();

  const [clientForm, setClientForm] = useState<ClientFormProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/clientData.json")
      .then((response) => response.json())
      .then((data) => setClientForm(data))
      .catch((error) => console.error("Error fetching Client data", error));
  }, []);

  const handleSubmit = () => {};

  const handleDelete = () => {
    console.log("Deleting Client:", clientForm);
    setClientForm(null);
    navigate("/clients/search");
  };

  useEffect(() => {
    if (clientForm) {
      console.log("Client is now editable:", clientForm.isEditable);
      setClientForm({ ...clientForm });
    }
  }, [clientForm?.isEditable]);

  if (!clientForm) {
    return <div>Loading Client...</div>;
  }

  return (
    <div>
      <section className="clientInfo">
        <h2>Client</h2>
        {clientForm && <ClientForm {...clientForm} />}
      </section>
      <section className="actionSection">
        <button
          type="button"
          className="btn btn-primary"
          // onClick={() => clientForm.(true)}
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
