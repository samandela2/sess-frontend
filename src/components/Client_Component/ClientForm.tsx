import React, { useEffect, useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ClientForm.css";
import { Client } from "../../types/Interface";
import {
  initEmptyClient,
  allowFields,
  validateData,
} from "../../utils/clientHelper";

export interface ClientFormProps {
  client: Client;
  isNewClient: boolean;
  handleDelete: () => void;
  handleSubmit: () => void;
}

export default function ClientForm({
  client,
  isNewClient,
  handleDelete,
  handleSubmit,
}: ClientFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditable, setIsEditable] = useState(isNewClient);
  const [isValidData, setIsValidData] = useState<boolean>(true);
  const [clientInfo, setClientInfo] = useState<Client>(client);

  useEffect(() => {
    setClientInfo(client);
  }, [client]);

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setClientInfo((prevInfo) => ({ ...prevInfo, phoneNumber: value }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (allowFields.includes(name)) {
      setClientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
      console.log([name] + " : " + value);
    }
  };

  const handleModify: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsEditable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="firstName"
          value={clientInfo.firstName}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">First Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="lastName"
          value={clientInfo.lastName}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Last Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="gender"
          value={clientInfo.gender}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Gender</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="ethnicity"
          value={clientInfo.ethnicity}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Ethnicity</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="date"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="dateOfBirth"
          value={clientInfo.dateOfBirth}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Date of Birth</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="address"
          value={clientInfo.address}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Address</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="language"
          value={clientInfo.language}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Language</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="zipcode"
          value={clientInfo.zipcode}
          maxLength={5}
          pattern="\d{5}"
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Zipcode</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="district"
          value={clientInfo.district}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">District</label>
      </div>

      <div className="form-floating mb-3">
        <PhoneInput
          country={"us"}
          placeholder=""
          value={clientInfo.phoneNumber}
          onChange={handlePhoneChange}
          disabled={!isEditable}
        />
      </div>

      <div className="form-floating mb-3">
        <input
          type="url"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="infoUrl"
          value={clientInfo.infoUrl}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Info URL</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="comment"
          value={clientInfo.comment ? clientInfo.comment : ""}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Comment</label>
      </div>

      <section className="actionSection">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleModify}
          hidden={isNewClient}
        >
          Modify
        </button>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </form>
  );
}
