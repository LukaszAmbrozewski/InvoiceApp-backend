import { HttpException, HttpStatus } from '@nestjs/common';

export const clientNotFound = () => {
  throw new HttpException(
    {
      status: HttpStatus.NOT_FOUND,
      error: 'Client not found!',
    },
    HttpStatus.NOT_FOUND,
  );
};
