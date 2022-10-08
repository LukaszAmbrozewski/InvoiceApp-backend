import { Controller, Post, Body, Get, UseGuards, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import {
  PatchedUsedData,
  RegisterUserResponse,
  UserData,
  UserPatchResponse,
} from '../interfaces';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UserObj } from '../decorators/user-obj.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async register(@Body() newUser: RegisterDto): Promise<RegisterUserResponse> {
    return this.userService.register(newUser);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async getUserData(@UserObj() user: User): Promise<UserData> {
    return this.userService.getUserData(user);
  }

  @Patch('/')
  @UseGuards(AuthGuard('jwt'))
  async patchUserData(
    @UserObj() user: User,
    @Body() patchedUserData: PatchedUsedData,
  ): Promise<UserPatchResponse> {
    return this.userService.patchUserData(user, patchedUserData);
  }
}
