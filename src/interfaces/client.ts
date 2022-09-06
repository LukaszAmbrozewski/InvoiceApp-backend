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

export type AddClientResponse =
  | {
      isSuccess: true;
      id: string;
      companyName: string;
    }
  | {
      isSuccess: false;
    };
