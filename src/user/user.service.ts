import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import {
  PatchedUsedData,
  RegisterUserResponse,
  UserData,
  UserPatchResponse,
} from '../interfaces/user';
import { User } from './user.entity';
import { hashPwd } from '../utils/hash-pwd';
import { validationUserObj } from '../utils/validation-user-obj';

@Injectable()
export class UserService {
  filter(user: User): RegisterUserResponse {
    const { id, email } = user;
    return { id, email };
  }

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    const checkUser = await User.findOne({
      where: {
        email: newUser.email,
      },
    });

    if (checkUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Email is already exists!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const user = new User();
    user.email = newUser.email;
    user.pwdHash = hashPwd(newUser.pwd);
    await user.save();

    return this.filter(user);
  }

  async getUserData(user: User): Promise<UserData> {
    const userData = await User.findOne({
      where: {
        id: user.id,
      },
    });

    const {
      id,
      email,
      companyName,
      streetAddress,
      cityAndCode,
      nip,
      regon,
      phoneNumber,
    } = userData;

    return {
      id,
      email,
      companyName,
      streetAddress,
      cityAndCode,
      nip,
      regon,
      phoneNumber,
    };
  }

  async patchUserData(
    user: User,
    patchUserData: PatchedUsedData,
  ): Promise<UserPatchResponse> {
    const userObj = await User.findOne({
      where: {
        id: user.id,
      },
    });

    const { companyName, streetAddress, cityAndCode, nip, regon, phoneNumber } =
      patchUserData;

    await validationUserObj(user, patchUserData);

    userObj.companyName = companyName;
    userObj.streetAddress = streetAddress;
    userObj.cityAndCode = cityAndCode;
    userObj.nip = nip;
    userObj.regon = regon;
    userObj.phoneNumber = phoneNumber;

    await userObj.save();
    return {
      isSuccess: true,
    };
  }
}
