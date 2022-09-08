import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddClientResponse, Client } from '../interfaces/client';
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

  async getOneUsers(user: User, clientId: string) {
    const client = await Clients.findOne({
      where: {
        userId: user.id,
        id: clientId,
      },
    });

    if (!client) {
      return {
        isSuccess: false,
      };
    }
    return client;
  }

  async addClient(newClient: Client, user: User): Promise<AddClientResponse> {
    const {
      companyName,
      streetAddress,
      cityAndCode,
      nip,
      regon,
      email,
      phoneNumber,
    } = newClient;

    const checkClientByNip = await Clients.findOne({
      where: {
        userId: user.id,
        nip: nip,
      },
    });

    if (checkClientByNip) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Client is already exist!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    if (
      typeof companyName !== 'string' ||
      typeof streetAddress !== 'string' ||
      typeof cityAndCode !== 'string' ||
      typeof Number(nip) !== 'number' ||
      typeof Number(regon) !== 'number' ||
      typeof email !== 'string' ||
      typeof Number(phoneNumber) !== 'number' ||
      companyName.length > 255 ||
      streetAddress.length > 255 ||
      cityAndCode.length > 255 ||
      nip.toString().length > 10 ||
      regon.toString().length > 14 ||
      email.length > 255 ||
      phoneNumber.toString().length > 18
    ) {
      return {
        isSuccess: false,
      };
    }

    const client = new Clients();

    client.userId = user.id;
    client.companyName = companyName;
    client.streetAddress = streetAddress;
    client.cityAndCode = cityAndCode;
    client.nip = nip;
    client.regon = regon;
    client.email = email;
    client.phoneNumber = phoneNumber;

    await client.save();

    return {
      isSuccess: true,
      id: client.id,
      companyName: client.companyName,
    };
  }
}
