import { Injectable } from '@nestjs/common';
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
    //@@TODO Dodaj sprawdzenie czy użytkownik o takim mailu istnieje!
    const user = new User();
    user.email = newUser.email;
    user.pwdHash = hashPwd(newUser.pwd);
    await user.save();

    return this.filter(user);
  }

  // async getOneUser(id: string): Promise<User> {
  //   return await User.findOne(id);
  // }
}
