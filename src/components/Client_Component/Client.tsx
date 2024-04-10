import React from "react";

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

const Client = (props: ClientProps) => {
  return (
    <div>
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>Client ID: {props.clientId}</p>
      <p>Gender: {props.gender}</p>
      <p>Ethnicity: {props.ethnicity}</p>
      <p>Date of Birth: {props.dateOfBirth}</p>
      <p>Address: {props.address}</p>
      <p>Language: {props.language}</p>
      <p>Zipcode: {props.zipcode}</p>
      <p>District: {props.district}</p>
      <p>Phone Number: {props.phoneNumber}</p>
      <p>
        Info URL: <a href={props.infoUrl}>{props.infoUrl}</a>
      </p>
      <p>Comment: {props.comment}</p>
    </div>
  );
};

export default Client;
