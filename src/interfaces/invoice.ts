export interface Invoice {
  id: string;
  userId: string;
  clientId: string;
  invoiceNumber: string;
  creationDate: string;
  dateOfService: string;
  place: string;
  netValueOfTheEntireInvoice: number;
  tax: number;
  grossValueOfEntireInvoice: number;
  personCreatingInvoice: string;
  methodOfPayment: string;
  dueDate: string;
  accountNumber: string;
}

export type InvoiceResponse =
  | {
      isSuccess: true;
      id: string;
      clientId: string;
    }
  | {
      isSuccess: false;
    };

export type InvoiceRemoveResponse =
  | {
      isSuccess: true;
      id: string;
    }
  | {
      isSuccess: false;
    };
