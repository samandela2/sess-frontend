import React, { useEffect, useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "./ClientForm.css";
import { Client } from "../../types/Interface";
import {
  initEmptyClient,
  allowFields,
  validateStringFields,
} from "../../utils/clientHelper";

export interface ClientFormProps {
  onClientSubmit: (client: Client) => void;
  client: Client;
}

export default function ClientForm({
  client,
  onClientSubmit,
}: ClientFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const [isValidData, setIsValidData] = useState<boolean>(true);

  useEffect(() => {
    setClient((prevState) => ({
      ...prevState,
    }));
  }, [isEditable]);

  const validateData = (client: {
    firstName?: string;
    lastName?: string;
    gender?: string;
    ethnicity?: string;
    language?: string;
    zipcode?: string;
  }) => {
    const isValidClient = validateStringFields(client, [
      "firstName",
      "lastName",
      "gender",
      "ethnicity",
      "language",
    ]);

    setIsValidData(isValidClient);
    console.log("isValidClient: " + isValidClient);
  };

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setClient((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (allowFields.includes(name)) {
      setClient((prevClient) => ({
        ...prevClient,
        [name]: value,
      }));
      // console.log([name] + " : " + value);
    }
  };

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="firstName"
          value={client.firstName}
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
          value={client.lastName}
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
          value={client.gender}
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
          value={client.ethnicity}
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
          value={client.dateOfBirth}
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
          value={client.address}
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
          value={client.language}
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
          value={client.zipcode}
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
          value={client.district}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">District</label>
      </div>

      <div className="form-floating mb-3">
        <PhoneInput
          country={"us"}
          placeholder=""
          value={client.phoneNumber}
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
          value={client.infoUrl}
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
          value={client.comment}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Comment</label>
      </div>
    </div>
  );
}
