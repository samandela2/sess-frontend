import React, { useState, useEffect } from "react";
import ClientForm, {
  ClientFormProps,
} from "../../components/Client_Component/ClientForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Client } from "../../types/Interface";
import { initEmptyClient } from "../../utils/clientHelper";
import ClientSearchPage from "./ClientSearchPage";

function ClientDetailPage() {
  // let { id } = useParams();

  const [client, setClient] = useState<Client>(initEmptyClient());
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/clientData.json")
      .then((response) => response.json())
      .then((data) => setClient(data))
      .catch((error) => console.error("Error fetching Client data", error));
  }, []);

  // useEffect(() => {
  //   if (clientForm) {
  //     console.log("Client is now editable:", clientForm.isEditable);
  //     setClientForm({ ...clientForm });
  //   }
  // }, [clientForm?.isEditable]);

  // if (!clientForm) {
  //   return <div>Loading Client...</div>;
  // }

  const handleDelete = () => {
    navigate("/clients/search");
  };

  const handleSubmit = () => {};

  return (
    <div>
      <section className="clientInfo">
        <h2>Client</h2>
        <ClientForm
          client={client}
          isNewClient={false}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}

export default ClientDetailPage;
