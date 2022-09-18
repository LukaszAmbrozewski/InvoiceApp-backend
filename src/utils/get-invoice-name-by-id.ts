import { HttpException, HttpStatus } from '@nestjs/common';
import { Invoices } from '../invoices/invoices.entity';

export const GetInvoiceNameById = async (id: string): Promise<string> => {
  const invoice = await Invoices.findOne({
    where: {
      id,
    },
  });

  if (!invoice) {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Invoices not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  return invoice.invoiceNumber;
};
