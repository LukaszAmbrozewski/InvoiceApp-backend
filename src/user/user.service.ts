import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterUserResponse } from '../interfaces/user';
import { User } from './user.entity';
import { hashPwd } from '../utils/hash-pwd';

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
}
