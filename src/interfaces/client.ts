export interface Client {
  id: string;
  userId: string;
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number;
  regon: number;
  email: string;
  phoneNumber: number;
}

export type ClientResponse =
  | {
      isSuccess: true;
      id: string;
      companyName: string;
    }
  | {
      isSuccess: false;
    };
