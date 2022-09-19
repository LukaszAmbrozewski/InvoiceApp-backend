import { User } from '../user/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PatchedUsedData } from '../interfaces/user';

export const validationUserObj = (
  user: User,
  patchUserData: PatchedUsedData,
) => {
  const { companyName, streetAddress, cityAndCode, nip, regon, phoneNumber } =
    patchUserData;

  if (
    typeof companyName !== 'string' ||
    typeof streetAddress !== 'string' ||
    typeof cityAndCode !== 'string' ||
    typeof Number(nip) !== 'number' ||
    typeof Number(regon) !== 'number' ||
    typeof Number(phoneNumber) !== 'number' ||
    companyName.length > 255 ||
    streetAddress.length > 80 ||
    cityAndCode.length > 50 ||
    nip.toString().length > 11 ||
    regon.toString().length > 15 ||
    phoneNumber.toString().length > 18
  ) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'The given data is incorrect!',
      },
      HttpStatus.FORBIDDEN,
    );
  }
};
