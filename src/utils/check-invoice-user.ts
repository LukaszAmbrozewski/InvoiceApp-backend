import { User } from '../user/user.entity';
import { Item } from '../interfaces/items';
import { Invoices } from '../invoices/invoices.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export const checkInvoiceUser = async (user: User, newItem: Item) => {
  const checkInvoiceUser = await Invoices.findOne({
    where: {
      id: newItem.invoiceId,
      userId: user.id,
    },
  });

  if (!checkInvoiceUser) {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Invoice not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
};
