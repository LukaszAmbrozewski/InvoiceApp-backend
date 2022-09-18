export interface RegisterUserResponse {
  email: string;
  id: string;
}

export type UserDataResponse = {
  id: string;
  email: string;
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number;
  regon: number;
  phoneNumber: number;
};
