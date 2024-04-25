export const initEmptyClient = () => {
  return {
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

export const validateStringFields = (
  client: { [key: string]: any },
  fields: string[]
): boolean => {
  const alphaRegex = /^[a-zA-Z]+$/;
  const result = fields.every((field) => {
    const fieldValue = client[field];
    const isFieldDefined = fieldValue !== undefined;
    const isValid = alphaRegex.test(fieldValue);

    console.log(
      `Checking field: ${field}; Field value: '${fieldValue} ; Is defined: ${isFieldDefined} ; Passes regex: ${isValid}`
    );
    return isFieldDefined && isValid;
  });
  return result;
};

// const validateNumberFields = (client: {[key:string]:any}, fields: string[]): boolean => {
//   const numberRegex = /^d+$/;
//   const result = fields.every((field) => {
//     const fieldValue = client[field];
//     const isFieldDefined = fieldValue !== undefined;
//     const isValid = numberRegex.test(fieldValue);
//     console.log(
//       `Checking field: ${field}; Field value: '${fieldValue} ; Is defined: ${isFieldDefined} ; Passes regex: ${isValid}`
//     );
//     return isFieldDefined && isValid;
//   });
//   return result;
// }

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
