import { HttpException, HttpStatus } from '@nestjs/common';

export const invoiceNotFound = () => {
  throw new HttpException(
    {
      status: HttpStatus.NOT_FOUND,
      error: 'Invoice not found!',
    },
    HttpStatus.NOT_FOUND,
  );
};
