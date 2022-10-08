export interface Client {
  id: string;
  userId: string;
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number | null;
  regon: number | null;
  email: string;
  phoneNumber: number | null;
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
