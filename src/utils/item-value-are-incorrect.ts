import { HttpException, HttpStatus } from '@nestjs/common';

export const itemValueAreIncorrect = () => {
  throw new HttpException(
    {
      status: HttpStatus.FORBIDDEN,
      error: 'Item values are incorrect!',
    },
    HttpStatus.FORBIDDEN,
  );
};
