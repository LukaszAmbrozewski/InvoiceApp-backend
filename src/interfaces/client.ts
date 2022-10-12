export interface Client {
  id: string;
  userId: string;
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number | undefined;
  regon: number | undefined;
  email: string;
  phoneNumber: number | undefined;
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
