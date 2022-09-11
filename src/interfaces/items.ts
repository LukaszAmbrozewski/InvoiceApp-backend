export interface Item {
  id: string;
  invoiceId: string;
  name: string;
  quantity: number;
  netValue: number;
  totalNetValue: number;
  taxRate: number;
  taxValue: number;
  totalGrossValue: number;
}
