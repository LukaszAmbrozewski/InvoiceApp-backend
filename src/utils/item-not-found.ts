import { HttpException, HttpStatus } from '@nestjs/common';

export const itemNotFound = () => {
  throw new HttpException(
    {
      status: HttpStatus.NOT_FOUND,
      error: 'Item not found!',
    },
    HttpStatus.NOT_FOUND,
  );
};
