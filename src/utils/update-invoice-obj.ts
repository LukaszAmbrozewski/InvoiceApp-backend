import { Invoice } from '../interfaces/invoice';

export const updateInvoiceObj = (invoice, newInvoiceObj: Invoice) => {
  invoice.id = newInvoiceObj.id;
  invoice.userId = newInvoiceObj.userId;
  invoice.clientId = newInvoiceObj.clientId;
  invoice.invoiceNumber = newInvoiceObj.invoiceNumber;
  invoice.creationDate = newInvoiceObj.creationDate;
  invoice.dateOfService = newInvoiceObj.dateOfService;
  invoice.place = newInvoiceObj.place;
  invoice.netValueOfTheEntireInvoice = newInvoiceObj.netValueOfTheEntireInvoice;
  invoice.tax = newInvoiceObj.tax;
  invoice.grossValueOfEntireInvoice = newInvoiceObj.grossValueOfEntireInvoice;
  invoice.personCreatingInvoice = newInvoiceObj.personCreatingInvoice;
  invoice.methodOfPayment = newInvoiceObj.methodOfPayment;
  invoice.dueDate = newInvoiceObj.dueDate;
  invoice.accountNumber = newInvoiceObj.accountNumber;

  return invoice;
};
