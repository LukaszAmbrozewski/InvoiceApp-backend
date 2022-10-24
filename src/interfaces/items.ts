export interface Item {
  id: string;
  invoiceId: string;
  userId: string;
  name: string;
  quantity: number;
  netValue: number;
  totalNetValue: number;
  taxRate: number;
  taxValue: number;
  totalGrossValue: number;
}

export type ItemResponse =
  | {
      isSuccess: true;
      id: string;
      invoiceId: string;
    }
  | {
      isSuccess: false;
    };

export type AddItem = {
  name: string;
  quantity: number;
  netValue: number;
  taxRate: number;
};
