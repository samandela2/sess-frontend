import React, { useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "./Client.css";

export interface ClientProps {
  clientId: string;
  firstName: string;
  lastName: string;
  gender: string;
  ethnicity: string;
  dateOfBirth: string;
  address: string;
  language: string;
  zipcode: string;
  district: number;
  phoneNumber: string;
  infoUrl: string;
  comment: string;
}

function Client(props: ClientProps) {
  const Disabled = false;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [client, setClient] = useState<ClientProps>(() => ({
    clientId: props.clientId,
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    gender: props.gender || "",
    ethnicity: props.ethnicity || "",
    dateOfBirth: props.dateOfBirth || "",
    address: props.address || "",
    language: props.language || "",
    zipcode: props.zipcode || "",
    district: props.district || 0,
    phoneNumber: props.phoneNumber || "",
    infoUrl: props.infoUrl || "",
    comment: props.comment || "",
  }));

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setClient((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
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
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
        />
        <label htmlFor="floatingInputDisabled">Language</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInputDisabled"
          placeholder=""
          name="zipcode"
          value={client.zipcode}
          onChange={handleChange}
          disabled={Disabled}
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
          disabled={Disabled}
        />
        <label htmlFor="floatingInputDisabled">District</label>
      </div>

      <div className="form-floating mb-3">
        <PhoneInput
          country={"us"}
          placeholder=""
          value={client.phoneNumber}
          onChange={handlePhoneChange}
          disabled={Disabled}
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
          disabled={Disabled}
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
          disabled={Disabled}
        />
        <label htmlFor="floatingInputDisabled">Comment</label>
      </div>
    </div>
  );
}

export default Client;
