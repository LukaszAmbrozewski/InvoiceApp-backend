import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Item } from '../interfaces/items';
import { Items } from './items.entity';

@Injectable()
export class ItemsService {
  async getAllItemsForInvoice(user: User, invoiceId: string): Promise<Item[]> {
    return await Items.find({
      where: {
        userId: user.id,
        invoiceId: invoiceId,
      },
    });
  }
}
