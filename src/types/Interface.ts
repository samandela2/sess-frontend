

export interface Client {
    clientId: number;
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
    comment?: string;
  }
  

  export interface Task {
    taskId: number;
    startTime: string;
    endTime: string;
    location: string;
    type: string;
    clientId?: number | string;
    ownerId: number;
    comment?: string ;
  }