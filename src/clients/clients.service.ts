import { Injectable } from '@nestjs/common';
import { Client } from '../interfaces/client';
import { Clients } from './clients.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ClientsService {
  async getAllUsers(user: User): Promise<Client[]> {
    return await Clients.find({
      where: {
        userId: user.id,
      },
    });
  }
}
