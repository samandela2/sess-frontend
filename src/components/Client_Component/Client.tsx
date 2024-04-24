import React, { useEffect, useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "./Client.css";

export interface ClientProps {
  clientId?: number;
  firstName?: string;
  lastName?: string;
  gender?: string;
  ethnicity?: string;
  dateOfBirth?: string;
  address?: string;
  language?: string;
  zipcode?: string;
  district?: number;
  phoneNumber?: string;
  infoUrl?: string;
  comment?: string;
  editable?: boolean;
}

function Client(props: ClientProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [client, setClient] = useState<ClientProps>(props);
  const allowFields = [
    "firstName",
    "lastName",
    "gender",
    "ethnicity",
    "dateOfBirth",
    "address",
    "language",
    "zipcode",
    "district",
    "infoUrl",
    "comment",
  ];

  useEffect(() => {
    setClient((prevState) => ({
      ...prevState,
      editable: props.editable,
    }));
  }, [props.editable]);

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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
        />
        <label htmlFor="floatingInputDisabled">District</label>
      </div>

      <div className="form-floating mb-3">
        <PhoneInput
          country={"us"}
          placeholder=""
          value={client.phoneNumber}
          onChange={handlePhoneChange}
          disabled={!client.editable}
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
          disabled={!client.editable}
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
          disabled={!client.editable}
        />
        <label htmlFor="floatingInputDisabled">Comment</label>
      </div>
    </div>
  );
}

export default Client;
