import { Client } from "../types/Interface";

export const initEmptyClient = (): Client => {
  return {
    clientId: 0,
    firstName: "",
    lastName: "",
    gender: "",
    ethnicity: "",
    dateOfBirth: "",
    address: "",
    language: "",
    zipcode: "",
    district: 0,
    phoneNumber: "",
    infoUrl: "",
    comment: "",
  };
};

const validateFields = (
  client: { [key: string]: any },
  fields: string[],
  regex: RegExp
): boolean => {
  const result = fields.every((field) => {
    const fieldValue = client[field];
    const isFieldDefined = fieldValue !== undefined;
    const isValid = regex.test(fieldValue);

    // console.log(
    //   `Checking field: ${field}; Field value: '${fieldValue} ; Is defined: ${isFieldDefined} ; Passes regex: ${isValid}`
    // );
    return isFieldDefined && isValid;
  });
  return result;
};

const validatePhone = (phone: string | undefined): boolean => {
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  console.log("phone: " + phone);
  return phone ? phoneRegex.test(phone) : false;
};

const validateZipcode = (zipcode: string | undefined): boolean => {
  const zipcodeRegex = /^\d{5}$/;
  console.log("zipcode: " + zipcode);
  return zipcode ? zipcodeRegex.test(zipcode) : false;
};

export const allowFields = [
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

//string: /^[a-zA-Z]+$/;
//number: /^\d+$/;
export const validateData = (client: {
  firstName?: string;
  lastName?: string;
  gender?: string;
  ethnicity?: string;
  language?: string;
  zipcode?: string;
  phoneNumber?: string;
}): boolean => {
  let isValidClient =
    validateFields(
      client,
      ["firstName", "lastName", "gender", "ethnicity", "language"],
      /^[a-zA-Z]+$/
    ) &&
    validateZipcode(client.zipcode) &&
    validatePhone(client.phoneNumber);

  return isValidClient;
  console.log("isValidClient: " + isValidClient);
};
