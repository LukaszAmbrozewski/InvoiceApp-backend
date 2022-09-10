import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { ClientResponse, Client } from '../interfaces/client';
import { ClientsService } from './clients.service';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(@Inject(ClientsService) private clientsService: ClientsService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getAllUsers(@UserObj() user: User): Promise<Client[]> {
    return this.clientsService.getAllClients(user);
  }

  @Get('/:clientId')
  @UseGuards(AuthGuard('jwt'))
  getOneClient(
    @Param('clientId') clientId: string,
    @UserObj() user: User,
  ): Promise<{ isSuccess: boolean } | Client> {
    return this.clientsService.getOneClient(user, clientId);
  }

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  addClient(
    @Body() newClient: ClientDto,
    @UserObj() user: User,
  ): Promise<ClientResponse> {
    return this.clientsService.addClient(newClient, user);
  }

  @Delete('/:clientId')
  @UseGuards(AuthGuard('jwt'))
  removeOneClient(
    @Param('clientId') clientId: string,
    @UserObj() user: User,
  ): Promise<ClientResponse> {
    return this.clientsService.removeClient(user, clientId);
  }
}
