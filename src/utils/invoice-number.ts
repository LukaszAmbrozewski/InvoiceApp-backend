import { Invoices } from '../invoices/invoices.entity';

export const invoiceNumber = async (userId: string): Promise<string> => {
  const lastInvoiceNumber = await Invoices.find({
    where: {
      userId: userId,
    },
  });
  const today = new Date();
  const year = today.getFullYear();
  return `${lastInvoiceNumber.length + 1}/${year}`;
};
