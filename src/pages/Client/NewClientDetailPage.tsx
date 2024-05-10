import React, { useState, useEffect } from "react";
import ClientForm, {
  ClientFormProps,
} from "../../components/Client_Component/ClientForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Client } from "../../types/Interface";
import { initEmptyClient } from "../../utils/clientHelper";
import ClientSearchPage from "./ClientSearchPage";

export default function NewClientDetailPage() {
  const [client, setClient] = useState<Client>(initEmptyClient());
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/clients/search");
  };

  const handleSubmit = () => {};

  return (
    <div>
      <section className="clientInfo">
        <h2>New Client</h2>
        <ClientForm
          client={client}
          isNewClient={true}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}
