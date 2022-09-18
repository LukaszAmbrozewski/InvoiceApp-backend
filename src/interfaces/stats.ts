export interface MonthStats {
  year: string;
  monthName: string;
  totalInvoicesValue: number;
  invoicesCount: number;
  averageInvoiceValue: number;
}

export type Period = {
  startingDate: string;
  endingDate: string;
};
