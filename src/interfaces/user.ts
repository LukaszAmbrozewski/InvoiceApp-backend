export interface RegisterUserResponse {
  email: string;
  id: string;
}

export type UserData = {
  id: string;
  email: string;
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number | undefined;
  regon: number | undefined;
  phoneNumber: number | undefined;
};

export type PatchedUsedData = {
  companyName: string;
  streetAddress: string;
  cityAndCode: string;
  nip: number;
  regon: number;
  phoneNumber: number;
};

export type UserPatchResponse =
  | {
      isSuccess: true;
    }
  | {
      isSuccess: false;
    };
