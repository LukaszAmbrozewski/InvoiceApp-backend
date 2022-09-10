import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientResponse, Client } from '../interfaces/client';
import { Clients } from './clients.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ClientsService {
  async getAllClients(user: User): Promise<Client[]> {
    return await Clients.find({
      where: {
        userId: user.id,
      },
    });
  }

  updateClientObj = (client, newClientObj) => {
    client.companyName = newClientObj.companyName;
    client.streetAddress = newClientObj.streetAddress;
    client.cityAndCode = newClientObj.cityAndCode;
    client.nip = newClientObj.nip;
    client.regon = newClientObj.regon;
    client.email = newClientObj.email;
    client.phoneNumber = newClientObj.phoneNumber;

    return client;
  };

  validationNewClientObj = (newClientObj) => {
    if (
      typeof newClientObj.companyName !== 'string' ||
      typeof newClientObj.streetAddress !== 'string' ||
      typeof newClientObj.cityAndCode !== 'string' ||
      typeof Number(newClientObj.nip) !== 'number' ||
      typeof Number(newClientObj.regon) !== 'number' ||
      typeof newClientObj.email !== 'string' ||
      typeof Number(newClientObj.phoneNumber) !== 'number' ||
      newClientObj.companyName.length > 255 ||
      newClientObj.streetAddress.length > 255 ||
      newClientObj.cityAndCode.length > 255 ||
      newClientObj.nip.toString().length > 10 ||
      newClientObj.regon.toString().length > 14 ||
      newClientObj.email.length > 255 ||
      newClientObj.phoneNumber.toString().length > 18
    ) {
      return false;
    } else {
      return true;
    }
  };

  async getOneClient(user: User, clientId: string) {
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

  async addClient(newClient: Client, user: User): Promise<ClientResponse> {
    const checkClientByNip = await Clients.findOne({
      where: {
        userId: user.id,
        nip: newClient.nip,
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

    if (!this.validationNewClientObj(newClient)) {
      return {
        isSuccess: false,
      };
    }
    const client = new Clients();

    client.userId = user.id;
    this.updateClientObj(client, newClient);

    await client.save();

    return {
      isSuccess: true,
      id: client.id,
      companyName: client.companyName,
    };
  }

  async removeClient(user: User, clientId: string): Promise<ClientResponse> {
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

    if (client) {
      await client.remove();

      return {
        isSuccess: true,
        id: client.id,
        companyName: client.companyName,
      };
    }

    return {
      isSuccess: false,
    };
  }

  async patchClient(
    patchedClient: Client,
    user: User,
  ): Promise<ClientResponse> {
    const client = await Clients.findOne({
      where: {
        userId: user.id,
        id: patchedClient.id,
      },
    });

    if (!client) {
      return {
        isSuccess: false,
      };
    }

    this.updateClientObj(client, patchedClient);

    if (!this.validationNewClientObj(client)) {
      return {
        isSuccess: false,
      };
    }

    await client.save();

    return {
      isSuccess: true,
      id: client.id,
      companyName: client.companyName,
    };
  }
}
