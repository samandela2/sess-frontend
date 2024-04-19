import React, { useState, useEffect } from "react";
import Client, { ClientProps } from "../../components/Client_Component/Client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ClientDetailPage() {
  let { id } = useParams();

  const [client, setClient] = useState<ClientProps | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsEditable(false);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/clients/${id}`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setClient(data);
  //     } catch (error) {
  //       console.error("Failed to fetch client data:", error);
  //     }
  //   };

  //   if (id) {
  //     // Only fetch data if id is not null or undefined
  //     fetchData();
  //   }
  // }, [id]);

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
      <section>
        <h2>Client</h2>
        {client && <Client {...client} />}
      </section>
      <section>
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
