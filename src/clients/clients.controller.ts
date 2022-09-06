import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { AddClientResponse, Client } from '../interfaces/client';
import { ClientsService } from './clients.service';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(@Inject(ClientsService) private clientsService: ClientsService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getAllUsers(@UserObj() user: User): Promise<Client[]> {
    return this.clientsService.getAllUsers(user);
  }

  @Get('/:clientId')
  @UseGuards(AuthGuard('jwt'))
  getOneUser(
    @Param('clientId') clientId: string,
    @UserObj() user: User,
  ): Promise<{ isSuccess: boolean } | Client> {
    return this.clientsService.getOneUsers(user, clientId);
  }

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  addClient(
    @Body() newClient: ClientDto,
    @UserObj() user: User,
  ): Promise<AddClientResponse> {
    return this.clientsService.addClient(newClient, user);
  }
}
