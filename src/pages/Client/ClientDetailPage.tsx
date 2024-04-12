import React, { useState, useEffect } from "react";
import Client, { ClientProps } from "../../components/Client_Component/Client";

const ClientPage = () => {
  const [client, setClient] = useState<ClientProps[]>([]);

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    fetch("/clientData.json")
      .then((response) => response.json())
      .then((data) => setClient(data))
      .catch((error) => console.error("Error fetching Client data", error));
  }, []);

  if (!client) {
    return <div>Loading Client...</div>; // Or some loading spinner
  }

  return (
    <div>
      <section>
        <h2>Client</h2>
        {client.length > 0 && <Client {...client[0]} />}
      </section>
      <section>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsEditable(true)}
        >
          Modify
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </section>
    </div>
  );
};

export default ClientPage;
