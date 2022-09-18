import { Clients } from '../clients/clients.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export const GetClientNameById = async (id: string): Promise<string> => {
  const client = await Clients.findOne({
    where: {
      id,
    },
  });

  if (!client) {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Client not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  return client.companyName;
};
